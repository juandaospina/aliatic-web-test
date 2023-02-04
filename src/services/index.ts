import { instance } from "../api";
import { Invoice } from "../types";

const deleteInvoice = async (id: number) => {
  const deleted = await instance.post("/delete", JSON.stringify({ id }));
  return !!deleted ? true : false;
};

export const getInvoices = async (): Promise<Invoice[] | any> => {
  try {
    const results = await instance.get('/invoices');
    return results.data;
  } catch (error) {
    // throw new Error(error);
    console.log("Error", error);
  }
};

export const promiseDeleteInvoice = async (invoices: any) => {
  const promiseInvoices = [];
  for (const invoice of invoices) {
    promiseInvoices.push(deleteInvoice(invoice.InvoiceId));
  }

  await Promise.all(promiseInvoices);
};
