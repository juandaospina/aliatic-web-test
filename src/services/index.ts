import { instance } from "../api";
import { Invoice } from "../types";

// delete invoice
const deleteInvoice = async (id: number) => {
  const deleted = await instance.post("/delete", JSON.stringify({ id }));
  return !!deleted ? true : false;
};


// returns list of invoices
export const getInvoices = async (): Promise<Invoice[] | any> => {
  try {
    const results = await instance.get('/invoices');
    return results.data;
  } catch (error) {
    // throw new Error(error);
    console.log("Error", error);
  }
};

// allows to delete 1 or more selected invoices
export const promiseDeleteInvoice = async (invoices: any) => {
  const promiseInvoices = [];
  for (const invoice of invoices) {
    promiseInvoices.push(deleteInvoice(invoice.InvoiceId));
  }

  await Promise.all(promiseInvoices);
};
