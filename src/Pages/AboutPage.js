import { Container } from "react-bootstrap";
import HTML5 from '../Img/html-5.png';
import CSS from '../Img/css-3.png';
import BOOTSTRAP from '../Img/bootstrap.png';
import MATIRIALUI from '../Img/pngwing.com.png'
import JAVASCRIPT from '../Img/js.png';
import VUE from '../Img/brands.png';
import MONGODB from '../Img/pngwing.com (1).png';
import MYSQL from '../Img/mysql.png';
import EXPRESS from '../Img/SustainableWWW_Express_JS_Introduction_First_Project.jpg-1636890557691-removebg-preview.png';
import PHP from '../Img/php.png'
import LARAVEL from '../Img/pngwing.com (2).png';
import NODE from '../Img/nodejs.png';
import REACT from '../Img/react.png';
import ANDROID from '../Img/android.png';
import PROFILEimg from '../Img/prof2.jpg';

const AboutPage=({index,...props})=>{
    return(
        <Container fluid {...props}>
            <div className="row">
                <div className="col-7 align-items-center text-light">
                    <p className="mt-5" style={{fontSize:"18px"}}>
                       I am a proficient software developer with expertise in web development, specializing in both front-end and back-end technologies. On the front-end, I excel in utilizing HTML, CSS, and JavaScript, complemented by frameworks including Bootstrap, ReactJS, and VueJS. I am adept at incorporating libraries such as Google Material UI to enhance the user interface.
                    </p>
                    <p style={{fontSize:"18px"}}>
                        For back-end development, I leverage technologies such as NodeJs with the ExpressJs framework and PHP with the Laravel framework.For keeping the information collected i’m knowledgeable in MongoDB and MySQL. My comprehensive skill set enables me to create robust and efficient web applications that meet the highest standards of functionality and design.
                    </p>
                    <p style={{fontSize:"18px"}}>
                         Furthermore, I possess proficiency in Android development, utilizing Kotlin and Jetpack Compose to craft sophisticated and user-friendly Android applications. With a keen eye for detail and a commitment to staying abreast of the latest industry trends, I ensure the delivery of cutting-edge solutions that exceed client expectations.
                    </p>
                    <div className="row mt-5">
                        <div className="col-1">
                            <img src={HTML5} alt="HTML5"></img>
                        </div>
                        <div className="col-1">
                            <img width={"32px"} height={"32px"} src={CSS} alt="CSS"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={BOOTSTRAP} alt="BOOTSTRAP"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={MATIRIALUI} alt="MATIRIALUI"></img> 
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={JAVASCRIPT} alt="JAVASCRIPT"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={VUE} alt="VUE"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={MONGODB} alt="MONGODB"></img>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-1">
                            <img width={"32px"} height={"32px"} src={ANDROID} alt="ANDROID"></img>
                        </div>
                        <div className="col-1">
                            <img width={"32px"} height={"32px"} src={MYSQL} alt="MYSQL"></img>
                        </div>
                        <div className="col-3">
                           <img style={{objectFit: 'cover'}} width={"150px"} height={"32px"} src={EXPRESS} alt="EXPRESS"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={PHP} alt="PHP"></img> 
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={LARAVEL} alt="LARAVEL"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={REACT} alt="REACT"></img>
                        </div>
                        <div className="col-1">
                           <img width={"32px"} height={"32px"} src={NODE} alt="NODE"></img>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                     <img style={{borderRadius:"20px"}} className="mt-5" width={"480px"} height={"585px"} src={PROFILEimg} alt="PROFILEimg"></img>
                </div>
            </div>
        </Container>
    )
}
export default AboutPage;