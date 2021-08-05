import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Main from "./components/Main";
import api from "./service/api";
import "./style.css";

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

function App() {
  const [operators, setOperators] = useState<IOperators[]>([]);
  const [update, setUpdate] = useState(false);
  const hasOperators = operators.length > 0;

  const isUpdate = async () => {
    if (hasOperators) {
      await api.get("/redistribute");
    }
    setUpdate(!update);
  };

  useEffect(() => {
    api.get("/operators").then((response) => setOperators(response.data));
  }, [update]);
  return (
    <>
      <Header setUpdate={isUpdate} />
      <Main operators={operators} />
      <ToastContainer />
    </>
  );
}

export default App;
