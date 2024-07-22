const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");
const bcrypt = require("bcrypt");
const fs = require('fs');
const PDFDocument = require('pdfkit');



const templatePath = path.join(__dirname, '../templates');
const publicPath = path.join(__dirname, '../public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.set("view engine", "hbs");
app.set("views", templatePath);



// Register Handlebars helper function
hbs.registerHelper('formatDate', function(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-GB', options); // Change 'en-GB' to your desired locale
});

// Render login page
app.get("/", (req, res) => {
    res.render("login");
});

// Render signup page
app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        };

        await collection.insertMany([data]);
        res.render("login");
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send("Error during signup");
    }
});

app.post("/login", async (req, res) => {
    try {
        const user = await collection.findOne({ name: req.body.name, email: req.body.email });

        if (user && await bcrypt.compare(req.body.password, user.password)) {
            res.render("dashboard", { username: req.body.name });
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.send("Wrong details");
    }
});



// Render dashboard page
app.get("/dashboard", (req, res) => {
    const username = req.query.username;
    res.render("dashboard", { username });
});

// code portion written in scriptQuiz.js

app.post("/save-result", async (req, res) => {
    const { username, topCategory1, topCategory2 } = req.body;

    try {
        const user = await collection.findOneAndUpdate(
            { name: username },
            { $push: { results: { topCategory1, topCategory2, date: new Date() } } },
            { new: true }
        );

        if (!user) {
            console.log(`User '${username}' not found in database`);
            return res.status(404).send("User not found");
        }

        res.redirect(`/dashboard?username=${username}`);
    } catch (error) {
        console.error("Error saving result:", error);
        res.status(500).send("Error saving result");
    }
});

// retrieve results
app.get("/results", async (req, res) => {
    const username = req.query.username;

    try {
        const user = await collection.findOne({ name: username });

        if (!user) {
            console.log(`User '${username}' not found in database`);
            return res.status(404).send("User not found");
        }

        res.render("results", { results: user.results, username: username });
    } catch (error) {
        console.error("Error retrieving results:", error);
        res.status(500).send("Error retrieving results");
    }
});

// Route to download results as PDF
app.get('/download-results-pdf', async (req, res) => {
    const username = req.query.username;

    try {
        const user = await collection.findOne({ name: username });

        if (!user) {
            console.log(`User '${username}' not found in database`);
            return res.status(404).send("User not found");
        }

        // Create a new PDF document
        const doc = new PDFDocument();
        const filename = `${username}_results.pdf`;
        res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-type', 'application/pdf');

        // Pipe PDF data to response
        doc.pipe(res);

        // Add content to PDF
        doc.fontSize(20).text('Quiz Results', { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).text(`Username: ${username}`, { align: 'left' });
        doc.moveDown();

        doc.fontSize(12).text('Date', { continued: true }).text('Top Category 1', { continued: true, align: 'center' }).text('Top Category 2', { align: 'right' });
        doc.moveDown();

        user.results.forEach(result => {
            doc.fontSize(12).text(new Date(result.date).toLocaleDateString('en-GB'), { continued: true }).text(result.topCategory1, { continued: true, align: 'center' }).text(result.topCategory2, { align: 'right' });
            doc.moveDown();
        });

        // Finalize PDF file
        doc.end();
    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).send("Error generating PDF");
    }
});

// Handle user logout
app.get("/logout", (req, res) => {
    res.redirect("/");
});

// Serve QuizTest directory as static content
app.use('/quiztest', express.static(path.join(__dirname, '../QuizTest')));

// Serve TrailMakingTest index.html
app.get('/quiztest', (req, res) => {
    res.sendFile(path.join(__dirname, '../QuizTest/index.html'));
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
