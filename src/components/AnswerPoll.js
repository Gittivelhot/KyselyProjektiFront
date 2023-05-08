import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AnswerPoll({poll}){
    const [open, setOpen] = useState(false);

    const initialInputValues = () => {
        let initial = {}
        poll.questions.forEach(question => {
            initial = {
                ...initial, 
                [`${question.id}`]: "-"
            }
        });
        return initial
    }
    
    const [inputValues, setInputValues] = useState(initialInputValues());

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setInputValues(initialInputValues());
    }


    const updateAnswer = () => {
        
        const answers = Object.keys(inputValues).map(question => {
            return {question: question, answer: inputValues[question]};
        });
        const answer = {poll_id:poll.poll_id, answers:answers}
        console.log(answer)
        fetch('http://localhost:8080/json/answers', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(answer)
        })
        .catch(error => console.error(error))
        handleClose();
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Answer poll
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Answer poll: {poll.title}</DialogTitle>
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
                            [`${question.id}`]: event.target.value,
                        })
                    }/>
                ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="error">Cancel</Button>
                    <Button onClick={updateAnswer} variant="contained" color="success">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}