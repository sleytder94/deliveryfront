import React from 'react';
//import { json } from 'react-router-dom';

class  Crear extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            idUsuario:"",
            NombreUsuario:"",
            Password:"",
            Nombre:"",
            Apellido:"",
            Correo:"",
            Celular:"",
            Rol:"",
            Direccion:""

          }
    }
   
    cambioValor=(e)=>{
    const state=this.state;
    state[e.target.name]=e.target.value;
    this.setState({state});
    }

    
    enviarDatos=(e)=>{
            e.preventDefault();
            console.log("enviado");
            const{ idUsuario,NombreUsuario,Password,
                Nombre,Apellido,Correo,Celular,
                Rol,Direccion }=this.state;

                var datosEnviar={
                    idUsuario:idUsuario,
                    NombreUsuario:NombreUsuario,
                    Password:Password,
                    Nombre:Nombre,
                    Apellido:Apellido,
                    Correo:Correo,
                    Celular:Celular,
                    Rol:Rol,
                    Direccion:Direccion
                }/**/

        fetch("http://localhost:4000/api/agregar",{
            method:"POST"
            ,headers:{'Content-type':'application/json'},
            body:JSON.stringify(datosEnviar)
        })
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
           // this.props.history.push("/");


        })
        .catch(console.log)
    }

    render() { 

            const{
                idUsuario,
                NombreUsuario,
                Password,
                Nombre,
                Apellido,
                Correo,
                Celular,
                Rol,
                Direccion
            }=this.state;



        return ( 
                <div className="card">
                    <div className="card-header">
                        Crear
                    </div>
                    <div className="card-body">
                       
                        <form onSubmit={this.enviarDatos}>
                            <pre>
                            <label>idUsuario     </label>
                            <input type='text' name="idUsuario" value={idUsuario} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>NombreUsuario </label>
                            <input type='text' name="NombreUsuario" value={NombreUsuario} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Password      </label>
                            <input type='text' name="Password" value={Password} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Nombre        </label>
                            <input type='text' name="Nombre" value={Nombre} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Apellido      </label>
                            <input type='text' name="Apellido" value={Apellido} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Correo        </label>
                            <input type='text' name="Correo" value={Correo} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Celular       </label>
                            <input type='text' name="Celular" value={Celular} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Rol           </label>
                            <input type='text' name="Rol" value={Rol} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Direccion     </label>
                            <input type='text' name="Direccion" value={Direccion} onChange={this.cambioValor}/>
                            </pre>

                            <input type='submit' value="Guardar"/>


                        </form>


                    </div>






                </div>

         );
    }
}
 
export default Crear;