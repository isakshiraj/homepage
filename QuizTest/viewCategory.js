document.addEventListener("DOMContentLoaded", function() {
    // Retrieve top categories from localStorage
    const topCategories = JSON.parse(localStorage.getItem('topCategories')) || [];
    const username = localStorage.getItem('username');

    // Define all available categories and their details
    const allCategories = {
        Realistic: {
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
        Artistic: {
            title: "ARTISTIC",
            definition: "Creative, original, independent, chaotic, inventive, media, graphics, text.",
            description: "Working with forms, designs, and patterns is a common task for those in the creation profession. They can be completed without strictly adhering to a set of standards, and they frequently call for self-expression. People with artistic personalities are drawn to tasks that don't require a lot of structure or regulations.",
            career: [
                "Visual and performing arts, such as acting",
                "Music",
                "Drama",
                "Dance",
                "Photography",
                "Design"
            ],
            image: "images/image_2.png"
        },
        Investigative: {
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
        Social: {
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
        Enterprising: {
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
        Conventional: {
            title: "CONVENTIONAL",
            definition: "Detail-oriented, organizing, clerical.",
            description: "Organizing jobs usually require adhering to predetermined protocols and schedules. These jobs may involve more data and detail work than conceptual work. Usually, there is an obvious chain of command to obey. A person with this disposition is probably systematic and orderly and enjoys organization in both their job and personal lives.",
            career: [
                "Accounting",
                "Finance",
                "Mathematics",
                "Business administration",
                "Information technology",
                "Business finance fields",
                "Librarians",
                "Accountants"
            ],
            image: "images/image_6.png"
        }
    };

    // Filter out top categories from all categories
    const remainingCategories = Object.keys(allCategories).filter(category => !topCategories.includes(category));

    // Generate HTML for remaining categories
    let remainingCategoriesHTML = '';
    remainingCategories.forEach(category => {
        const details = allCategories[category];
        remainingCategoriesHTML += `
            <div class="result-page">
                <div class="results-content">
                    <h1>${details.title}</h1>
                    <img src="${details.image}" alt="${details.title}">
                    <h5><b>${details.definition}</b></h5>
                    <p><b>${details.description}</b></p>
                    <h6><b>Career:</b></h6>
                    <ul>
                        ${details.career.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });

    // Insert remaining categories into the results container
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = remainingCategoriesHTML;

    // Show the results container
    resultsContainer.style.display = 'block';

    // Initialize the result pages navigation
    let currentPage = 0;
    const pages = document.querySelectorAll('.result-page');
    const prevButton = document.querySelector('.prev-result-button');
    const nextButton = document.querySelector('.next-result-button');
    const backButton = document.querySelector('.back-result-button');
    const backToDashboardButton = document.getElementById('back-to-dashboard-button');

    const colors = ['#c3bade']; // Add more colors as needed

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = (i === index) ? 'block' : 'none';
        });
        prevButton.style.display = (index === 0) ? 'none' : 'block';
        nextButton.style.display = (index === pages.length - 1) ? 'none' : 'block';
        backButton.style.display = (index === 0) ? 'block' : 'none'; // Show back button only on first page

        document.body.style.backgroundColor = colors[index % colors.length];
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    backButton.addEventListener('click', function() {
        window.location.href = 'topCategories.html';
    });

    backToDashboardButton.addEventListener('click', function() {
        window.location.href = `/dashboard?username=${username}`;
    });

    showPage(currentPage); // Show initial page

});
