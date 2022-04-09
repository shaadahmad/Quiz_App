
// import Login from './Login';
import React, { useState, useEffect, useMemo, useRef, useContext } from "react"
import axios from 'axios';
import { connect, useDispatch } from 'react-redux'
import { activeUser, loginUsers } from '../redux/Register/R_Action'
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";




function Login({ userData, loginUsers,active }) 
{
    const r_email = useRef();
    const r_pass = useRef();
    const Navigate=useNavigate()

    // const dispatch=useDispatch();

    useEffect(()=>{
        loginUsers()
    },[])

    function LoginUser(e) 
    {   
        console.log(userData)
        const newUser = {
            email: r_email.current.value,
            password: r_pass.current.value
        }


        if (r_email.current.value === '' ||  r_pass.current.value === '') {
            alert('fill the fields')
        }
        else {

            
        //    const aUser = userData.find(ele=>ele.email===newUser.email)
        //    if(aUser){
        //        Navigate('/Quiz')
               
        //    }

            userData.forEach((a) => 
            {
                if (a.email === newUser.email && a.password === newUser.password)
                {
                    active(a.name)
                    Navigate('/Quiz')
                }
              })
        }
    }
    return (
        <>
            <div className=" App my-5 mb-5" >
                {/* <Link to='/Quiz'>
                    <button>Quiz App</button>
                </Link> */}
                <form  >
                    <h1 >Welcome to Quiz Login Page</h1>
                    <br />
                    <label className='loginLabel' htmlFor="fname" >Email  : </label>
                    <input type="email" name="fname" ref={r_email} /><br />
                    <br />
                    <label className='loginLabel' htmlFor="fname">Password : </label>
                    <input type="password" name="fname" ref={r_pass} /><br />
                    <br />
                    <div className='mt-4'>
                        <button type="button" className="btn btn-primary mt-2 " onClick={(e) => LoginUser(e)}>Login</button>
                    </div>
                </form>
                <br />
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.auth.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUsers: (newUser) => dispatch(loginUsers(newUser)),
        active:(name)=>dispatch(activeUser(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

// export default Register;
