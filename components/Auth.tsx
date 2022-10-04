import React from 'react'
import Login from '../pages/login'
import Register from '../pages/register'

const Auth = () => {
    return (
        <div>{
            <Login /> || <Register />
        }
        </div>
    )
}

export default Auth
