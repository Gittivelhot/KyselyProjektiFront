import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AnswerPoll(props){
    const [open, setOpen] = React.useState(false);
    const [poll, setPoll] = React.useState({
        title:"",questions: ""
    });

    const handleClickOpen = () => {
        setPoll ({title: props.poll.title})
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleInputChange = (event) => {
        setPoll({...poll, [event.target.name]: event.target.value})
    }

    const updateAnswer = () => {
        props.updateAnswer(poll, props.polls.answer.query)
    }
    
    return (
        <div key={poll.id}>
            <Button variant="outlined" onClick={handleClickOpen}>
                Vastaa kyselyyn
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Vastaa kyselyyn</DialogTitle>
                <DialogContent>
                    <TextField
                    autoFocus
                    margin="dense"
                    name="title"
                    value={poll.title}
                    onChange={e => handleInputChange(e)}
                    label="question"
                    fullWidth
                    variant="standard"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateAnswer}>Tallenna</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}