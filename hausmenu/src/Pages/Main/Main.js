import './styles.css';
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()

  return (
    <div className="main-page">
      <header>
        <h1>HAUSMENU</h1>
        <button
          className='golden-btn'
          onClick={() => navigate('/login')}
        >
          login
        </button>
      </header>
      <div className='main-lista'>Lista de Compras</div>
      <div className='main-cardapio'>Cardápio</div>
      <div className='main-receitas'>Receitas</div>
      <div className='main-despensa'>Despensa</div>
    </div>
  );
};

export default Main;
