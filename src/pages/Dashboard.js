import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import DashboardUtilities from "../components/DashboardUtilities";
import InputModal from "../components/InputModal";

function Dashboard(props) {
    const [showInput, setShowInput] = useState(false);

    const handleShow = () => setShowInput(true);
    const handleClose = () => setShowInput(false);

    useEffect(() => {
        if (showInput) {
            document.querySelector(".input").style.display = "block";
        } else {
            document.querySelector(".input").style.display = "none"; 
        }
    }, [showInput, ])

    return (
        <Container className="my-2">
            <Col>
                <DashboardUtilities handleShow={handleShow}/>
            </Col>
            <Col className="my-2 input">
                <InputModal 
                    setScores={props.setScores}
                    scores={props.scores} 
                    handleShow={handleShow} 
                    handleClose={handleClose} 
                    show={showInput} />
            </Col>
        </Container>
    )
}

export default Dashboard;