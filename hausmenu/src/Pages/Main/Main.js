import './styles.css';
import { useNavigate } from 'react-router-dom'
import pastaPhoto from '../../assets/Massa-daria-shevtsova.jpeg'

function Main() {
  const navigate = useNavigate()

  return (
    <div className="main-page">
      <header>
        AQUI VAI FICAR UM COMPONENTE HEADER. Lembrete: Procurar fontes!
      </header>
      <main className='main-main'>
        <div className='left-main'>
          <section className='left-section'>
            <div className='left-logo'>HAUSMENU</div>
            <div className='left-slogan'>Facilitando o seu prazer de cozinhar!</div>
          </section>
        </div>
        <div className='right-main'>
          <img className='main-img' src={pastaPhoto} alt='Pasta-prep' />
        </div>
      </main>
    </div>
  );
};

export default Main;
