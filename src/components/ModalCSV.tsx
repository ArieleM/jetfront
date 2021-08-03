import React, { SetStateAction } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface Props {
  showCSV: boolean;
  setShowCSV: React.Dispatch<SetStateAction<boolean>>;
  handleSaveClient: () => void;
  setFile: (file: FileList | null) => void;
}

const ModalCSV: React.FC<Props> = ({
  showCSV,
  setShowCSV,
  handleSaveClient,
  setFile,
}) => {
  return (
    <Modal show={showCSV} onHide={() => setShowCSV(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Escolha o arquivo que deseja importar:</Form.Label>
          <input type="file" onChange={(e) => setFile(e.target.files)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowCSV(false)}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSaveClient}>
          Salvar Clientes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCSV;
