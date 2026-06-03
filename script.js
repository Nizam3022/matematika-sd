const quizData = [
    { q: "1 + 2 = ...", options: [2, 3, 4], answer: 3 },
    { q: "3 + 2 = ...", options: [4, 5, 6], answer: 5 },
    { q: "5 + 4 = ...", options: [8, 9, 10], answer: 9 },
    { q: "4 - 2 = ...", options: [1, 2, 3], answer: 2 },
    { q: "7 - 3 = ...", options: [3, 4, 5], answer: 4 },
    { q: "9 - 5 = ...", options: [4, 5, 6], answer: 4 },
    { q: "6 + 4 = ...", options: [9, 10, 11], answer: 10 },
    { q: "10 - 6 = ...", options: [3, 4, 5], answer: 4 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    
    if (currentQuestionIndex < 3) {
        document.getElementById("level-name").textContent = "1 (Penjumlahan)";
    } else if (currentQuestionIndex < 6) {
        document.getElementById("level-name").textContent = "2 (Pengurangan)";
    } else {
        document.getElementById("level-name").textContent = "3 (Campuran)";
    }

    document.getElementById("question-text").textContent = currentQuestion.q;
    
    for (let i = 0; i < 3; i++) {
        document.getElementById(`opt${i}`).textContent = currentQuestion.options[i];
    }
}

function selectAnswer(optionIndex) {
    let currentQuestion = quizData[currentQuestionIndex];
    let selectedValue = currentQuestion.options[optionIndex];
    let feedback = document.getElementById("feedback");
    
    if (selectedValue === currentQuestion.answer) {
        feedback.textContent = "🎉 Hebat! Jawabanmu Benar!";
        feedback.className = "feedback-text correct";
        score += 10;
        document.getElementById("score").textContent = score;
    } else {
        feedback.textContent = `❌ Oops! Yang benar adalah ${currentQuestion.answer}`;
        feedback.className = "feedback-text wrong";
    }

    for (let i = 0; i < 3; i++) {
        document.getElementById(`opt${i}`).disabled = true;
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("question-text").textContent = "🏆 Hore! Kamu Selesai Belajar!";
        document.querySelector(".options-container").innerHTML = `<h3>Total Nilai Kamu: ${score}</h3>`;
        document.getElementById("next-btn").classList.add("hidden");
        document.getElementById("feedback").textContent = "";
    }
}

function resetState() {
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").classList.add("hidden");
    for (let i = 0; i < 3; i++) {
        let btn = document.getElementById(`opt${i}`);
        btn.disabled = false;
    }
}

loadQuestion();
