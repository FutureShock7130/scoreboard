import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function InputDisplay(props) {
    useEffect(() => {
        console.log(props.scores);
    }, [props.scores]);
    return (
        <Container>
            <Row>
                <Col>
                <div className="d-flex justify-content-center h1">
                    { props.scores.blueScore }
                </div>
                </Col>
                <Col>
                <div className="d-flex justify-content-center h1">
                    { props.scores.redScore }
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default InputDisplay;