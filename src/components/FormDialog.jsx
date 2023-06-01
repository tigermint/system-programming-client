import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import create from "../apis/create";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState(0);
    const [date, setDate] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        //TODO: 전송 api
        create(type, date, title, content, "choi").then((response) => {
            console.log(response);
        })
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} size='large' color='primary'>
                할 일을 생성하세요!
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>할일을 생성하세요!</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="title"
                        label="title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="content"
                        label="content"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setContent(e.target.value) }}
                    />

                    <TextField
                        autoFocus
                        margin="normal"
                        id="category"
                        label="category (0: family , 1: friend, 2: school)"
                        type="text"
                        fullWidth
                        variant="standard"
                        style={{ marginBottom: "24px" }}
                        onChange={(e) => { setType(e.target.value) }}
                    />

                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        type="datetime-local"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setDate(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleClose}>생성하기</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}