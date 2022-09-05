import './styles.css'
import userIcon from '../../assets/user_icon.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className='logo logo-font'>HausMARKET</div>
            <div className='header-user'>
                <div className='header-username header-font'>Testman Zilla</div>
                <img src={userIcon} alt='user-icon' style={{ width: '2rem', }} />
            </div>
        </div>
    )
}