import React, { SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  handleSave: () => void;
  setName: React.Dispatch<SetStateAction<string>>;
}

const ModalOperator: React.FC<Props> = ({
  show,
  setShow,
  handleSave,
  setName,
}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar operador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Digite o nome do novo operador: {""}
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Salvar Operador
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOperator;
