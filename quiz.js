const questionData = [
  {
    question: "200 + 150 = ?",
    answers: {
      a: "250",
      b: "300",
      c: "350",
      d: "450",
    },
    correctAnswer: "c",
  },
  {
    question: "150 + 85 = ?",
    answers: {
      a: "235",
      b: "325",
      c: "215",
      d: "240",
    },
    correctAnswer: "a",
  },
  {
    question: "325 + 120 = ?",
    answers: {
      a: "450",
      b: "435",
      c: "420",
      d: "445",
    },
    correctAnswer: "d",
  },
];

const questionTxt = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");
const select = document.getElementById("language");

select.addEventListener("change", (e) => {
  lang = e.target.value;
  if (lang == "english") {
    submitBtn.innerText = "Submit";
  }
  if (lang == "turkce") {
    submitBtn.innerText = "Gönder";
  }
});

function displayQuestion(questionİndex) {
  let question = questionData[questionİndex];

  questionTxt.innerHTML = `${question.question} `;
  a_text.innerHTML = `${question.answers.a}`;
  b_text.innerHTML = `${question.answers.b}`;
  c_text.innerHTML = `${question.answers.c}`;
  d_text.innerHTML = `${question.answers.d}`;
}

let score = 0;
let questionİndex = 0;

function checkAnswer() {
  let answer = document.querySelector('input[name="answer"]:checked').id;
  let question = questionData[questionİndex];
  if (answer === question.correctAnswer) {
    score++;
  }

  questionİndex++;
  if (questionİndex === questionData.length) {
    submitBtn.addEventListener("click", () => {
      location.reload(displayQuestion);
    });
    submitBtn.innerText = "Reload";
    submitBtn.style.backgroundColor = "green";
    questionTxt.innerHTML = `${localStorage.getItem("name")} scored ${score}/${
      questionData.length
    }`;
    if (lang == "turkce") {
      questionTxt.innerHTML = `${localStorage.getItem("name")}  ${score}/${
        questionData.length
      } puan aldı`;
      submitBtn.innerText = "Yeniden Yükle";
    }
  }
  if (questionİndex != questionData) {
    displayQuestion(questionİndex);
  }
}
