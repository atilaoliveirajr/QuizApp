let allQuestions = [{
        'question': 'What is my favorite movie?',
        'answer1': 'Interstellar',
        'answer2': 'Edge of Tomorrow',
        'answer3': 'Pay it forward',
        'answer4': 'Inception',
        'rightAnswer': 3
    },
    {
        'question': 'What is my favorite Super-Hero?',
        'answer1': 'Iron Man',
        'answer2': 'Spider-Man',
        'answer3': 'Batman',
        'answer4': 'Hancock',
        'rightAnswer': 2
    },
    {
        'question': 'What is my favorite Cartoon?',
        'answer1': 'The Dragon Prince',
        'answer2': 'Knights of The Zodiac',
        'answer3': 'Avatar: Legend of Aang',
        'answer4': 'Rick and Morty',
        'rightAnswer': 1
    },
    {
        'question': 'What is the best RPG in my opinion?',
        'answer1': 'The Witcher 3: Wild Hunt',
        'answer2': 'Pillars of Eternity I',
        'answer3': 'Final Fantasy VIII',
        'answer4': 'Quest for Glory V: Dragon Fire',
        'rightAnswer': 1
    },
    {
        'question': 'Which of the following characteristics i consider the most important?',
        'answer1': 'Empathy',
        'answer2': 'Fairness',
        'answer3': 'Humbleness',
        'answer4': 'Wisdom',
        'rightAnswer': 2
    }
]

let questionNumber = 0;
let progress = 0;
let temp = 1;
let totalCorrectAnswers = 0;

function loadTest() {
    questionNumber = 1;

    document.getElementById(`blankPage`).classList.add(`d-none`);

    document.getElementById(`home`).classList.add(`d-none`);
    document.getElementById(`quizHTML`).classList.remove(`d-none`);
    document.getElementById(`progressBarContainer`).classList.remove(`d-none`);

    loadQuestion();

    calculateProgress();
}

function nextQuestion() {
    let arg = temp;

    if (questionNumber == allQuestions.length) {
        finishQuiz();
    } else {
        questionNumber += 1;

        calculateProgress();

        loadQuestion();

        document.getElementById(`quizAnswerRow${arg}`).classList.remove(`rightQuizAnswerRow`);
        document.getElementById(`btnAnswer${arg}`).classList.remove(`btnRight`);
        document.getElementById(`quizAnswerRow${arg}`).classList.remove(`wrongQuizAnswerRow`);
        document.getElementById(`btnAnswer${arg}`).classList.remove(`btnWrong`);

        document.getElementById(`answersContainer`).classList.remove(`disabled`);
    }
}

function loadQuestion() {
    document.getElementById(`question`).innerHTML = allQuestions[questionNumber - 1]['question'];
    document.getElementById(`answer1`).innerHTML = allQuestions[questionNumber - 1]['answer1'];
    document.getElementById(`answer2`).innerHTML = allQuestions[questionNumber - 1]['answer2'];
    document.getElementById(`answer3`).innerHTML = allQuestions[questionNumber - 1]['answer3'];
    document.getElementById(`answer4`).innerHTML = allQuestions[questionNumber - 1]['answer4'];
    rightAnswer = allQuestions[questionNumber - 1]['rightAnswer'];
}

function calculateProgress() {
    progress = Math.round((questionNumber / allQuestions.length) * 100);
    document.getElementById(`progressBar`).innerHTML = `${progress}%`;
    document.getElementById(`progressBar`).style.width = `${progress}%`;
}

function answerSelected(a) {
    temp = a;
    if (a == rightAnswer) {
        document.getElementById(`quizAnswerRow${a}`).classList.add(`rightQuizAnswerRow`);
        document.getElementById(`btnAnswer${a}`).classList.add(`btnRight`);
        totalCorrectAnswers += 1;
    } else {
        document.getElementById(`quizAnswerRow${a}`).classList.add(`wrongQuizAnswerRow`);
        document.getElementById(`btnAnswer${a}`).classList.add(`btnWrong`);
    }

    document.getElementById(`answersContainer`).classList.add(`disabled`);
}

function restart() {
    questionNumber = 0;
    let arg = temp;
    progress = 0;
    calculateProgress()

    document.getElementById(`quizAnswerRow${arg}`).classList.remove(`rightQuizAnswerRow`);
    document.getElementById(`btnAnswer${arg}`).classList.remove(`btnRight`);
    document.getElementById(`quizAnswerRow${arg}`).classList.remove(`wrongQuizAnswerRow`);
    document.getElementById(`btnAnswer${arg}`).classList.remove(`btnWrong`);
    document.getElementById(`answersContainer`).classList.remove(`disabled`);
    document.getElementById(`home`).classList.remove(`d-none`);

    document.getElementById(`quizHTML`).classList.add(`d-none`);
    document.getElementById(`progressBarContainer`).classList.add(`d-none`);
    document.getElementById(`finalResultScreen`).classList.add(`d-none`);
}

function finishQuiz() {
    document.getElementById(`quizHTML`).classList.add(`d-none`);
    document.getElementById(`progressBarContainer`).classList.add(`d-none`);

    document.getElementById(`finalResultScreen`).classList.remove(`d-none`);

    let percentageCorrectAnswers = Math.round(totalCorrectAnswers / allQuestions.length * 100);

    if (percentageCorrectAnswers >= 70) {
        document.getElementById(`finalResultScreen`).innerHTML = `You got ${percentageCorrectAnswers}% out of the questions right! You are a mother fucker good friend!`;
    } else {
        document.getElementById(`finalResultScreen`).innerHTML = `You got ${percentageCorrectAnswers}% out of the questions right. Come on... You can do better than this...`
    }
}

function loadTestBlank() {
    restart()
    document.getElementById(`home`).classList.add(`d-none`);
    document.getElementById(`blankPage`).classList.remove(`d-none`);

}