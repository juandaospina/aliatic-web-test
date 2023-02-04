import * as React from "react";
import { Box, Modal } from "@mui/material";

import { Invoice } from "../../types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "25px",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  invoice: Invoice | any;
  openModal: boolean;
}

export const ModalInvoice: React.FC<Props> = ({ invoice, openModal }) => {
  const [open, setOpen] = React.useState(openModal);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4 id="modal-modal-title" className="text-center">
            Vista factura
          </h4>
          <div>
            <label className="form-label" htmlFor="id">
              Id factura
            </label>
            <input
              className="form-control"
              id="id"
              type="text"
              disabled
              value={invoice[0].InvoiceId}
            />
          </div>

          <div>
            <label className="form-label" htmlFor="date">
              Fecha
            </label>
            <input
              className="form-control"
              id="date"
              type="text"
              disabled
              value={invoice[0].InvoiceDate}
            />
          </div>

          <div>
            <label className="form-label" htmlFor="customer">
              Cliente
            </label>
            <input
              className="form-control"
              id="customer"
              type="text"
              disabled
              value={invoice[0].Customer}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
