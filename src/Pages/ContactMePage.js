import { Button, FormGroup, TextField } from "@mui/material"
import { useContext, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap"
import MailBTN from '../Img/mail (2).png'
import phone from '../Img/phone.png'
import emailjs from '@emailjs/browser';
import { SnackTost } from "../UseContext/Hooks";

const ContactMePage=({index,...props})=>{
    const form = useRef();
    const[wordCont,setWordCount]=useState(0);
    const[FullName,setFullName]=useState();
    const[Email,setEmail]=useState();
    const[Message,setMessages]=useState();
    const{open,setOpen,setMessage,setSeverity}=useContext(SnackTost);

    const contactDetails=(e)=>{
        try {
            console.log(e.target.value);
            e.preventDefault();
            emailjs.sendForm('service_gpf6aqr', 'template_ruyztt5', form.current, 'UxshDWNOLIxCpNCuz')
            .then((result) => {
                e.target.reset();
                setOpen(!open)
                setMessage("You have successfully sent the email")
                setSeverity("success")
            }, (error) => {
                setOpen(!open)
                setMessage(error.text)
                setSeverity("success")
            });           
           
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container className="text-light mt-3" {...props}>
                <div className='row'>
                    <div className='col-12 mt-3 d-flex align-items-center justify-content-center flex-column'>
                        <h1 style={{fontWeight:'700'}}>Contact us through</h1>
                        <h5>If you are interested with working with us you can live your information bellow</h5>
                    </div>
                </div>
                <div className='row mt-1 text-black'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 p-3 p-sm-3 p-md-4 p-lg-4 p-xl-4 contactUs'>
                        <div className='row mt-5'>
                            <div style={{color:"white",backgroundColor:"transparent",borderRadius:"20px",border:"2px solid #00ffff"}} className='col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 p-4 d-flex align-items-center justify-content-center flex-column'>
                                <img src={phone} alt='img'></img>
                                <h2>Contact me through</h2>
                                <h5>+254 704 922743</h5>
                            </div>
                        </div>
                        <div className='row mt-3 text-black '>
                            <div style={{color:"white",backgroundColor:"transparent",borderRadius:"20px",border:"2px solid #00ffff"}} className='col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10 p-4 d-flex align-items-center justify-content-center flex-column'>
                                <img src={MailBTN} alt='img'></img>
                                <h2>Email me through</h2>
                                <h5>edwinngila@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 p-2 p-sm-5 p-md-5 p-lg-5 p-xl-5'>
                        <Form ref={form} onSubmit={contactDetails}>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <h3 className="text-light" style={{textAlign:"center"}}>Enter your details for contact</h3>
                            </div>
                                <FormGroup>
                                    <TextField  
                                        InputLabelProps={{
                                        style: { color: 'white' },
                                        }}
                                        InputProps={{
                                            style: { color: 'white' },
                                        }}
                                        color="primary"
                                        style={{color:"white"}}
                                        focused  
                                        fullWidth 
                                        className="mt-3"
                                        id="outlined-basic" name='user_name' label="Full Name" variant="outlined" value={FullName} onChange={(e)=>{setFullName(e.target.value)}}/>
                                </FormGroup>
                                
                                <FormGroup>
                                   <TextField 
                                        InputLabelProps={{
                                        style: { color: 'white' },
                                        }}
                                        InputProps={{
                                            style: { color: 'white' },
                                        }}
                                        className="mt-3"
                                      type="email"
                                      name="user_email"
                                      color="primary" style={{color:"white"}} focused fullWidth id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}}/>
                                </FormGroup>

                            <FormGroup className='mt-4'>
                                <TextField 
                                  InputLabelProps={{
                                        style: { color: 'white' },
                                        }}
                                  InputProps={{
                                            style: { color: 'white' },
                                        }}
                                    id="outlined-multiline-static"
                                    label="Message"
                                    fullWidth
                                    multiline
                                    color="primary" focused
                                    value={Message}
                                    name="message"
                                    style={{color:"white"}}
                                    onChange={
                                    (e)=>{
                                        setWordCount((e.target.value).length)
                                        setMessages(e.target.value)
                                    }
                                   }
                                rows={4} placeholder='Type your text here...' maxLength={500}/>
                                <span className='me-end text-white'>Words:{wordCont}/500</span>
                            </FormGroup>

                            <FormGroup className='row d-flex align-items-center justify-content-center'>
                                <Button className="col-3 mt-3" size='md' style={{backgroundColor:'#f60e60',border:"none",color:"white"}} type="submit">Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </Container>
    )
}
export default ContactMePage;