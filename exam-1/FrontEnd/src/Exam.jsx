import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Exam = () => {
    let [exam,setExam]=useState([])
    const getExam= async() =>{
        let res=await API.get("/exams");
        setExam(res.data.exam);
    }
    useEffect(()=>{
        getExam();
    },[])

  return (
    <div>
        <input type="text" name="name"></input>
        <input type="text" name="course" ></input>
        <input type="number" name="fees"></input>
        <input type="button" value="Submit" />
    </div>
  )
}

export default Exam