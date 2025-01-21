import Slider from "react-slick";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import { useContext} from "react";
import { CarouselShow } from "../UseContext/Hooks";
import ContactMePage from "../Pages/ContactMePage";
import ProjectsPage from "../Pages/ProjectsPage";
import { Container, Navbar } from "react-bootstrap";
import HomeBTN from '../Img/home (1).png'
import UserBTN from '../Img/user (2).png'
import EyeBTN from '../Img/view (1).png'
import MailBTN from '../Img/email (4).png'
import InstagramBTN from '../Img/instagram (2).png'
import GithubBTN from '../Img/github.png'
import WhatsappBTN from '../Img/whatsapp (2).png'
import LinkedIn from '../Img/linkedin.png'
import CV from '../Img/cv (2).png';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, colors } from "@mui/material";
import LogoOne from '../Img/android-chrome-192x192.png';
import burgerMenu from "../Img/burger-bar (2).png"
import "../css/NavigationBar.css"
import { useState } from "react";

const ViewCarousel=()=>{
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrower,setOpenDrower]=useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenDrower(newOpen);
    };
    const handleMenuClose = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenDrower(!openDrower)
    };
    const handleMenuOpen = () => {
        setOpen(true);
        setAnchorEl(null);
    };
    const settings = {
        lazyLoad:"ondemand",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        swipe:false,
      };
      const {carouselRef,goToSlide}=useContext(CarouselShow)
    return(
        <Container className="p-0" fluid>
            <div className="row">
               <Navbar className="Top-Navigation-Bar" style={{backgroundColor:"#101010"}} >
                    <Container fluid>
                        <Navbar.Brand href="#home"><img style={{width:"70px",height:"60px"}} src={LogoOne} alt='img'></img></Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text style={{cursor:"pointer"}}>
                              <img onClick={()=>{setOpenDrower(!openDrower)}} onClose={()=>{setOpenDrower(!openDrower); toggleDrawer(true)}} className="mt-1" style={{width:"54px",height:"46px",cursor:"pointer"}} src={burgerMenu}></img>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
               </Navbar>
                <Slider ref={carouselRef} {...settings}>
                    <HomePage index={1}/>
                    <AboutPage index={2}/>
                    <ContactMePage index={3}/>
                    <ProjectsPage index={4}/>
                </Slider>
            </div>

            <Drawer style={{backgroundColor:"#101010"}} className="d-flex align-content-lg-center justify-content-center" anchor="top" open={openDrower} onClose={toggleDrawer(false)}>
                <List>
                   <ListItemButton className="d-flex justify-content-center"  onClick={
                     (e)=>{
                        handleMenuClose(e)
                        goToSlide(0)
                     }
                    }>
                       <ListItemIcon>
                           <img src={HomeBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText color="white" primary="Home"/>
                   </ListItemButton>

                   <ListItemButton onClick={
                     (e)=>{
                        handleMenuClose(e)
                        goToSlide(1)
                     }
                    }
                    >
                       <ListItemIcon>
                         <img src={UserBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="Profile"/>
                   </ListItemButton>

                   <ListItemButton onClick={
                     (e)=>{
                        handleMenuClose(e)
                        goToSlide(3)
                     }
                    }>
                        <ListItemIcon>
                         <img src={EyeBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="Projects"/>
                   </ListItemButton>

                   <ListItemButton onClick={
                     (e)=>{
                        handleMenuClose(e)
                        goToSlide(2)
                     }
                    }>
                        <ListItemIcon>
                          <img src={MailBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="Contact me"/>
                   </ListItemButton>

                   <ListItemButton href="https://drive.google.com/file/d/1iHMtZywOUieSmcq8pCyhatoUfswhwnoS/view?usp=sharing">
                        <ListItemIcon>
                          <img src={CV} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="CV"/>
                   </ListItemButton>
                   
                   <ListItemButton href='https://www.instagram.com/kyaloo__/'>
                        <ListItemIcon>
                         <img className='m-1' src={InstagramBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="instagram"/>
                   </ListItemButton>
                   
                   <ListItemButton href='https://github.com/edwinngila'>
                        <ListItemIcon>
                          <img className='m-1' src={GithubBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="github"/>
                   </ListItemButton>

                   <ListItemButton href='https://github.com/edwinkimani'>
                        <ListItemIcon>
                          <img className='m-1' src={GithubBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="github"/>
                   </ListItemButton>
                   
                   <ListItemButton href='https://www.linkedin.com/in/edwin-ngila?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/'>
                        <ListItemIcon>
                          <img className='m-1' src={LinkedIn} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="LinkedIn"/>
                   </ListItemButton>
                   
                   <ListItemButton href='https://wa.me/+254704922743'>
                        <ListItemIcon>
                          <img className='m-1' src={WhatsappBTN} alt='img'></img>
                        </ListItemIcon>
                       <ListItemText primary="Whatsapp"/>
                   </ListItemButton>

                </List>   
            </Drawer>
        </Container>
    )
}
export default ViewCarousel;