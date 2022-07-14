import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
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
          <InputDisplay className="my-2" blueScore={props.scores.blueScore} redScore={props.scores.redScore} />
          <InputButtons className="my-2" scores={props.scores} setScores={props.setScores} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
          <Button variant="danger">Reveal Winner</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default InputModal;