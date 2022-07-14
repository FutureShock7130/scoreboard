import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DashboardUtilities() {
    return (
        <div className="db-util ">
            <Button variant="primary">+ Start a match</Button>{" "}
            <Button variant="danger">- Remove a match</Button>{" "}
            <Button variant="secondary">Modify (Open List)</Button>{" "}
            <Link to="/"><Button variant="secondary">Return to Home</Button>{" "}</Link>
        </div>
    )
}

export default DashboardUtilities;