import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AnswerPoll({poll}){
    const [open, setOpen] = useState(false);
    const [inputValues, setInputValues] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setInputValues({});
    }

    const updateAnswer = () => {
        const answer = {poll:poll.poll_id, answers:inputValues}
        console.log(answer)
        //LÄHETÄ TÄSSÄ BACKENDIIN!
        handleClose();
    }
    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Vastaa kyselyyn
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Vastaa kyselyyn: {poll.title}</DialogTitle>
                <DialogContent>
                {poll.questions.map((question) => (
                    <TextField
                    key={`question-${question.id}`}
                    autoFocus
                    margin="dense"
                    name="title"
                    label={question.query}
                    fullWidth
                    variant="standard" 
                    onChange={(event) =>
                        setInputValues({
                            ...inputValues,
                            [`question-${question.id}`]: event.target.value,
                        })
                    }/>
                ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={updateAnswer} variant="contained" color="success">Tallenna</Button>
                    <Button onClick={handleClose} variant="contained" color="error">Peruuta</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}