

const pacientesEditados = pacientes.map((pac) => {
        if (pac.id === paciente.id) {
          return {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: paciente.id,
          };
        }
        return pac;
      });
