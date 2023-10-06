import React from "react";

const Godfather = (props) => {
  const fullName = props.mainInfo["fullName"];
  const programs = props.profileInfo["programas"];
  const godchildren = props.profileInfo["ahijados"];
  const memberShipDate = props.profileInfo["fechaMembresia"];
  const gifted = props.profileInfo["donado"];
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {godchildren && godchildren.length}
              </p>
              <p className="text-gray-400">Ahijados</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">{gifted}</p>
              <p className="text-gray-400">Donado</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">2018</p>
              <p className="text-gray-400">Miembro Desde</p>
            </div>
          </div>
          <div className="text-center border-b pb-12">
            {fullName && (
              <h1 className="text-4xl font-medium text-gray-700">{fullName}</h1>
            )}
          </div>
          <div className="text-center border-b pb-12">
            <p className="font-bold text-gray-700 text-xl">Programas</p>
            {programs && <p className="text-gray-400">{programs.join(", ")}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Godfather;
