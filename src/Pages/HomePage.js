import { Button } from "@mui/material"
import { Container } from "react-bootstrap"
import HomeIcon from "../Img/E.png"

const HomePage=({index,...props})=>{
    return(
        <Container {...props} fluid>
        <div style={{height:"100vh"}} className='row d-flex justify-content-center align-items-center'>
               <div className='col-6'>
                    <p style={{fontWeight:"700",fontSize:"50px",margin:"0px"}} className='text-light'>Hi,</p>
                    <p style={{fontWeight:"700",fontSize:"50px",margin:"0px"}} className='text-light'>I'm Edwin,</p>
                    <p style={{fontWeight:"700",fontSize:"50px",margin:"0px"}} className='text-light'>A Software Developer.</p>
                    <p style={{color:"#f1f1f1"}}>Frontend Dev / Backend Dev/ Android Dev</p>
                    <Button className='mt-3' sx={{color:"#4AF1D7",border:"solid #4AF1D7 2px",borderRadius:"0px",padding:"10px",width:"200px"}} variant="outlined">Contact Me</Button>
               </div>
               <div className='col-6'>
                   <img src={HomeIcon} alt="img"></img>
               </div>
            </div>
        </Container>
    )
}
export default HomePage