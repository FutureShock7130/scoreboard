import { useState } from "react";
import { Col, Container } from "react-bootstrap";
import DashboardUtilities from "../components/DashboardUtilities";
import InputCard from "../components/InputCard";

function Dashboard(props) {
    const [scores, setScores] = useState(localStorage.getItem('scores'));

    return (
        <Container className="my-2">
            <Col>
                <DashboardUtilities />
            </Col>
            <Col>
                <InputCard scores={props.scores} />
            </Col>
        </Container>
    )
}

export default Dashboard;