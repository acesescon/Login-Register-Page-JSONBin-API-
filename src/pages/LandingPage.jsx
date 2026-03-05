import React,{useState} from 'react'
import RegisterComponent from '../components/RegisterComponent'
import LoginComponent from '../components/LoginComponent'

export default function LandingPage({ toggleLogin }) {
    const [show,setShow] = useState(true);

    return (
        <main className='landing-page'>

            {show ? //conditional rendering
            <LoginComponent changeShow={() => setShow(!show)} toggleLogin={toggleLogin}/> :
            <RegisterComponent changeShow={() => setShow(!show)}/>
            }
        </main>
    )
}
