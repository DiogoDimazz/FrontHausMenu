import './styles.css'

function LoginCard() {

    return (
        <form className='login-form'>
            <label className='login-email descriptive-font'>
                Email:
                <input className='login-input' type="text" name="email" />
            </label>
            <label className='login-password descriptive-font'>
                Senha:
                <input className='login-input' type="password" name="password" />
            </label>
            <button className='login-btn primary-btn'><span>Entrar</span></button>
            <div className='body-text'>Ainda não possui conta? <span className='link-to'>Clique aqui!</span></div>
        </form>
    )
}

export default LoginCard