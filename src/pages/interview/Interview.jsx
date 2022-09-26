import React from 'react'
import './Interview.scss'

const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
  ];

  function Result({reset, correct}) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
        <button onClick={reset}>Попробовать снова</button>
      </div>
    );
  }
  
  function Game({question, onClickVariant, step}) {

    const percentage = Math.round((step / questions.length) * 100);
    console.log(percentage)

    return (
        
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text, index)=> (
                <li key={text} onClick={() => onClickVariant(index)}>{text}</li>
            ))
          }
        </ul>
      </>
    );
  }

function Interview() {

    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)
        if (index === question.correct){
            setCorrect(correct + 1);
        }
    }
    const reset = () => {
        setStep(0);
    }

  return (
    <div className='Interview'>
        {step != questions.length ? (
            <Game step={step} onClickVariant={onClickVariant} question={question}/>
        ) : (
            <Result correct={correct} reset={reset}/>
        )}
    </div>
  )
}

export default Interview