import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import contribution from "../Img/feedback.png";
import UiUx from "../Img/UiUx.png";
import stockPilot from "../Img/stockPilot.jpg";
import vaultguard from "../Img/Screenshot 2024-05-19 133020.jpg";
import cyberGuard from "../Img/display.png";
import vulxplora from "../Img/vulxplora.png"

const ProjectsPage = ({ index, ...props }) => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center align-content-center"
      fluid
      {...props}
    >
      <div
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        className="row d-flex align-content-center align-items-center justify-content-center mt-3"
      >
        <div className="col-12 col-md-4 col-lg-4 mt-2 d-flex align-items-center justify-content-center align-content-center">
          <Card
            sx={{
              maxWidth: 320,
              backgroundColor: "#171717",
              borderRadius: "10px",
              border: "2px solid #00ffff",
            }}
          >
            <CardMedia sx={{ height: 100 }} image={UiUx} title="green iguana" />
            <CardContent>
              <Typography
                className="text-light"
                gutterBottom
                variant="h6"
                component="div"
              >
                Ui/Ux Design for IST web site
              </Typography>
              <Typography
                className="text-light"
                variant="body2"
                color="text.secondary"
              >
                This is a Ui/Ux Design for IST web site, the design is a
                representation of the IST web site
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{ backgroundColor: "#F60E60" }}
                href="https://www.figma.com/design/V6YJrFSd1bPjkEC0PbinQt/IST?node-id=0-1&m=dev&t=k49Gxun8TDXKrQM8-1https://www.figma.com/proto/V6YJrFSd1bPjkEC0PbinQt/IST?node-id=0-1&t=k49Gxun8TDXKrQM8-1https://www.figma.com/proto/V6YJrFSd1bPjkEC0PbinQt/IST?page-id=0%3A1&node-id=67-427&viewport=38%2C154%2C0.43&t=5CDJoypj6AXFe2T2-1&scaling=contain&content-scaling=fixed"
                className="col-12 text-light"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                View Design
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-md-4 col-lg-4 mt-2 d-flex align-items-center justify-content-center">
          <Card
            sx={{
              maxWidth: 320,
              backgroundColor: "#171717",
              border: "2px solid #00ffff",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={stockPilot}
              title="Stock Pilot"
            />
            <CardContent>
              <Typography
                className="text-light"
                gutterBottom
                variant="h6"
                component="div"
              >
                Stock Pilot
              </Typography>
              <Typography
                className="text-light"
                variant="body2"
                color="text.secondary"
              >
                A way to help big stores like supermarkets or online markets to
                keep track of physical stock with the help of barcode scanners.
              </Typography>
            </CardContent>
            <CardActions className="d-flex flex-column">
              <Button
                href="https://stock-manegment-system-ui-git-master-edwinngilas-projects.vercel.app/"
                style={{
                  backgroundColor: "#F60E60",
                  marginBottom: "10px",
                  marginLeft: "5px",
                }}
                className="col-12 text-light"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                View Site
              </Button>
              <Button
                href="https://github.com/edwinngila/Stock-pilot.git"
                style={{
                  backgroundColor: "#F60E60",
                }}
                className="col-12 text-light"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-md-4 col-lg-4 mt-2 d-flex align-items-center justify-content-center">
          <Card
            sx={{
              maxWidth: 320,
              backgroundColor: "#171717",
              border: "2px solid #00ffff",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={contribution}
              title="green iguana"
            />
            <CardContent>
              <Typography
                className="text-light"
                gutterBottom
                variant="h6"
                component="div"
              >
                Feedback
              </Typography>
              <Typography
                className="text-light"
                variant="body2"
                color="text.secondary"
              >
                A way to give feedback on the work of other people in the
                institute of software technologies
              </Typography>
            </CardContent>
            <CardActions className="d-flex flex-column">
              <Button
                href="https://feedback.isteducation.com/"
                style={{
                  backgroundColor: "#F60E60",
                  marginBottom: "10px",
                  marginLeft: "5px",
                }}
                className="col-12 text-light"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                View Site
              </Button>
              <Button
                href="https://github.com/Institue-of-software-technologies/ist-feedback.git"
                style={{ backgroundColor: "#F60E60" }}
                className="col-12 text-light"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                GitHub Repo
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-md-4 col-lg-4 mt-2 d-flex align-items-center justify-content-center align-content-center">
          <Card
            sx={{
              maxWidth: 320,
              backgroundColor: "#171717",
              border: "2px solid #00ffff",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={vaultguard}
              title="green iguana"
            />
            <CardContent>
              <Typography
                className="text-light"
                gutterBottom
                variant="h6"
                component="div"
              >
                vaultguard App
              </Typography>
              <Typography
                className="text-light"
                variant="body2"
                color="text.secondary"
              >
                Vault Guard is an advanced online backup system designed to
                offer users seamless data storage solutions.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://vaultguardio-edwinngilas-projects.vercel.app/"
                style={{ backgroundColor: "#F60E60" }}
                className="col-12 text-light"
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                view site
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-md-4 col-lg-4 mt-2 d-flex align-items-center justify-content-center align-content-center">
          <Card
            sx={{
              maxWidth: 320,
              backgroundColor: "#171717",
              border: "2px solid #00ffff",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={cyberGuard}
              title="green iguana"
            />
            <CardContent>
              <Typography
                className="text-light"
                gutterBottom
                variant="h6"
                component="div"
              >
                Cyber Guard
              </Typography>
              <Typography
                className="text-light"
                variant="body2"
                color="text.secondary"
              >
                Cyber Guard is a browser extension designed to enhance user
                privacy and safety while browsing.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://github.com/edwinkimani/Cyber-Guard-web-extension.git"
                target="_blank"
                style={{ backgroundColor: "#F60E60" }}
                className="col-12 text-light"
                endIcon={<OpenInNewIcon />}
              >
                view Repo
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-md-4 col-lg-4 mt-2 d-flex align-items-center justify-content-center align-content-center">
          <Card
            sx={{
              maxWidth: 320,
              backgroundColor: "#171717",
              border: "2px solid #00ffff",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={vulxplora}
              title="green iguana"
            />
            <CardContent>
              <Typography
                className="text-light"
                gutterBottom
                variant="h6"
                component="div"
              >
                VulnXplorer
              </Typography>
              <Typography
                className="text-light"
                variant="body2"
                color="text.secondary"
              >
                VulnXplorer is a python biased vulnerability scanning tool for web
                applications.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href="https://github.com/edwinkimani/VulnXplorer"
                target="_blank"
                style={{ backgroundColor: "#F60E60" }}
                className="col-12 text-light"
                endIcon={<OpenInNewIcon />}
              >
                view Repo
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default ProjectsPage;
