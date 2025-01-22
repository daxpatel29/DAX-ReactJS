import React from 'react';
import { useState } from 'react';
import API from '../config/api.js';
const Que = () => {
  let [question, setQuestion] = useState(
    {
      question: "",
      answer: ""
    })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  const createQue = async () => {
    let res = await API.post("/questions", question);
    setQuestion(res.data.question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createQue(question);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="question" value={question.question} onChange={handleInput} />
        <input type="text" name="answer" value={question.answer} onChange={handleInput}/>
        <input type="submit" value={"Add"} />
      </form>
    </div>
  )
}

export default Que