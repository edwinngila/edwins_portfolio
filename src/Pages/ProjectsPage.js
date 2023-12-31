import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "react-bootstrap"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import contribution from '../Img/contribution.jpg'
import jiranisRestaurant from '../Img/jiranisRestaurant.jpg'
import stockPilot from '../Img/stockPilot.jpg';

const ProjectsPage=({index,...props})=>{
    return(
        <Container fluid {...props}>
           <div style={{height:"100vh"}} className="row d-flex align-items-center justify-content-center ">
           
               <div className="col-4">
                 <Card sx={{ maxWidth: 345 , backgroundColor:"#171717",borderRadius:"10px",border:"2px solid #00ffff"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={jiranisRestaurant}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className="text-light" gutterBottom variant="h6" component="div">
                           Restoration management system  
                        </Typography>
                        <Typography className="text-light" variant="body2" color="text.secondary">
                          People can keep track of their restaurants Activities ranging from inventory to number of daily sells
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{backgroundColor:"#F60E60"}} className="col-12 text-light" endIcon={<OpenInNewIcon />}>view site</Button>
                    </CardActions>
                 </Card>
               </div>

               <div className="col-4">
                  <Card sx={{ maxWidth: 345, backgroundColor:"#171717",border:"2px solid #00ffff",borderRadius:"10px"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={stockPilot}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className="text-light" gutterBottom variant="h6" component="div">
                          Stock pilot
                        </Typography>
                        <Typography className="text-light" variant="body2" color="text.secondary">
                          A way to help big stores like supermarkets or online markets to keep track of physical stock with the help of barcode scanners
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{backgroundColor:"#F60E60"}}  className="col-12 text-light" endIcon={<OpenInNewIcon />}>view site</Button>
                    </CardActions>
                  </Card>
               </div>

               <div className="col-4">
                  <Card sx={{ maxWidth: 345, backgroundColor:"#171717",border:"2px solid #00ffff",borderRadius:"10px"}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={contribution}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className="text-light" gutterBottom variant="h6" component="div">
                        Collaborations
                        </Typography>
                        <Typography className="text-light" variant="body2" color="text.secondary">
                        My contribution to a project that i took part in,showing that i can work together with other people on projects 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{backgroundColor:"#F60E60"}}  className="col-12 text-light" endIcon={<OpenInNewIcon />}>view site</Button>
                    </CardActions>
                  </Card>
               </div>

           </div>
        </Container>
    )
}
export default ProjectsPage;