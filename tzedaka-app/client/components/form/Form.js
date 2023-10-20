import React from "react";
import countries from "./Countries";
import FreeTextField from "./FreeTextField";
import DropdownField from "./DropdownField";

const FormComponent = () => {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    // const data = await response.json();
    // ...
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Información de contacto
          </h2>
          {/* The following div manages all fields */}
          <div className="w-3/4">
            <FreeTextField type="text" id="name" label="Nombre" required />
            <FreeTextField type="text" id="surname" label="Apellido" required />
            <FreeTextField type="text" id="email" label="Email" required />
            <FreeTextField
              type="tel"
              id="phone"
              label="Número de teléfono"
              pattern="[0-9]{10,12}"
              required
            />
            <DropdownField
              type="text"
              id="country"
              label="País"
              options={countries}
            />
            <FreeTextField type="text" id="address" label="Dirección" />
            <FreeTextField type="text" id="city" label="Localidad" />
            <FreeTextField type="text" id="state" label="Provincia" />
            <FreeTextField type="text" id="zipcode" label="Código Postal" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
