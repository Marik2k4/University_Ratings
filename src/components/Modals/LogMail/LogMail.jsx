import { Link } from 'react-router-dom';
import fb from '../../../img/fb.png';
import gl from '../../../img/gl.png';

import './LogMail.scss';

const Enter = props => {

    return (
        <div className={`logmail_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}} >

            <div className='MainText'>
                <p>Войти</p>
                <p>Впервые на сайте? <Link className='regModal' to="/regModal"><span>Зарегистрироваться</span></Link> </p> 
            </div>

            <div className='inputs'>
                <p>Эл. почта</p>
                <input></input>
                <p>Пароль</p>
                <input type="password"></input>
                <Link to='/forgerPas'> <span className='fgPas'>Не помню пароль</span> </Link>
            </div>

            <button>Войти</button>

            <div className='Or'>
                <span className='separator'>Или войдите через</span>
            </div>
            
            <div className="imgs">
                <img src={fb} width={25} height={25} />
                <img src={gl} width={25} height={25} />
            </div>

        </div>
    )
}

export default Enter;