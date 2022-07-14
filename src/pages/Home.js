import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" id="links">
          <div className="h3">Scoreboard | 7130</div>
          <Link to="dashboard"><Button variant="primary" size="lg" className="p-2 m-2"> Match Dashboard </Button></Link>
          <Link to="display"><Button variant="primary" size="lg" className="p-2 m-2"> Match Display </Button></Link>
        </Container>
    )
}

export default Home;