import { Link } from 'react-router-dom';
import './login.scss'

export default function Login() {
  return (
    <div className='login'>

        <div className='text'>
          <p>Вход</p>
          <p>НЕТ АККАУНТА? 
            <Link className="link" to="/reg">
              <a href="#">ЗАРЕГИСТРИРОВАТЬСЯ</a> 
            </Link>
          </p>
        </div>

        <div className='fields'>
          <p>Пароль *</p>
          <input type="password" />
          <p>Телефон или эл. почта *</p>
          <input type="text" />
        </div>

        <div className='log'>
          <button>Войти</button>
        </div>

    </div>
  )
}
