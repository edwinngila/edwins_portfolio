import Slider from "react-slick";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import { useContext} from "react";
import { CarouselShow } from "../UseContext/Hooks";
import ContactMePage from "../Pages/ContactMePage";
import ProjectsPage from "../Pages/ProjectsPage";

const ViewCarousel=()=>{
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        swipe:false
      };
      const {carouselRef}=useContext(CarouselShow)
    return(
        <div style={{height:"100vh"}} className="row">
            <Slider ref={carouselRef} {...settings}>
                <HomePage index={1}/>
                <AboutPage index={2}/>
                <ContactMePage index={3}/>
                <ProjectsPage index={4}/>
            </Slider>
        </div>
    )
}
export default ViewCarousel;