import React ,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

function Register(){
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push("/add");
        }
    },[]);

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const history = useHistory();

    async function singUp(){
        let item={name,password,email}
        let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");
    }
    
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"/>
            <br />
            <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
            <br />
            <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
            <br />
            <button className="btn btn-primary" onClick={singUp}>Sing Up</button>
        </div>
        </>
    )
}

export default Register