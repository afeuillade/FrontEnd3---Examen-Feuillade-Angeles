import React, {useState} from 'react'
import Card from './Card'

const Form = () => {
    const [user,setUser] = useState({
        nombre: '',
        apellido: '',
        email:'',
        colorFavorito: ''
    })
    const [show,setShow] = useState(false)
    const [err,setErr] = useState(false)

    const handleSubmit = (e) =>{
            e.preventDefault()
            if(user.nombre.length > 3 && user.apellido.length >=6 ){
                setShow(true)
                setErr(false)
            }else{
                setShow(false)
                setErr(true)
            }
    }


    return(
        <div>
            <h2>Elige un color</h2>
            <div style={{flexDirection: 'column', width: '300px', margin: '10%',padding: '10%',display:'flex', border: '1px solid green', backgroundColor:'lightgrey'}}>
                
                <form onSubmit={handleSubmit}>
                    <input placeholder='Ingrese su nombre' type="text" value={user.nombre} onChange={(e)=> setUser({...user, nombre: e.target.value})} />
                    <input placeholder='Ingrese su apellido' type="text" value={user.apellido} onChange={(e)=> setUser({...user, apellido: e.target.value})} />
                    <input placeholder='Ingrese su e-mail' type="email" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/>
                    <input placeholder='Ingrese su color favorito' type="text" value={user.colorFavorito}onChange={(e)=> setUser({...user, colorFavorito: e.target.value})}/>

                    <button style={{color:'white', backgroundColor:'blue', width:'150px', margin: '10%',padding: '10%'}}>Enviar</button>
                </form>
                <br />
                <p style={{color:'red'}}>{err && 'Por favor chequea que la información sea correcta'}</p>
            </div>
            {show &&  <Card nombre={user.nombre} apellido={user.apellido} colorFavorito = {user.colorFavorito}/>}
        </div>
    )
}

export default Form