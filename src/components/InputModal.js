import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputButtons from "./InputButtons";
import InputDisplay from "./InputDisplay";

function InputModal(props) {
    return (
        <Modal
          fullscreen
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>對戰計分</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputDisplay className="my-2" scores={props.scores} />
          <InputButtons className="my-2" scores={props.scores} setScores={props.setScores} handleScore={props.handleScore} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
          <Link to="/display"><Button variant="danger" className="p-2 m-2"> Reveal Winner </Button></Link>
        </Modal.Footer>
      </Modal>
    )
}

export default InputModal;