



//Para tener un listado de items <Paciente /> con un listado de tupo scroll
ponemos las clases h-screen overflow-y-scroll

<div className="text-2xl text-center font-bold mt-9 bg-red-300 md:w-1/2 lg:w-3/5 
  rounded-xl p-3 mx-2 h-screen overflow-y-scroll">
      Listado Pacientes
      <div className="font-normal text-sm">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
