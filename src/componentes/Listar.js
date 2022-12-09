import React from 'react';

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {/*datosCargados:false,*/usuarios:[]}
    }


    borrarDatos=(id)=>{

        //console.log(id);

        /**/fetch("http://localhost:4000/api/eliminar/"+id,{
            method:"DELETE"
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
          this.cargarDatos();

        })
        .catch(console.log)
    }

    cargarDatos(){


        fetch("http://localhost:4000/api/usuarios")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.setState({/*datosCargados:true,*/usuarios:datosRespuesta})

        })
        .catch(console.log)
    }



    componentDidMount(){this.cargarDatos();}

   
    render() { 

        const{/*datosCargados,*/usuarios}=this.state
        
        /*if(!datosCargados){return (<div>Cargando...</div>)}
        else{*/

            return (
        

            <table className="table">
                <thead>
                    <tr>
                        <th>idUsuario</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Celular</th>
                        
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(
                            (usuario)=>(

                                <tr key={usuario.idUsuario}>
                                    <td>{usuario.idUsuario}</td>
                                    <td>{usuario.Nombre}</td>
                                    <td>{usuario.Apellido}</td>
                                    <td>{usuario.Correo}</td>
                                    <td>{usuario.Celular}</td>

                                    <td><a  href={"/Editar/"+usuario.idUsuario}>Editar</a></td>
                                    <td>
                                    <input  
                                    onClick={()=>this.borrarDatos(usuario.idUsuario)}
                                    value="Eliminar" type='button'/>
                                    
                                    </td>
                                </tr>

                            )
                        )}

                    
                </tbody>
            </table>);
        // }
    }
}
 
export default Listar;
