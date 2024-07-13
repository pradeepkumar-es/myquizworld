import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {React, useState} from 'react'
import {app} from '../firebase'

const auth = getAuth(app);  //auth is an authentication instance or object provided by Firebase that allows you to perform authentication-related tasks.
const Signup =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword(auth, email, password).then(value=>alert("Your Account is created Successfully"));
    }
    return (
        <div>
            <form className="signup" action="">
                <label>E-Mail</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Your Email" required />
                <label> Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="write your password" required/>
                <button onClick={createUser}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup 

