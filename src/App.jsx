import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import ListaPacientes from "./components/ListaPacientes"

const App = () => {

  const [ pacientes, setPacientes ] = useState([]);
  const [ paciente, setPaciente ] = useState({});


  const getDBData = (key) => {
    return JSON.parse(localStorage.getItem( key ))
  }

  const setDBData = (key, data) => {
    localStorage.setItem(key, JSON.stringify( data ));
  }


  // Local Sotrage//
  useEffect( () => {   
    const lsData = getDBData('pacientes');
    !pacientes.length && lsData && setPacientes( lsData ) 
  }, [] );


  useEffect ( () => {    
    setDBData('pacientes', pacientes);
  }, [pacientes] );
  // End Local Storage //


  // Eliminado paciente //
  const eliminarPaciente = id => {

    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );
    setPacientes( pacientesActualizados );
  }
  // End Eliminar paciente //


  return (
    
    <div className="container mx-auto mt-20">
      <Header
        
      />

        <div className="mt-12 md:flex">

          <Form
            pacientes = { pacientes }
            setPacientes = { setPacientes }
            paciente = { paciente }
            setPaciente = { setPaciente }
          />

          <ListaPacientes
            pacientes = { pacientes }
            setPaciente = { setPaciente }
            eliminarPaciente = { eliminarPaciente }
          />

        </div>

    </div>

  )
}

export default App
