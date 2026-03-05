import React,{useState} from 'react'
import {login} from '../api/login'

export default function LoginComponent({changeShow,toggleLogin}) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    //initalization

    const Login = async (e) => {
        e.preventDefault()
        setLoading(true) //on toggle set loading
        email.trim()
        password.trim()

        
        if(email == "" && password == ""){
            alert("Please input you email and password")
        }else{
            try{;
                const user = await login(email,password);
                if (user) {
                    alert('login successfully!')
                    if (typeof toggleLogin === 'function') toggleLogin()
                } else {
                    alert('invalid credentials')
                }

                setEmail('')
                setPassword('')

            } catch(err) {
                console.error('somethign went wrong!: ', err)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
            <form onSubmit={Login} className='login-form'>
                <input type="text" placeholder='username' value={email} onChange={e => setEmail(e.target.value)} disabled={loading}/>
                <input type='text' placeholder='password' value={password} onChange={e => setPassword( e.target.value)} disabled={loading}/>
                <button type='submit' disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
                <a onClick={changeShow} disabled={loading}>don't have account?</a>
            </form>
    )
}
