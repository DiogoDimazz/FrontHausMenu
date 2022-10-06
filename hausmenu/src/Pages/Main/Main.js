import './styles.css';
import { useNavigate } from 'react-router-dom'
import AuthCard from '../../Components/Authenticate/Auth'
import ListPage from '../../Components/ListPage/ListPage'
import Header from '../../Components/Header/Header';
function Main() {
  const navigate = useNavigate()

  return (
    <div className="main-page">
      <div className='main-backdrop'>
        <div className='main-frame'>
          <div className='inner-frame'>
            <div className='main-container'>
              <section className='main-content'>
                <Header />
                <ListPage />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
