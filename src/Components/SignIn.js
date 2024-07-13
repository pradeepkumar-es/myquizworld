import {React, useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase'

const auth= getAuth(app);
const SignIn = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword ] =useState("");
  const signInUser=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((value)=>console.log("loginned successfully"))
    .catch((error)=>console.log(error));
  }
  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='write your email' required />
        <label htmlFor="">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='enter your password' required />
        <button onClick={signInUser}>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
