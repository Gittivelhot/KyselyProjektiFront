import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AnswerPoll from "./AnswerPoll";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function AnswerTable({answerData}) {

  return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {answerData?.questions?.map((question) =>(
                        <TableCell
                        key={`question-${question.id}`} 
                        align="center">{question.query}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answerData?.answers?.map((pollanswer) => (
                    <TableRow
                        key={`pollanswer-${pollanswer.id}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {pollanswer?.answers?.map((answer) =>(
                            <TableCell
                            key={`answer-${answer.id}`}
                            align="center">{answer.answer}</TableCell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
  )
}
