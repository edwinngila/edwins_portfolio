import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, NavLink } from "react-bootstrap";
import LogoOne from '../src/Img/E3.png';
import HomeBTN from '../src/Img/home (1).png'
import UserBTN from '../src/Img/user (2).png'
import EyeBTN from '../src/Img/view (1).png'
import MailBTN from '../src/Img/email (4).png'
import SettingBTN from '../src/Img/setting (1).png'
import InstagramBTN from '../src/Img/instagram (2).png'
import GithubBTN from '../src/Img/github.png'
import WhatsappBTN from '../src/Img/whatsapp (2).png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ViewCarousel from './Components/ViewsCarosel';
import { useRef, useState } from 'react';
import { CarouselShow, SnackTost } from './UseContext/Hooks';
import SimpleSnackbar from './screenPopups/SnackBar';

function App() {
  const [open, setOpen] = useState(false);
  const [message,setMessage]= useState('');
  const [severity,setSeverity]=useState();
  const carouselRef = useRef(null);

  const goToSlide = (index) => {
    carouselRef.current.slickGoTo(index);
  };
  
  const carousel={
    goToSlide,carouselRef
  }
  const snackBarValues={
    open, setOpen,
    message,setMessage,
    severity,setSeverity
  }

  return (
    <Container fluid>
    <SnackTost.Provider value={snackBarValues}>
    <SimpleSnackbar/>
     <CarouselShow.Provider value={carousel}>
      <div className="row">
        <div style={{height:"100vh",backgroundColor:"#101010"}} className="col-1">
            <div className='row'>
                <img src={LogoOne} alt='img'></img>
            </div>    
            <div className='row mt-3'>
               <Nav className=' d-flex justify-content-center align-items-center'>
                 <NavLink onClick={()=>{goToSlide(0)}} className='m-2'>
                     <img src={HomeBTN} alt='img'></img>
                 </NavLink>
                 <NavLink onClick={()=>{goToSlide(1)}} className='m-2'>
                     <img src={UserBTN} alt='img'></img>
                 </NavLink>
                 <NavLink onClick={()=>{goToSlide(3)}} className='m-2'>
                     <img src={EyeBTN} alt='img'></img>
                 </NavLink>
                 <NavLink onClick={()=>{goToSlide(2)}} className='m-2'>
                     <img src={MailBTN} alt='img'></img>
                 </NavLink>
                 <NavLink onClick={()=>{goToSlide(4)}} className='m-2'>
                     <img src={SettingBTN} alt='img'></img>
                 </NavLink>
              </Nav>
            </div>        
            <div className='row mt-4'>
               <Nav className='d-flex justify-content-center align-items-center mt-5'>
                 <NavLink>
                     <img className='m-1' src={InstagramBTN} alt='img'></img>
                 </NavLink>
                 <NavLink>
                     <img className='m-1' src={GithubBTN} alt='img'></img>
                 </NavLink>
                 <NavLink>
                     <img className='m-1' src={WhatsappBTN} alt='img'></img>
                 </NavLink>
              </Nav>
            </div>        
        </div>
        <div style={{height:"100vh",backgroundColor:"#171717"}} className="col-11">
            <ViewCarousel/>
        </div>
      </div>
      </CarouselShow.Provider>
      </SnackTost.Provider>
    </Container>
  );
}

export default App;
