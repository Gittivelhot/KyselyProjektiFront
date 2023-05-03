import React, {useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AnswerPoll from "./AnswerPoll";
import AnswerList from "./ListAnswers";

function PollList () {

    const [polls, setPolls] = React.useState([]);

    useEffect(()=>fetchData(), []);

    const fetchData = ()=> {
        fetch("http://localhost:8080/json/polls")
        .then(response => response.json())
        .then(data =>{setPolls(data); console.log(data)})
        .catch(err => console.error(err))
      };

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Poll title</TableCell>
                <TableCell align="center">Answer</TableCell>
                <TableCell align="center">Check answers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {polls.map((poll) => (
                <TableRow
                  key={`poll-${poll.poll_id}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{poll.title}</TableCell>
                  <TableCell align="center">{<AnswerPoll poll={poll}/>}</TableCell>
                  <TableCell align="center">{<AnswerList poll={poll}/>}</TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default PollList;