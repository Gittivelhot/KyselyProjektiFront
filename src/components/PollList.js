import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function PollList () {

    const [polls, setPolls] = React.useState([]);

    useEffect(()=>fetchData(), []);

    const fetchData = ()=> {
        fetch("http://localhost:8080/jsonpolls")
        .then(response => response.json())
        .then(data =>setPolls(data))
        .catch(err => console.error(err))

      };

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Poll Id</TableCell>
                <TableCell align="right">Poll title</TableCell>
                <TableCell align="right">Question 1</TableCell>
                <TableCell align="right">Question 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {polls.map((poll) => (
                <TableRow
                  key={poll.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {poll.poll_id}
                  </TableCell>
                  <TableCell align="right">{poll.title}</TableCell>
                  <TableCell align="right">{poll.questions[0].query}</TableCell>
                  <TableCell align="right">{poll.questions[1].query}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default PollList;