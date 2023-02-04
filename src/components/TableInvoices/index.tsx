import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridSelectionModel,
} from "@mui/x-data-grid";

import { Invoice } from "../../types";
import { getInvoices, promiseDeleteInvoice } from "../../services";

const columns: GridColDef[] = [
  { field: "InvoiceId", headerName: "ID", width: 100 },
  { field: "InvoiceDate", headerName: "Fecha", flex: 1, width: 180 },
  { field: "Customer", headerName: "Cliente", flex: 1, width: 130 },
];

export const TableInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[] | undefined | any>([]);
  const [seletedRows, setSeletedRows] = useState<Invoice[] | undefined | any>([]);

  const handleRowsSelection = (ids: GridSelectionModel) => {
    const selected = ids.map((id: GridRowId) =>
      invoices.find((row: Invoice) => row.InvoiceId === id)
    );
    setSeletedRows(selected);
  };

  const handleDeleteInvoices = async (selected: Invoice[]) => {
    if (selected.length === 0) return;
    const deleteInvoice = await promiseDeleteInvoice(selected);
  };

  useEffect(() => {
    (async () => {
      try {
        const results = await getInvoices();
        setInvoices(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div style={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={invoices}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        autoHeight
        getRowId={(row: any) => row.InvoiceId}
        onSelectionModelChange={handleRowsSelection}
      />

      <button
        className="btn btn-danger mt-4"
        onClick={() => handleDeleteInvoices(seletedRows)}
      >
        Eliminar
      </button>
    </div>
  );
};
