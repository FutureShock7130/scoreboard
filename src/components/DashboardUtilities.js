import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DashboardUtilities(props) {
    return (
        <div className="db-util ">
            <Button variant="primary" onClick={props.handleShow} >+ Start a match</Button>{" "}
            <Button variant="danger" >- Cancel the match</Button>{" "}
            <Button variant="secondary">Modify (Open List)</Button>{" "}
            <Link to="/"><Button variant="secondary">Return to Home</Button>{" "}</Link>
        </div>
    )
}

export default DashboardUtilities;