import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import {redirect} from 'react-router';
import axios from 'axios';


const Myprofile = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])
    if(!token){
        return <redirect to='/login' />
    }
    return (
        <div>
            {
                data &&
            <center>
                <br />
                <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Welcome : {data.username}</h5>
                    <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
                    
                </div>
                </div>
            </center>
        }
        </div>
    )
}

export default Myprofile