import { useState } from "react";
import { toast } from "react-toastify";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import api from "../service/api";

import ModalOperator from "./ModalOperator";
import ModalCSV from "./ModalCSV";

interface Props {
  setUpdate: () => void;
}

const Header: React.FC<Props> = ({ setUpdate }) => {
  const [show, setShow] = useState(false);
  const [showCSV, setShowCSV] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState<FileList | null>();

  const handleSave = async () => {
    if (name.trim().length > 0) {
      try {
        const response = await api.post("/operators", { name });
        if (response.status === 201)
          toast.success("Operador cadastrado com sucesso.");
        setShow(false);
        setName("");
        setUpdate();
      } catch (error) {
        toast.error(error.response.data.error);
      }
    } else {
      toast.error("Digite um nome para o operador.");
    }
  };

  const handleSaveClient = async () => {
    const data = new FormData();
    if (file) {
      data.append("file", file[0]);
      try {
        const response = await api.post("/upload", data);
        if (response.status === 200) toast.success(response.data.message);
        setUpdate();
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
    setShowCSV(false);
  };
  return (
    <>
      <ModalOperator
        show={show}
        setShow={setShow}
        handleSave={handleSave}
        setName={setName}
      />
      <ModalCSV
        setFile={setFile}
        handleSaveClient={handleSaveClient}
        showCSV={showCSV}
        setShowCSV={setShowCSV}
      />
      <Navbar bg="dark" variant="dark" className="mb-3 p-3 ">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <h2>JetWeb</h2>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Button
              variant="secondary"
              onClick={() => setShow(true)}
              className="bg-dark m-1"
            >
              Novo operador
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowCSV(true)}
              className="bg-dark m-1"
            >
              Importar CSV
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
