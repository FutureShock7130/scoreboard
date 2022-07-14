import { render } from "@testing-library/react";
import { useState } from "react";
import { ButtonGroup, Button, Container, Col, Row } from "react-bootstrap";

function InputButtons(props) {
    const scores = {
        "突破封鎖": 2,
        "物資得分（上）": 3,
        "物資得分（下）": 4,
        "病毒侵襲": -3,
        "無菌得分 (計時結束前）": 10,
        "無菌得分（無病菌）": 20,
        "無菌得分（聯盟平台)": 10,
    }

    const penaltyScores = {
        "犯規": -4,
        "技術犯規": -8,
        "Disabled": NaN,
    }

    // const handleScore = (keyName, dScore) => {
    //     let tempScores = props.scores;
    //     let keyScore = tempScores[keyName];
        
    //     tempScores[keyName] = keyScore + (dScore);
        
    //     props.setScores(tempScores);
    //     console.log(props.scores);
    // }

    return (
        <Container className="input-btns">
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                <div className="h3"> Blue Alliance </div>
                { Object.keys(scores).map(
                    (key, index) => (
                        <Button key={index} className="my-2 mx-2 px-4" onClick={ () => {props.handleScore("blueScore", scores[key])} }>
                            { key }
                        </Button>
                    )
                ) }
                <br></br>
                { Object.keys(penaltyScores).map(
                    (key, index) => (
                        <Button key={index} className="my-2 mx-2 px-4" variant="secondary" onClick={ () => {props.handleScore("blueScore", penaltyScores[key])} }> 
                            { key }
                        </Button>
                    )
                ) }
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                <div className="h3"> Red Alliance </div>
                { Object.keys(scores).map(
                    (key, index) => (
                        <Button key={index} className="my-2 mx-2 px-4" variant="danger" onClick={ () => {props.handleScore("redScore", scores[key])} }>
                            { key }
                        </Button>
                    )
                ) }
                <br></br>
                { Object.keys(penaltyScores).map(
                    (key, index) => (
                        <Button key={index} className="my-2 mx-2 px-4" variant="secondary" onClick={ () => {props.handleScore("redScore", penaltyScores[key])} }>
                            { key }
                        </Button>
                    )
                ) }
                </Col>
            </Row>
        </Container>
    )
}

export default InputButtons;