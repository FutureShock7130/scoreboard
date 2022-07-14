import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Display(props) {
    return (
        <Container className="score-display d-flex flex-column justify-content-center align-items-center">
            <div className="db-util my-4">
                <Link to="/"><Button variant="secondary">Return to Home</Button>{" "}</Link>
             </div>
            <div className="score-display d-flex justify-content-center mx-2 my-4 display-text">
                { props.scores.blueScore }
            </div>
            {"      "}
            <div className="score-display d-flex justify-content-center mx-2 display-text">
                { props.scores.redScore }
            </div>
        </Container>
    )
}

export default Display;