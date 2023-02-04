import React, { useState } from "react";

import { instance } from "../../api";

const initialState = {
  date: "",
  customer: "",
};

export const CreateInvoice = () => {
  const [formValues, setFormValues] = useState({
    date: "",
    customer: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (formValues.customer.length === 0 || formValues.date.length === 0) return;
    const submit = await instance.post("/invoices", JSON.stringify(formValues));
    if (submit.status === 200) {
      setFormValues(initialState);
    }
  };

  return (
    <section className="card" style={{ width: 450, padding: 25 }}>
      <h3>Crear factura</h3>
      <form onSubmit={submitForm}>
        <label htmlFor="date" className="form-label">
          Fecha creación
        </label>
        <input
          id="date"
          name="date"
          type="date"
          placeholder="Fecha"
          className="form-control"
          onChange={handleChange}
        />

        <label htmlFor="customer">Nombre cliente</label>
        <input
          id="customer"
          name="customer"
          type="text"
          placeholder="Nombre cliente"
          className="form-control"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </section>
  );
};
