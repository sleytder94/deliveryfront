import React, {useState} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login = ()=> {


const [body, setBody] = useState({
    NombreUsuario:"",
    Password:""
})


/*const history=useHistory()

const handleHistory=()=>{
    history.push("/Editar")
}*/

const navigate =useNavigate()

const inputChange=({target})=>{
const {name,value}=target
setBody({
    ...body,
    [name]:value
})
}


const onSubmit=()=>{
   axios.post('http://localhost:4000/api/login',body)
   .then(({data})=>{
    navigate ('/Home')
   })
   .catch(({response})=>{
    console.log(response.data)
   })
}



    return (
        <div className="card">
            <div className="card-header">
                Crear
            </div>
            <div className="card-body">

                <form >
                    <pre>
                        <label>idUsuario     </label>
                        <input type='text'  />
                    </pre>

                    <pre>
                        <label>NombreUsuario </label>
                        <input type='text'  value={body.NombreUsuario} onChange={inputChange} name="NombreUsuario"/>
                    </pre>

                    <pre>
                        <label>Password      </label>
                        <input type='text'  value={body.Password} onChange={inputChange} name="Password"/>
                    </pre>


                    <input type='button' value="Guardar" onClick={onSubmit}/>


                </form>


            </div>






        </div>

    )

}
export default Login