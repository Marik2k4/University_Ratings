import { Link } from 'react-router-dom';
import './register.scss';

export default function Register() {
  return (
    <div className='register'>

        <div className='text'>
          <p>Регистрация</p>
          <p> УЖЕ ЕСТЬ АККАУНТ? 
            <Link className="link" to="/log">
              <a href="#">ВОЙТИ</a> 
            </Link>
          </p>
        </div>

        <div className='fields'>
          <p>Наименование образовательного учреждения *</p>
          <input type="text" />
          <p>Эл. почта *</p>
          <input type="email" />
          <p>Телефон *</p>
          <input type="tel" />
          <p>Пароль *</p>
          <input type="password" />
          <p>Повтор пароля *</p>
          <input type="password" />
        </div>

        <div className='reg'>
          <button>Зарегистрироваться</button>
        </div>
        

    </div>
  )
}
