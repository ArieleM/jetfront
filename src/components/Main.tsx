import React from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";

type client = {
  name: string;
  birth: string;
  email: string;
  value: number;
};

interface IOperators {
  name: string;
  clients: client[];
}

interface MainProps {
  operators: IOperators[];
}

const Main: React.FC<MainProps> = ({ operators }) => {
  return (
    <Container className="mt-3">
      {operators.map((operator) => (
        <Accordion defaultActiveKey="1" className="my-1" key={operator.name}>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-dark">
              {operator.name}
            </Accordion.Header>
            <Accordion.Body className="md-12">
              Clientes:
              <ListGroup horizontal className="md-12">
                <ListGroup.Item className="w-25 text-center">
                  Nome
                </ListGroup.Item>
                <ListGroup.Item className="w-25 text-center">
                  Data de nascimento
                </ListGroup.Item>
                <ListGroup.Item className="w-25 text-center">
                  Valor
                </ListGroup.Item>
                <ListGroup.Item className="w-25 text-center">
                  Email
                </ListGroup.Item>
              </ListGroup>
              {operator.clients.map((client) => (
                <ListGroup horizontal className="md-12" key={client.email}>
                  <ListGroup.Item className="w-25 text-center">
                    {client.name}
                  </ListGroup.Item>
                  <ListGroup.Item className="w-25 text-center">
                    {client.birth}
                  </ListGroup.Item>
                  <ListGroup.Item className="w-25 text-center">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(client.value)}
                  </ListGroup.Item>
                  <ListGroup.Item className="w-25 text-center">
                    {client.email}
                  </ListGroup.Item>
                </ListGroup>
              ))}
              {operator.clients.length === 0 && (
                <div className="w-100 text-center py-4 bg-light">
                  Nenhum cliente cadastrado para esse operador!
                </div>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
      {operators.length === 0 && (
        <div className="w-100 text-center py-4 bg-light">
          Nenhum operador cadastrado!
        </div>
      )}
    </Container>
  );
};

export default Main;
