import React, { useState } from "react";
import { Paper, Button, Grid, TextField } from "@mui/material";
import { useStyles } from "./HomeCss";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useTheme,createTheme } from '@mui/material/styles';
import Swal from "sweetalert2";


export default function ContactPage() {
    var classes = useStyles()
    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      });
    var themes = useTheme();
    const xs= useMediaQuery("(max-width:400px)")
    const sm = useMediaQuery("(max-width:700px)");
    const md = useMediaQuery(themes.breakpoints.down('md'));
    const lg = useMediaQuery(themes.breakpoints.down('lg'));

   
      




    var categories = ['EMPLOYEMENT LAW', 'INTELLECTUAL PROPERTY RIGHT', 'INTERNATIONAL LAW', 'FLSA LITIGATION', 'CORPORATE & BUSSINESS LAW',
        'CORPORATE & BUSSINESS LAW', 'CORPORATE LITIGATION', 'COMMERCIAL LAW', 'BUSSINESS AGREEMENTS']
/*----------------------------------------------------------------------*/
/* Dialog Content */

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [contact, setContact] = useState('')
const [emailAddress, setEmailAddress] = useState('')
const [message, setMessage] = useState('')

const handleClick = async () => {
    // alert('Thank you,Our team will contact you soon ')
    handleClose()
    Swal.fire({
        icon:'success',
        title:'Thank You ! <br/> Our Team Will Contact You Soon...'
    })
    var cd = new Date()
    var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ':' + cd.getMinutes() + ':' + cd.getSeconds()

    var body = {}
    // api calling
}



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
       
    };

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >

                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    }

    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    return (

        <div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', }}>
                <img src='/assets/law5.jpg' style={{ width: '70%', height: 'auto', borderRadius: '10px' }} />
            </div>


            <div>
                <div style={{ marginTop: 50, marginLeft: '6%', fontSize: 30, fontWeight: 700, marginBottom: 30, fontFamily: 'Lobster' }}>
                    Categories
                </div>
                <div  >
                    <Grid container spacing={2} style={{display:'flex',justifyContent:'center',paddingInlineStart:xs?'20%' : sm?'30%': '0%'  }}>
                        {/* <Grid item xs={12} className={classes.rowStyle} > */}
                            <Grid item xs={12} style={{ display: 'flex', flexDirection:sm?'column': 'row', justifyContent: 'space-around' }} >
                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', }}  >
                                    <div >
                                        <img src="assets/r1.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>EMPLOYEMENT LAW</div>
                                    <div>services:3</div>
                                    <div style={{ display: 'flex', flexDirection:  'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen} >APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>

                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', marginTop: 50 }}  >
                                    <div >
                                        <img src="assets/r2.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>INTELLECTUAL PROPERTY RIGHT</div>
                                    <div>services:2</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen} >APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>

                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer' }}  >
                                    <div >
                                        <img src="assets/r3.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>INTERNATIONAL LAW</div>
                                    <div>services:2</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen} >APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>

                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', marginTop: 50 }}  >
                                    <div >
                                        <img src="assets/r4.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>FLSA LITIGATION</div>
                                    <div>services:2</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} style={{ display: 'flex', flexDirection:sm?'column': 'row', justifyContent: 'space-around' }}>
                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer' }}  >
                                    <div >
                                        <img src="assets/r5.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>CORPORATE & BUSSINESS LAW</div>
                                    <div>services:4</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5, flexWrap: 'wrap' }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>

                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', marginTop: 50 }}  >
                                    <div >
                                        <img src="assets/r6.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>CORPORATE LITIGATION</div>
                                    <div>services:1</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>

                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer' }}  >
                                    <div >
                                        <img src="assets/r7.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>COMMERCIAL LAW</div>
                                    <div>services:2</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>

                                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', marginTop: 50 }}  >
                                    <div >
                                        <img src="assets/r8.jpeg" style={{ width: 80, height: 80 }} />
                                    </div>
                                    <div>BUSSINESS AGREEMENTS</div>
                                    <div>services:3</div>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                                    </div>
                                </Paper>
                            </Grid>



                        {/* </Grid> */}
                    </Grid>
                </div>
            </div>





            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >

                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                       <span style={{fontFamily:'Poppins',fontWeight:'bolder',fontSize:'x-large'}}> Book Appoinment </span>
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                    <Grid container spacing={2}  >
                    {/* <Grid item xs={12} className='headinggrid' >
                        <div className='headingstyle'> Contact Us </div>
                    </Grid> */}
                    <Grid item xs={6}  >
                        <div className='divtext'> Your First Name</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='divtext'> Your Last Name</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='divtext'>  Contact</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='Contact Number..' type='number' value={contact} onChange={(event) => setContact(event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='divtext'> Email Address</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='@example.com' value={emailAddress} onChange={(event) => (event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='divtextmsg'>  Message</div>
                        <div className='textfieldmsg'>
                            <TextField fullWidth multiline rows={4} placeholder='Message........' value={message} onChange={(event) => (event.target.value)} />
                        </div>
                    </Grid>
                   

                </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Grid item xs={12} className='btngrid'>
                        <div >
                            <button onClick={handleClick} className='btn'>Submit</button>
                        </div>
                    </Grid>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </div>
    )
}