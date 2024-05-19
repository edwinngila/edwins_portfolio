import Slider from "react-slick";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import { useContext} from "react";
import { CarouselShow } from "../UseContext/Hooks";
import ContactMePage from "../Pages/ContactMePage";
import ProjectsPage from "../Pages/ProjectsPage";
import { Container } from "react-bootstrap";

const ViewCarousel=()=>{
    const settings = {
        lazyLoad:"ondemand",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        swipe:false,
      };
      const {carouselRef}=useContext(CarouselShow)
    return(
        <Container fluid>
            <div className="row">
                <Slider ref={carouselRef} {...settings}>
                    <HomePage index={1}/>
                    <AboutPage index={2}/>
                    <ContactMePage index={3}/>
                    <ProjectsPage index={4}/>
                </Slider>
            </div>
        </Container>
    )
}
export default ViewCarousel;