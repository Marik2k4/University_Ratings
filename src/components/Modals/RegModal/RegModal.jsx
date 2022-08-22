import './RegModal.scss';
import { Link } from 'react-router-dom';
import fb from '../../../img/fb.png';
import gl from '../../../img/gl.png';

export default function Modal(props){
    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}} >
           
            <div className='MainText'>
                <p>Зарегистрироваться</p>
                <p>Уже есть аккаунт? <Link className='regModal' to="/logModal"><span>Войти</span> </Link> </p> 
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

            <Link className='regModal' to="/regMail">
                <button className='ViaEmail'>
                    Через эл.почту
                </button>
            </Link>
            
        </div>
    )
}