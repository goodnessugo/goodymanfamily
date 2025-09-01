import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return (
        <div>
            <Link to='/dashboard'>
                <h1>Login/SignUp</h1>
            </Link>

        </div>
    )
}

export default LoginButton
