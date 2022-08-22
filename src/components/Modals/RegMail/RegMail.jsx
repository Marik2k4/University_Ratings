import { Link } from 'react-router-dom';
import fb from '../../../img/fb.png';
import gl from '../../../img/gl.png';

import './RegMail.scss';

const Enter = props => {

    return (
        <div className={`regmail_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}} >

            <div className='MainText'>
                <p>Зарегистрироваться</p>
                <p>Уже есть аккаунт? <Link className='regModal' to="/logModal"><span>Войти</span></Link> </p> 
            </div>

            <div className='inputs'>
                <p>Эл. почта</p>
                <input></input>
                <p>Пароль</p>
                <input type="password"></input>
            </div>

            <button>Зарегистрироваться</button>

            <div className='Or'>
                <span className='separator'>Или зарегистрируйтесь через</span>
            </div>
            
            <div className="imgs">
                <img src={fb} width={25} height={25} />
                <img src={gl} width={25} height={25} />
            </div>

        </div>
    )
}

export default Enter;