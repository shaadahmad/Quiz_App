import React from 'react'
import { connect } from 'react-redux';
import { isLogin } from '../redux/Register/R_Action';

import Login from './Login';

import UserContainer from './UserContainer';

function ProtectPage({ children, authenticated }) {
    // const auth=useData();
    console.log(authenticated)

    return (
        <div>
            {
                authenticated ? <UserContainer /> : <Login />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProtectPage)
