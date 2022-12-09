import React from 'react';
import { useParams } from 'react-router-dom';



class Editar extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = { 
            usuario:[]
            
         }
    }

    
    cambioValor=(e)=>{
        const state=this.state.usuario;
        state[e.target.name]=e.target.value;
        this.setState({usuario:state});
        }
    
   
        enviarDatos=(e)=>{
            e.preventDefault();
            console.log("actualizado");
            const{ idUsuario,NombreUsuario,Password,
                Nombre,Apellido,Correo,Celular,
                Rol,Direccion }=this.state.usuario;

                /**/var datosEnviar={
                    idUsuario:idUsuario,
                    NombreUsuario:NombreUsuario,
                    Password:Password,
                    Nombre:Nombre,
                    Apellido:Apellido,
                    Correo:Correo,
                    Celular:Celular,
                    Rol:Rol,
                    Direccion:Direccion
                }

                fetch("http://localhost:4000/api/actualizar/"+idUsuario,{
                    method:"PUT"
                    ,headers:{'Content-type':'application/json'},
                    body:JSON.stringify(datosEnviar)
                })
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta);
        
        
                })
                .catch(console.log)

             
 
    }

    componentDidMount(){
   
        const { id } = this.props.params;

        console.log(id)

      /* */fetch("http://localhost:4000/api/usuarios/"+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.setState({usuario:datosRespuesta[0]})

        })
        .catch(console.log)
    }


    render() { 

        const{usuario}=this.state
        return (  
                <div className="card">
                    <div className="card-header">
                        Editar
                    </div>
                    <div className="card-body">

                        <form onSubmit={this.enviarDatos}>
                        
                        {usuario.idUsuario}

                            <pre>
                            <label>idUsuario     </label>
                            <input type='text' name="idUsuario" value={usuario.idUsuario} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>NombreUsuario </label>
                            <input type='text' name="NombreUsuario" value={usuario.NombreUsuario} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Password      </label>
                            <input type='text' name="Password" value={usuario.Password} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Nombre        </label>
                            <input type='text' name="Nombre" value={usuario.Nombre} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Apellido      </label>
                            <input type='text' name="Apellido" value={usuario.Apellido} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Correo        </label>
                            <input type='text' name="Correo" value={usuario.Correo} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Celular       </label>
                            <input type='text' name="Celular" value={usuario.Celular} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Rol           </label>
                            <input type='text' name="Rol" value={usuario.Rol} onChange={this.cambioValor}/>
                            </pre>

                            <pre>
                            <label>Direccion     </label>
                            <input type='text' name="Direccion" value={usuario.Direccion} onChange={this.cambioValor}/>
                            </pre>

                            <input type='submit' value="Guardar"/>


                        </form>

                    </div>
     
                </div>

        );
    }
}
 


/*const Ed =(props)=>{

<Editar {...props}params={useParams()} />
}

export default Ed;*/

/**/export default (props) => 
(
    <Editar {...props}params={useParams()} />
);


//export default Editar;
















/*export default function Editar(){

    
    const params=useParams()
    console.log(params)

   

    return (  
        <div className="card">
            <div className="card-header">
                Editar
            </div>
            <div className="card-body">
            

            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>

)


}*/