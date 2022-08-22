import { Link } from 'react-router-dom';
import fb from '../../../img/fb.png';
import gl from '../../../img/gl.png';

import './LogModal.scss';

const Enter = props => {

    return (
        <div className={`enter_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}} >

            <div className='MainText'>
                 <p>Войти</p> 
                <p>Впервые на сайте? <Link className='regModal' to="/regModal"> <span>Зарегистрироваться</span> </Link> </p> 
            </div>
            


            <div className='EnterVia'>
                <a href="https://ru-ru.facebook.com/" target="_blank" >
                    <button className='fb'>
                        <img src={fb} width={25} height={25} />
                        <span>Войти через Facebook</span>
                    </button>
                </a>

                <a href="https://ru-ru.facebook.com/" target="_blank">
                    <button className='gl'>
                        <img src={gl} width={25} height={25} />
                        <span>Войти через Google+</span>
                    </button>
                </a>
            </div>

            <div className='Or'>
                <span className='separator'>ИЛИ</span>
            </div>

            <Link to='/logMail'>
                <button className='ViaEmail'>
                    Войти через почту 
                </button>
            </Link>
            

        </div>
    )
}

export default Enter;