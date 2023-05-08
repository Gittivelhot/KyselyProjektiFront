import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnswerTable from './AnswerTable';
import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";

function AnswerPage() {
  const { id } = useParams();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = () => {
    fetch(`http://localhost:8080/json/answers/${id}`)
      .then(response => response.json())
      .then(data => {
        setAnswers(data);
      })
      .catch(err => console.error(err))
  };

  return (
    <>
        <Box sx={{textAlign: 'left'}}>
          <Button to={`/`} component={Link} variant="contained" size="large" color="error" sx={{marginTop: 2, marginLeft: 2, textAlign: 'left'}}>Back</Button>
        </Box>
        <h1>{answers.title}</h1>
        <AnswerTable answerData={answers}/>
    </>
  );
}

export default AnswerPage;
