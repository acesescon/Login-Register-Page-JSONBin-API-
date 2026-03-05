import React,{useState} from 'react'
import { register } from '../api/login'

export default function RegisterComponent({changeShow}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vpassword, setVPassword] = useState('')

    const toggleRegister = async (e) => {
        e.preventDefault(); //prevent load page
        email.trim()
        password.trim()

        try {
            if(email == "" && password == ""){
                alert("Please input you email and password")
            }else{
                if(password === vpassword) { //vification
                    const response = await register(email, password)

                    if (response.success) {
                        alert('registered successfully')
                    }else {
                        alert(response.message) 
                    }

                    setEmail('')
                    setPassword('')
                    setVPassword('')

                    changeShow //go to login page

                } else {
                    alert ('password dont match!')
                }
            }
        } catch (err) {
            console.error('something went wrong: ', err)
        }
    }

    return (
        <form onSubmit={toggleRegister} className='register-form'>
            <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <input type='password' placeholder='verify password' value={vpassword} onChange={e => setVPassword(e.target.value)}/>
            <button type='submit'>Register</button>
            <a onClick={changeShow}>already have account?</a>
        </form>
    )
}
