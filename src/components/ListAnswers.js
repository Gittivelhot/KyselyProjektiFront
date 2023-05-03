import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AnswerList({ poll }) {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <div>

      <Button variant="contained" onClick={handleClickOpen}>
        Katso vastaukset
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Katso vastaukset kyselyyn: {poll.title}</DialogTitle>
        <DialogContent>
          {poll.questions.map((question) => (
            <div key={`question-${question.id}`}>
              <p><b>{question.query}</b></p>
            </div>
          ))}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Peruuta</Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}
export default AnswerList;