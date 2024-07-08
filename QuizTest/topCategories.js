
document.addEventListener('DOMContentLoaded', function() {
    displayTopCategories();
    displayCareerOptions();

    // Handle next category arrow click
    document.getElementById('next').addEventListener('click', function() {
        navigateCareerOptions(1);
    });

    // Handle previous category arrow click
    document.getElementById('prev').addEventListener('click', function() {
        navigateCareerOptions(-1);
    });

    // Handle all categories button click
    document.getElementById('allCategories').addEventListener('click', function() {
        window.location.href = 'viewCategory.html';
    });

    // Handle back button click
    document.getElementById('back').addEventListener('click', function() {
        window.location.href = 'results.html';
    });
});

let currentIndex = 0;
const topCategories = JSON.parse(localStorage.getItem('topCategories')) || [];
const careers = {
    // Define your career data as in your existing code
    Realistic: [
                    { 
                        title: "REALISTIC", 
                        definition: "Practical, physical, concrete, hands-on, machine, and tool-oriented.",
                        description: "Practical, hands-on difficulties and their answers are common work activities in thinking occupations. They work with genuine things like wood, tools, and machines, as well as plants and animals. A large number of the jobs involve working outside and don't demand a lot of paperwork or close collaboration with others. Thinking personality types tend to be kinesthetic learners who prefer learning by doing to listening to lectures in a classroom.", 
                        career: [
                            "Construction and building trades",
                            "Professional sports, athletics, and physical training",
                            "Mechanics and engineering",
                            "Commercial drivers and truckers",
                            "Computer technicians, software developers and testers, and IT Support"
                        ], 
                        image: "images/image_1.png" 
                    },
                ],
                Artistic: [
                    { 
                        title: "ARTISTIC", 
                        definition: "Creative, original, independent, chaotic, inventive, media, graphics, text.",
                        description: "Working with forms, designs, and patterns is a common task for those in the creation profession. They can be completed without strictly adhering to a set of standards, and they frequently call for self-expression. People with artistic personalities are drawn to tasks that don't require a lot of structure or regulations.", 
                        career: [
                            "Acting",
                            "Music",
                            "Drama",
                            "Dance",
                            "Photography",
                            "Design"
                        ], 
                        image: "images/image_2.png" 
                    },
                ],
                Investigative: [
                    { 
                        title: "INVESTIGATIVE", 
                        definition: "Analytical, intellectual, scientific, explorative, thinker.",
                        description: "Working with ideas is a common aspect of persuading jobs, which demands a lot of thought. These professions may require fact-finding and mental problem-solving. People who are curious tend to think abstractly, appreciate gathering information, dig deeply for details, and take great pleasure in solving challenging puzzles.", 
                        career: [
                            "Biology",
                            "Archeology",
                            "Physics",
                            "Detectives",
                            "Forensic psychologists"
                        ], 
                        image: "images/image_3.png" 
                    },
                ],
                Social: [
                    { 
                        title: "SOCIAL",
                        definition: "Cooperative, supporting, helping, healing/nurturing, teaching.",
                        description: "Helping jobs usually entail interacting, teaching, and working with people. These jobs frequently entail serving or assisting others. In terms of social personality traits and career choice, this group's primary objective is to serve others. They are happiest when they are collaborating with others to advance, mature, or heal. They are excellent listeners and caregivers.", 
                        career: [
                            "Funeral attendants",
                            "Wait staff",
                            "Bartenders",
                            "Ushers",
                            "Detectives",
                            "Lawyers"
                        ], 
                        image: "images/image_4.png" 
                    },
                ],
                Enterprising: [
                    { 
                        title: "ENTERPRISING",
                        definition: "Competitive environments, leadership, persuading, status.", 
                        description: "Building occupations frequently involve starting up and carrying out projects. These occupations can involve leading people and making many decisions. Sometimes they require risk-taking, and they often deal with business.", 
                        career: [
                            "Management",
                            "Law",
                            "Sales and marketing",
                            "Advertising",
                            "Politics",
                            "Stock brokers",
                            "Chief executive positions"
                        ], 
                        image: "images/image_5.png" 
                    },
                ],
                Conventional: [
                    { 
                        title: "CONVENTIONAL", 
                        definition: "Detail-oriented, organizing, clerical.",
                        description: "Organizing jobs usually requires adhering to predetermined protocols and schedules. These jobs may involve more data and detail work than conceptual work. Usually, there is an obvious chain of command to obey. A person with this disposition is probably systematic and orderly and enjoys organization in both their job and personal lives.", 
                        career: [
                            "Accounting",
                            "Finance",
                            "Mathematics",
                            "Business administration",
                            "Information technology",
                            "Business finance fields",
                            "Librarians",
                            "Accountants"
                            // "Engineers",
                            // "Loan officers",
                            // "Bookkeepers",
                            // "Administrative assistants",
                            // "Travel agents",
                            // "Pharmacists",
                            // "Cashiers",
                            // "Auditors"
                        ], 
                        image: "images/image_6.png" 
                    },
                ],

};

function displayTopCategories() {
    const topCategoriesContainer = document.getElementById('top-categories');
    const topCategoriesHTML = `<h2>Top Categories</h2><p>${topCategories.join(", ")}</p>`;
    topCategoriesContainer.innerHTML = topCategoriesHTML;
}

function displayCareerOptions(index = 0) {
    if (topCategories.length === 0) return;
    
    const careerOptionsContainer = document.getElementById('career-options');
    const category = topCategories[index];
    const career = careers[category][0]; // Assuming one career per category for simplicity

    const careerOptionsHTML = `
        <div class="career-options">
            <h3>${career.title}</h3>
            <div class="image-container">
                <img src="${career.image}" alt="${career.title}">
            </div>
            <h5><b>${career.definition}</b></h5>
            <p><b>${career.description}</b></p>
            <h6><strong>Career:</strong></h6>
            <ul>
                ${career.career.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;
    
    careerOptionsContainer.innerHTML = careerOptionsHTML;
}

function navigateCareerOptions(direction) {
    currentIndex = (currentIndex + direction + topCategories.length) % topCategories.length;
    displayCareerOptions(currentIndex);
}

// Initial display
displayCareerOptions();
