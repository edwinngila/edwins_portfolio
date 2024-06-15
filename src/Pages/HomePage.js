import { Button } from "@mui/material"
import { Container } from "react-bootstrap"
import HomeIcon from "../Img/E.png"
import { useContext } from "react"
import { CarouselShow } from "../UseContext/Hooks"

const HomePage=({index,...props})=>{
    const {goToSlide}=useContext(CarouselShow)
    return(
        <Container {...props} fluid>
        <div style={{minHeight:"100vh"}} className='row d-flex justify-content-center align-items-center'>
               <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <p style={{fontWeight:"700",fontSize:"50px",margin:"0px"}} className='text-light'>Hi,</p>
                    <p style={{fontWeight:"700",fontSize:"50px",margin:"0px"}} className='text-light'>I'm Edwin,</p>
                    <p style={{fontWeight:"700",fontSize:"50px",margin:"0px"}} className='text-light'>A Software Developer.</p>
                    <p style={{color:"#f1f1f1"}}>Frontend Dev / Backend Dev/ Android Dev</p>
                    <Button
                     onClick={
                          ()=>{
                            goToSlide(2)
                          }
                        }
                     className='mt-3' 
                     sx={
                            {
                                color:"#4AF1D7",
                                border:"solid #4AF1D7 2px",
                                borderRadius:"0px",
                                padding:"10px",
                                width:"200px"
                            }
                        } 
                     variant="outlined">Contact Me</Button>
               </div>
               <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0 d-flex justify-content-start-0 '>
                   <img width={"360px"} height={"360px"} className="Home-img" src={HomeIcon} alt="img"></img>
               </div>
            </div>
        </Container>
    )
}
export default HomePage