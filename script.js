// This array contains all the quiz questions, options, and correct answers.
const questions = [
  { q: "Which of the following is NOT a vertebrate?", o: ["Mammals", "Birds", "Insects"], a: 2 },
  { q: "Which animals produce breast milk?", o: ["Reptiles", "Birds", "Mammals"], a: 2 },
  { q: "Animals that mainly feed on plants are called:", o: ["Carnivorous", "Herbivorous", "Omnivorous"], a: 1 },
  { q: "Which property is common in both liquid and gas?", o: ["Fixed shape", "Can flow", "Fixed volume"], a: 1 },
  { q: "Which mixture can be separated with a separating funnel?", o: ["Oil and water", "Milk and water", "Vinegar and water"], a: 0 },
  { q: "Pendulum movement is an example of:", o: ["Linear event", "Cyclic event", "Static event"], a: 1 },
  { q: "Which of the following is luminous?", o: ["Moon", "Planet", "Sun"], a: 2 },
  { q: "Water droplets on a cold glass are due to:", o: ["Evaporation", "Condensation", "Precipitation"], a: 1 },
  { q: "Sun’s rays passing through the atmosphere is called:", o: ["Insulation", "Illumination", "Suspension"], a: 0 },
  { q: "Water moves into the atmosphere by evaporation and:", o: ["Condensation", "Transpiration", "Excretion"], a: 1 },
  { q: "Cleaning dirty water to make it safe is called:", o: ["Boiling", "Purification", "Evaporation"], a: 1 },
  { q: "The main thick root in a plant is called:", o: ["Taproot", "Fibrous root", "Aerial root"], a: 0 },
  { q: "Dicot seeds undergo:", o: ["Epigeal germination", "Hypogeal germination", "Indirect germination"], a: 0 },
  { q: "Breaking down food into absorbable pieces is:", o: ["Digestion", "Respiration", "Excretion"], a: 0 },
  { q: "Undigested food exits through the:", o: ["Mouth", "Anus", "Stomach"], a: 1 },
  { q: "Which planet has 2 moons?", o: ["Mars", "Earth", "Venus"], a: 0 },
  { q: "Why do you feel heat when you rub your palms?", o: ["Friction", "Sound", "Light"], a: 0 },
  { q: "Unit of measurement for heat is:", o: ["Joule", "Kelvin", "Newton"], a: 0 },
  { q: "Heat moves through objects by:", o: ["Conduction only", "Radiation only", "All three methods"], a: 2 },
  { q: "Frogs and ducks are found in:", o: ["Desert", "Pond", "Sea"], a: 1 },
  { q: "Instrument used to measure heat:", o: ["Thermometer", "Barometer", "Hydrometer"], a: 0 },
  { q: "Solid changing directly into gas is called:", o: ["Evaporation", "Sublimation", "Condensation"], a: 1 },
  { q: "LED stands for:", o: ["Light Emitting Diode", "Light Entering Device", "Light Emitting Disk"], a: 0 },
  { q: "To move current in a circuit we use:", o: ["Switch", "Connecting wires", "Resistor"], a: 1 },
  { q: "Force applied when wearing socks:", o: ["Frictional", "Elastic", "Gravitational"], a: 0 },
  { q: "Which is NOT a way to maintain hygiene?", o: ["Bathing", "Sweeping", "Regular exercise"], a: 2 },
  { q: "Turning waste into fertilizer is called:", o: ["Recycling", "Composting", "Reducing"], a: 1 },
  { q: "Measles is caused by:", o: ["Virus", "Fungi", "Bacteria"], a: 0 },
  { q: "Which is NOT a food-borne disease?", o: ["Malaria", "Cholera", "Typhoid"], a: 0 },
  { q: "Gas that traps heat and causes global warming:", o: ["Carbon dioxide", "Oxygen", "Nitrogen"], a: 0 },
  { q: "Personal hygiene means:", o: ["Keeping clean", "Cleaning environment", "Recycling"], a: 0 },
  { q: "One way to maintain hygiene is:", o: ["Wearing clean clothes", "Eating junk food", "Skipping baths"], a: 0 },
  { q: "Waste management means:", o: ["Throwing waste", "Handling waste properly", "Burning waste"], a: 1 },
  { q: "The 3 R’s in waste management are:", o: ["Reuse, Reduce, Recycle", "Remove, Replace, Reuse", "Recycle, Rebuild, Reduce"], a: 0 },
  { q: "Symptom of measles:", o: ["Body rashes", "Stomach pain", "Diarrhoea"], a: 0 },
  { q: "Symptom of food-borne disease:", o: ["Runny nose", "Diarrhoea", "Cough"], a: 1 },
  { q: "Typhoid is caused by:", o: ["Salmonella", "E. coli", "Virus"], a: 0 },
  { q: "Cholera is caused by:", o: ["Vibrio cholerae", "Salmonella", "Fungi"], a: 0 },
  { q: "Spoilt soup becomes:", o: ["Sour", "Moldy", "Sticky"], a: 0 },
  { q: "Spoilt bread becomes:", o: ["Dry", "Moldy", "Sticky"], a: 1 },
  { q: "Spoilt milk becomes:", o: ["Curdled", "Sticky", "Hard"], a: 0 },
  { q: "Example of a bird:", o: ["Eagle", "Frog", "Snake"], a: 0 },
  { q: "Example of an insect:", o: ["Butterfly", "Eagle", "Snake"], a: 0 },
  { q: "Example of a mammal:", o: ["Dog", "Snake", "Butterfly"], a: 0 },
  { q: "Example of an amphibian:", o: ["Frog", "Bird", "Snake"], a: 0 },
  { q: "Example of a reptile:", o: ["Snake", "Frog", "Bird"], a: 0 },
  { q: "Start of food chain:", o: ["Flower", "Butterfly", "Frog"], a: 0 },
  { q: "Middle of food chain:", o: ["Snake", "Eagle", "Flower"], a: 0 },
  { q: "End of food chain:", o: ["Eagle", "Snake", "Butterfly"], a: 0 },
  // New question added to make it 50 total
  { q: "What is the largest planet in our solar system?", o: ["Earth", "Mars", "Jupiter"], a: 2 }
];

// Global variables to track the quiz state
let currentQuestionIndex = 0;
const userAnswers = new Array(questions.length).fill(null);
let quizFinished = false;
let timerInterval;
const totalTime = 1800; // 30 minutes in seconds
let timeLeft = totalTime;
let shuffledQuestions = [];

// Get references to the HTML elements
const questionContainer = document.getElementById('questionContainer');
const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const submitBtn = document.getElementById('submitBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const resultDiv = document.getElementById('result');
const timerDisplay = document.getElementById('timerDisplay');

/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array - The array to shuffle.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Starts the quiz timer.
 */
function startTimer() {
  // Clear any existing timer to prevent multiple timers running
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timeLeft = totalTime;
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleSubmit();
    }
  }, 1000);
}

/**
 * Renders a single question and its options to the DOM.
 * @param {number} index - The index of the question to display.
 */
function displayQuestion(index) {
  // Clear previous content
  questionContainer.innerHTML = '';
  resultDiv.textContent = '';
  questionContainer.classList.remove('hidden');

  if (index >= shuffledQuestions.length) {
    // Hide quiz elements and show the final submit button
    questionContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    skipBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    return;
  }

  const question = shuffledQuestions[index];
  const questionBox = document.createElement('div');
  questionBox.classList.add('question-box', 'p-6', 'bg-gray-100', 'rounded-lg', 'shadow-sm', 'border', 'border-gray-200', 'fade-in');

  // Add the question text
  questionBox.innerHTML = `
    <div class="font-bold text-xl text-gray-800 mb-4">Question ${index + 1} of ${shuffledQuestions.length}: ${question.q}</div>
    <div class="options space-y-2" id="options-${index}"></div>
  `;

  const optionsDiv = questionBox.querySelector('.options');
  question.o.forEach((option, optionIndex) => {
    const label = document.createElement('label');
    label.classList.add('flex', 'items-center', 'space-x-2', 'p-3', 'rounded-md', 'cursor-pointer', 'bg-white', 'hover:bg-gray-200', 'transition-colors', 'duration-200');
    label.innerHTML = `
      <input type="radio" name="q${index}" value="${optionIndex}" class="form-radio text-green-600">
      <span class="text-gray-700">${option}</span>
    `;
    optionsDiv.appendChild(label);
  });

  // Select the previously saved answer if it exists
  if (userAnswers[index] !== null) {
    const selectedInput = questionBox.querySelector(`input[value="${userAnswers[index]}"]`);
    if (selectedInput) {
      selectedInput.checked = true;
    }
  }

  questionContainer.appendChild(questionBox);
  
  // Update button visibility
  nextBtn.classList.remove('hidden');
  skipBtn.classList.remove('hidden');
  submitBtn.classList.add('hidden');
  playAgainBtn.classList.add('hidden');
}

/**
 * Saves the current answer and moves to the next question.
 */
function handleNext() {
  // Save the user's answer for the current question
  const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  } else {
    userAnswers[currentQuestionIndex] = null; // User skipped or didn't select
  }

  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

/**
 * Skips the current question without saving an answer and moves to the next.
 */
function handleSkip() {
  userAnswers[currentQuestionIndex] = null;
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

/**
 * Calculates the final score and displays the results.
 */
function handleSubmit() {
  // First, handle the final question's answer if the user clicked submit
  const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  } else {
    userAnswers[currentQuestionIndex] = null;
  }
  
  // Stop the timer
  clearInterval(timerInterval);

  let score = 0;
  let reviewHTML = '<h2 class="text-3xl font-bold mb-4">Review Your Answers</h2>';
  
  shuffledQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.a;
    
    let isCorrect = (userAnswer === correctAnswer);
    if (userAnswer === null) {
      isCorrect = false;
    }

    let answerText = userAnswer !== null ? question.o[userAnswer] : "Skipped";
    let correctAnswerText = question.o[correctAnswer];

    if (isCorrect) {
      score++;
    }
    
    // Build the review HTML for each question
    reviewHTML += `
      <div class="p-4 rounded-lg shadow-sm mb-4 ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
        <p class="font-bold text-xl">${index + 1}. ${question.q}</p>
        <p class="mt-2 text-md">Your Answer: <span class="font-semibold">${answerText}</span></p>
        ${!isCorrect ? `<p class="text-md">Correct Answer: <span class="font-semibold">${correctAnswerText}</span></p>` : ''}
      </div>
    `;
  });
  
  // Calculate the score as a percentage
  const totalQuestions = shuffledQuestions.length;
  const scorePercentage = ((score / totalQuestions) * 100).toFixed(0);

  // Update the UI to show results and review
  questionContainer.classList.add('hidden');
  timerDisplay.classList.add('hidden');
  resultDiv.innerHTML = `
    <h2 class="text-4xl md:text-5xl font-bold mb-4">Quiz Finished!</h2>
    <p class="text-3xl font-semibold mb-8">You scored ${scorePercentage}% (${score} out of ${totalQuestions})!</p>
  `;
  resultDiv.innerHTML += reviewHTML;

  // Hide all other buttons and show the "Play Again" button
  nextBtn.classList.add('hidden');
  skipBtn.classList.add('hidden');
  submitBtn.classList.add('hidden');
  playAgainBtn.classList.remove('hidden');
  quizFinished = true;
}

/**
 * Resets the quiz to its initial state.
 */
function resetQuiz() {
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  quizFinished = false;
  shuffleArray(shuffledQuestions);
  startTimer();
  displayQuestion(currentQuestionIndex);
  resultDiv.textContent = '';
  submitBtn.classList.add('hidden');
  playAgainBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');
  skipBtn.classList.remove('hidden');
  questionContainer.classList.remove('hidden');
  timerDisplay.classList.remove('hidden');
}

// Function to initialize the quiz
function initializeQuiz() {
  // Create a copy of the questions array to shuffle, leaving the original intact
  shuffledQuestions = [...questions];
  shuffleArray(shuffledQuestions);
  startTimer();
  displayQuestion(currentQuestionIndex);
}

// Event listeners for the buttons
nextBtn.addEventListener('click', handleNext);
skipBtn.addEventListener('click', handleSkip);
submitBtn.addEventListener('click', handleSubmit);
playAgainBtn.addEventListener('click', resetQuiz);

// Initial call to start the quiz
window.onload = initializeQuiz;
