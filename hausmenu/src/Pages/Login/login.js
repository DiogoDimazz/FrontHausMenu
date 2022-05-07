import './styles.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    return (
        <div className='login-page'>
            <h1>LOGIN</h1>
            <button
                className='golden-btn'
                onClick={() => navigate('/')}
            >
                Main
            </button>
        </div>
    )
}

export default Login