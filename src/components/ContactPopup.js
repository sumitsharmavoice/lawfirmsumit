import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, } from "@mui/material";


export default function ContactPopup() {
    const [open, setOpen] = useState()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<div>
        
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    Contact Us
                </DialogTitle>
                <DialogContent >
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Submit
                    </Button>
                    <Button onClick={handleClose} >
                        close
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    </div>)


}