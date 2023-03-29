import './App.css';
import { useState } from 'react';

function App() {
  const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];
const [count,setCount]=useState(0)
const [count2, setCount2] = useState(0)
const next = ()=> { 
  if(count+2 <= questions.length)
      setCount(count+1)
  console.log(count);
}


const rep = (x) => {
  questions[count].answerOptions.map((e)=>{
    if (e.isCorrect=== true && x.target.innerText === e.answerText) 
        setCount2(count2 + 1)
        
  })
  next()
}
  return (
    <div className="container">
    <div>
      <h1>Question{count+1}/{questions.length}</h1>
      <h3>{questions[count].questionText}</h3>
      {questions[count].answerOptions.map((e)=>{ 
       return <button className='choix' onClick={(x)=>rep(x)}>{e.answerText}</button>})}    
    </div>
    <br></br>
       <button className='choix' onClick={next}>Next</button> 

       <div className='score'>
        <p>Score:</p>
       <h3>{count2}</h3>
       </div>


    </div>
  );
}

export default App;
