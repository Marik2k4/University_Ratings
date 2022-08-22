import './ForgerPas.scss';

const Enter = props => {

    return (
        <div className={`forget_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}} >

            <div className='MainText'>
                <p>Создайте новый пароль</p>
                <p>Пожалуйста, введите свою эл. почту</p> 
            </div>

            <div className='inputs'>
                <p>Эл. почта</p>
                <input></input>
            </div>

            <button>Создать пароль</button>
            
        </div>
    )
}

export default Enter;