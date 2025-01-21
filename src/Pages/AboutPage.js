import { Container } from "react-bootstrap";
import HTML5 from "../Img/html-5.png";
import CSS from "../Img/css-3.png";
import BOOTSTRAP from "../Img/bootstrap.png";
import MATIRIALUI from "../Img/pngwing.com.png";
import JAVASCRIPT from "../Img/js.png";
import VUE from "../Img/brands.png";
import MONGODB from "../Img/pngwing.com (1).png";
import MYSQL from "../Img/mysql.png";
import EXPRESS from "../Img/SustainableWWW_Express_JS_Introduction_First_Project.jpg-1636890557691-removebg-preview.png";
import PHP from "../Img/php.png";
import LARAVEL from "../Img/pngwing.com (2).png";
import NODE from "../Img/nodejs.png";
import REACT from "../Img/react.png";
import ANDROID from "../Img/android.png";
import PROFILEimg from "../Img/prof2.jpg";
import ContinuousBelt from "../Components/ContinuersBelt";
import "../css/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "@mui/material";

const AboutPage = ({ index, ...props }) => {
  const images = [
    CSS,
    BOOTSTRAP,
    MATIRIALUI,
    JAVASCRIPT,
    VUE,
    MONGODB,
    ANDROID,
    MYSQL,
    EXPRESS,
    PHP,
    LARAVEL,
    REACT,
    NODE,
    HTML5,
  ];
  return (
    <Container fluid {...props}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex justify-content-center align-content-center">
          <img
            className="mt-5 About-img"
            src={PROFILEimg}
            alt="PROFILEimg"
          ></img>
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 align-items-center text-light mt-5">
          <p style={{ fontSize: "15px" }}>
            I am a proficient software developer with expertise in web
            development, specializing in both front-end and back-end
            technologies. On the front-end, I excel in utilizing HTML, CSS, and
            JavaScript, complemented by frameworks including Bootstrap, ReactJS,
            and VueJS. I am adept at incorporating libraries such as Google
            Material UI to enhance the user interface.
          </p>
          <p style={{ fontSize: "15px" }}>
            For back-end development, I leverage technologies such as NodeJs
            with the ExpressJs framework and PHP with the Laravel framework. For
            managing data effectively, I’m knowledgeable in MongoDB and MySQL.
            My comprehensive skill set enables me to create robust and efficient
            web applications that meet the highest standards of functionality
            and design.
          </p>
          <p style={{ fontSize: "15px" }}>
            Furthermore, I possess proficiency in Android development, utilizing
            Kotlin and Jetpack Compose to craft sophisticated and user-friendly
            Android applications. With a keen eye for detail and a commitment to
            staying abreast of the latest industry trends, I ensure the delivery
            of cutting-edge solutions that exceed client expectations.
          </p>
          <p style={{ fontSize: "15px" }}>
            In addition to software development, I have a strong foundation in
            cybersecurity. My expertise includes network security, ethical
            hacking, and securing applications and servers. I am experienced in
            vulnerability assessment, penetration testing, and implementing
            security measures to safeguard sensitive data and systems against
            threats. Combining my software development and cybersecurity
            knowledge, I create secure and resilient solutions tailored to meet
            diverse client needs.
          </p>
          <p style={{ fontSize: "15px" }}>
            I am also a skilled UI/UX designer, proficient in designing
            intuitive, user-friendly interfaces that enhance the overall user
            experience. My approach combines creativity with a deep
            understanding of user behavior, ensuring that the designs are not
            only visually appealing but also highly functional. By leveraging
            tools such as Figma and Adobe XD, I deliver designs that align with
            modern standards and resonate with target audiences.
          </p>

          <div className="row">
            <ContinuousBelt
              images={images}
              beltWidth={20}
              beltHeight={20}
              speed={3}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AboutPage;
