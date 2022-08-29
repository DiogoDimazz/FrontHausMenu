import './styles.css';
import { useNavigate } from 'react-router-dom'
import LoginCard from '../../Components/Login/Login'
function Main() {
  const navigate = useNavigate()

  return (
    <div className="main-page">
      <div className='main-frame'>
        <div className='inner-frame'>
          <div className='main-content'>
            <div className='logo logo-font'>HAUSMENU</div>
            <section className='main-form'>
              <LoginCard />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
