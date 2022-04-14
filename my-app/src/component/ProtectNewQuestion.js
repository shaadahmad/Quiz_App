import React from 'react'
import { connect } from 'react-redux';
import { isLogin } from '../redux/Register/R_Action';
import AdminPage from './AdminPage';

import Login from './Login';
import NewQuestions from './NewQuestions';

import UserContainer from './UserContainer';

function ProtectNewQuestion({ children, authenticated }) {
    // const auth=useData();
    console.log(authenticated)

    return (
        <div>
            {
                authenticated ? <NewQuestions /> : <Login />
            }

        </div>  

    )
}
const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isLogin: () => dispatch(isLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectNewQuestion)
