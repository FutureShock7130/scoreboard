import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function InputDisplay(props) {
    useEffect(() => {

    }, [props.blueScore, props.redScore])
    return (
        <Container>
            <Row>
                <Col>
                <div className="score-display d-flex justify-content-center h1">
                    { props.blueScore }
                </div>
                </Col>
                <Col>
                <div className="score-display d-flex justify-content-center h1">
                    { props.redScore }
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default InputDisplay;