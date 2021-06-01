import React, { useState } from "react";
let quizQestions = [
  {
    question: "מהו ההר הגבוה בעולם",
    id: '28789',
    answerAll: [{
      text: 'חרמון',
      num: 10,
    }, {
      text: 'האוורסט',
      num: 5,
    }, {
      text: 'גבעת התחמושת',
      num: 10,
    }
    ]
  },
  {
    question: "מהו ההר הנמוך בעולם",
    answerAll: [{
      text: 'חרמון',
      num: 10,
    }, {
      text: 'האוורסט',
      num: 5,
    }, {
      text: 'גבעת התחמושת',
      num: 10,
    }
    ]
  }
];


let randomNumber = 0;


function QuizBox() {
  const [answers, setanswers] = useState(quizQestions[Math.floor(Math.random() * quizQestions.length)]);


  function getQuestion() {
    const random = Math.floor(Math.random() * quizQestions.length);
    console.log(quizQestions[random]);
    if (randomNumber === random) {
      getQuestion();
    } else {
      randomNumber = random;
      setanswers(quizQestions[random]);
    }
  }


  function checkAnswer(elm) {
    //   if (elm === answers.answer) {
    //     console.log(true)
    //   } else {
    //     console.log(false)
    //   }
  }

  return (
    <>
      <button onClick={getQuestion}>שאלה הבאה</button>
      <div>{answers.question}</div>
      {answers.answerAll.map((elm, index) => {
        return (
          <div key={index} onClick={() => checkAnswer(elm.text)}>
            {elm.text}
          </div>
        );
      })}
    </>
  );
}

export default QuizBox;
