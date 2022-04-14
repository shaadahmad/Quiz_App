import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { activeUser, isLogin, loginUsers, report } from '../redux/Register/R_Action'

function AdminPage({ userData, loginUsers, admin, report }) {


    useEffect(() => {
        loginUsers()

    }, [])

    useEffect(() => {
        report()

    }, [])

    const [tap, setTap] = useState("")
    const navigate = useNavigate()

    // console.log(userData.reportCard.score)




    return (
        tap === "users" ?
            <div>
                <h1 className='Admin_table_heading specialHeading' >Welcome :- <span style={{ color: "white" }}>{admin}</span> </h1>
                {/* <div className='quizForm'> */}

                <table className='Admin_table quizForm'>
                    <tr>
                        <th >ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Phone</th>

                    </tr>
                    <tbody >
                        {
                            userData.users?.map(data => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.email}</td>
                                        <td>{data.name}</td>
                                        <td>{data.password}</td>
                                        <td>{data.phone}</td>

                                    </tr>)
                            })
                        }
                    </tbody>

                </table>
                <Link to='/login'>
                    <button className='btn special'>Logout</button>
                </Link>
            </div> : tap === "result" ?
                <div >
                    <h1 className='Admin_table_heading specialHeading' >Welcome :- <span style={{ color: "white" }}>{admin}</span> </h1>
                    <table className='Admin_table quizForm'>
                        <tr>
                            <th >ID</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Total Questions</th>
                            <th>Options Selected</th>
                        </tr>
                        <tbody >
                            {
                                userData.reportCard?.map(data => {
                                    return (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.Name}</td>
                                            <td>{data.Score}</td>
                                            <td>5</td>
                                            <td>{data.optionsSelected.map((e, i) => {
                                                return ` ${i + 1}: (${e}) ${" "} `
                                            })}</td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                    <Link to='/login'>
                        <button className='btn special'>Logout</button>
                    </Link>
                </div>
                : tap === "AddQuestion" ? navigate('/add') : <>
                <div className='operationHeading'>

                    <h2  >Choose Your Operation  <span style={{ color: "white" }}></span> </h2>
                </div>
                    <div className='operationButton'>

                        <button type="button" className="btn btn-primary mt-2 " onClick={() => setTap("users")}>Total Registrations</button>
                        <button type="button" className="btn btn-primary mt-2 " onClick={() => setTap("result")}>Results</button>
                        <button type="button" className="btn" onClick={() => setTap("AddQuestion")}>Add New Question</button>
                    </div>
                </>



    )
}

const mapStateToProps = state => {
    return {
        userData: state.auth,
        // report: state.auth.reportCard,
        admin: state.auth.nameOfAdmin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        report: () => dispatch(report()),
        loginUsers: () => dispatch(loginUsers()),
        active: (name) => dispatch(activeUser(name)),
        isLogin: () => dispatch(isLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)