
// import Login from './Login';
import React, { useState, useEffect, useMemo, useRef, useContext } from "react"
import axios from 'axios';
import { connect, useDispatch } from 'react-redux'
import { registerUsers } from '../redux/Register/R_Action'
import { Link, useNavigate } from "react-router-dom";




function Register({ userData, registerUsers }) {

    const r_email = useRef();
    const r_name = useRef();
    const r_phone = useRef();
    const r_pass = useRef();

    const Navigate=useNavigate()

    // const dispatch=useDispatch();

    
    
    function registerUser(e) {
        
        
        const newUser = {
            email: r_email.current.value,
            name: r_name.current.value,
            phone: r_phone.current.value,
            password: r_pass.current.value
        }



        if (r_email.current.value === '' || r_name.current.value === '' || r_phone.current.value === '' || r_pass.current.value === '') {
            alert('fill the fields')
        }
        else {

            registerUsers(newUser)
            Navigate('/login')

        }

    }

    return (
        <>
            <div className=" App my-5 mb-5" >
                {/* <Link to='/Quiz'>
                    <button>Quiz App</button>
                </Link> */}
                <form  >
                    <div ><h1 >Welcome to Quiz Register Page</h1></div>
                    <br />
                    <label className='registerLabel' htmlFor="fname">Email  : </label>
                    <input type="email" name="fname" ref={r_email} /><br />
                    <br />
                    <label className='registerLabel' htmlFor="fname">Name : </label>
                    <input type="text" name="fname" ref={r_name} /><br />
                    <br />
                    <label className='registerLabel' htmlFor="fname">Phone  : </label>
                    <input type="number" name="fname" ref={r_phone} /><br />
                    <br />
                    <label className='registerLabel' htmlFor="fname">Password : </label>
                    <input type="password" name="fname" ref={r_pass} /><br />
                    <br />
                    <div className='mt-4'>
                        <button type="button" className="btn btn-primary mt-2 " onClick={(e) => registerUser(e)}>Register</button>
                    </div>
                </form>
                <br />
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUsers: (newUser) => dispatch(registerUsers(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

// export default Register;
