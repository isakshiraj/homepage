const questions = [
  
  {
    category: "Realistic",
    question: "Practical and hands-on tasks appeal to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "Expressing myself through creative outlets is important to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "Analyzing complex problems and finding solutions is something I enjoy.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "Making a positive impact on others' lives is important to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Enterprising",
    question: "I enjoy roles that involve influencing and persuading others.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conventional",
    question: "I am detail-oriented and prefer organized workspaces.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I enjoy constructing things using my hands.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I appreciate various forms of artistic expression.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "I find satisfaction in logical reasoning and problem-solving.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "I enjoy working in roles that involve helping and supporting others.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Enterprising",
    question: "Leadership positions and taking charge appeal to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conventional",
    question: "Following established procedures and rules is important to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "Working with tools and machinery is satisfying.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I find inspiration in music, literature, or visual arts.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "Researching to gather information intrigues me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "I am a good listener and empathize with others' concerns.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Enterprising",
    question: "I enjoy working with numbers and data.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conventional",
    question: "I am comfortable with taking risks to achieve my goals.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I find joy in the process of building and assembling.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "Bringing creative ideas to life is fulfilling.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "I have a strong interest in understanding how things work.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "I find satisfaction in assisting and providing guidance.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Enterprising",
    question: "Networking and making professional connections are important to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conventional",
    question: "I find satisfaction in tasks that require attention to detail.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I am skilled in working on construction or repair projects.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I have a good sense of aesthetics and design.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "I am comfortable with abstract concepts and theoretical ideas.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "Building relationships with people is a strong suit of mine.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Enterprising",
    question: "I enjoy negotiating and making persuasive arguments.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conventional",
    question: "I prefer jobs that involve organizing information.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I prefer jobs that involve physical activity and building.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "Participating in creative activities is appealing to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "Analyzing data and concluding is a strong suit of mine.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "Helping others achieve their goals brings me joy.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Enterprising",
    question: "Routine tasks and structured environments suit me well.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Conventional",
    question: "I find fulfillment in roles that involve convincing others.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I enjoy working on construction projects that involve design and planning.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I find joy in exploring various artistic forms, including music and dance.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "I enjoy solving complex problems that require strategic thinking.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "I find satisfaction in roles that involve mentoring and guiding others.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "Creating physical structures, such as furniture or models, is fulfilling.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "Creating unique and innovative designs is something I excel at.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "Analyzing patterns and trends in data is a strength of mine.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "Collaborating with others to achieve common goals is important to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I am skilled at assembling and fixing electronic devices.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I appreciate the beauty of language and enjoy expressing myself through words.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "Conducting scientific experiments to discover new insights interests me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "I am skilled at providing emotional support to those in need.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "The idea of renovating and improving spaces appeals to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "Experimenting with different art forms and mediums is fulfilling.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "I find joy in exploring abstract theories and concepts.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "Assisting others in their personal or professional development brings me joy.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I am adept at understanding and following blueprints or technical drawings.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I am inspired by the creative works of others.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "I am skilled at breaking down complex ideas into simpler components.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "Building and maintaining positive relationships is a priority for me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Realistic",
    question: "I prefer tasks that involve creating tangible, physical outcomes.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Artistic",
    question: "I enjoy brainstorming and bringing imaginative ideas to life.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Investigative",
    question: "Analyzing and interpreting information logically comes naturally to me.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  {
    category: "Social",
    question: "I am drawn to occupations that involve making a positive impact on communities.",
    options: [
      { text: "Dislike", value: 1 },
      { text: "", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "", value: 4 },
      { text: "Agree", value: 5 }
    ]
  },
  
  

  
];

let currentQuestionIndex = 0;
const selectedOptions = new Array(questions.length).fill(null); // Track selected options

const categoryPoints = {
    Realistic: 0,
    Artistic: 0,
    Investigative: 0,
    Social: 0,
    Enterprising: 0,
    Conventional: 0,
};




function displayQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';

  // Check if currentQuestionIndex is 0 to hide "Previous" button
  if (currentQuestionIndex === 0) {
      document.getElementById('prev-btn').style.display = 'none';
  } else {
      document.getElementById('prev-btn').style.display = 'inline-block';
  }

  for (let i = 0; i < 5; i++) {
      if (currentQuestionIndex + i >= questions.length) break;
      const questionData = questions[currentQuestionIndex + i];
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.innerHTML = `
          <div>${questionData.question}</div>
          <div class="options">
              ${questionData.options.map((option, index) => {
                  let sizeClass = '';
                  if (index === 0 || index === 4) {
                      sizeClass = 'btn-large';
                  } else if (index === 1 || index === 3) {
                      sizeClass = 'btn-medium';
                  } else if (index === 2) {
                      sizeClass = 'btn-small';
                  }

                  return `
                      <div class="option-button ${sizeClass}" data-question-index="${currentQuestionIndex + i}" data-option-index="${index}">
                          ${option.value !== undefined ? `<span>${option.text}</span>` : ''}
                      </div>`;
              }).join('')}
          </div>
      `;
      container.appendChild(questionElement);

      // Add horizontal line after each question except the last one
      if (i < 6) {
          const separator = document.createElement('hr');
          separator.classList.add('question-separator');
          container.appendChild(separator);
      }
  }
  addEventListeners();
  highlightSelectedOptions();
}

function highlightSelectedOptions() {
  selectedOptions.forEach((selectedOptionIndex, questionIndex) => {
      if (selectedOptionIndex !== null) {
          const optionButton = document.querySelector(`.option-button[data-question-index="${questionIndex}"][data-option-index="${selectedOptionIndex}"]`);
          if (optionButton) {
              optionButton.classList.add('selected');
          }
      }
  });
}

function addEventListeners() {
  document.querySelectorAll('.option-button').forEach(button => {
      button.addEventListener('click', (e) => {
          const questionIndex = button.getAttribute('data-question-index');
          const optionIndex = button.getAttribute('data-option-index');

          // Deselect previous option and select new one
          document.querySelectorAll(`.option-button[data-question-index="${questionIndex}"]`).forEach(b => b.classList.remove('selected'));
          button.classList.add('selected');

          selectedOptions[questionIndex] = optionIndex;

          // Scroll to the next question or to the "Next" button
          const nextQuestionIndex = parseInt(questionIndex) + 1;
          if (nextQuestionIndex < currentQuestionIndex + 5) {
              const nextQuestion = document.querySelector(`.question:nth-child(${(nextQuestionIndex % 5) * 2 + 1})`);
              if (nextQuestion) {
                  nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          } else {
              document.getElementById('next-btn').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });
}

document.getElementById('next-btn').addEventListener('click', () => {
  document.querySelectorAll('.option-button.selected').forEach(selectedOption => {
      const questionIndex = selectedOption.getAttribute('data-question-index');
      const optionIndex = selectedOption.getAttribute('data-option-index');
      const questionData = questions[questionIndex];
      // Convert option value to integer before adding to categoryPoints
      categoryPoints[questionData.category] += parseInt(questionData.options[optionIndex].value);
  });

  currentQuestionIndex += 5;
  if (currentQuestionIndex < questions.length) {
      displayQuestions();
      // Scroll to the top of the questions container
      document.getElementById('questions-container').scrollTo(0, 0);
  } else {
      // Save results
      const username = localStorage.getItem('username');
      const topCategories = calculateTopCategories();
      const topCategory1 = topCategories[0];
      const topCategory2 = topCategories[1];
      saveResult(username, topCategory1, topCategory2);

      // Redirect to results page
      localStorage.setItem('categoryPoints', JSON.stringify(categoryPoints));
      window.location.href = 'results.html';
  }
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentQuestionIndex -= 5;
  if (currentQuestionIndex < 0) currentQuestionIndex = 0;
  displayQuestions();
  // Scroll to the top of the questions container
  document.getElementById('questions-container').scrollTo(0, 0);
});

function calculateTopCategories() {
  const sortedCategories = Object.keys(categoryPoints).sort((a, b) => categoryPoints[b] - categoryPoints[a]);
  return [sortedCategories[0], sortedCategories[1]]; // Return top two categories
}



//code portion written in index.js
function saveResult(username, topCategory1, topCategory2) {
  fetch('/save-result', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, topCategory1, topCategory2 })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to save result.');
      }
      return response.json();
  })
  .then(data => {
      console.log('Result saved successfully:', data);
      // Optionally handle success message or redirect here
  })
  .catch(error => {
      console.error('Error saving result:', error);
      // Optionally handle error message here
  });
}


document.addEventListener('DOMContentLoaded', () => {
  displayQuestions();
});
