import { TableInvoices } from "../src/components/TableInvoices";
import { CreateInvoice } from "./components/CreateInvoice";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TableInvoices />
      <CreateInvoice />
    </div>
  );
}

export default App;
