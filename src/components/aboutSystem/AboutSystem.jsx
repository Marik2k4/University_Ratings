import './aboutSystem.scss';
import AboutItem from './AboutItem/AboutItem';

export default function aboutSystem() {
  return (
    <div className='AboutSystem'>   
      <div className='title'>О системе</div>

        <div className='blocks'>
          <AboutItem
            name={'ДЕЯТЕЛЬНОСТЬ'}
            link={'/activity'}
          />
          <AboutItem
             name={'ПРАВИЛА ОЦЕНИВАНИЯ'}
             link={'/rules'}
          />
          <AboutItem
            name={'РУКОВОДСТВО ДЛЯ ОБРАЗОВАТЕЛЬНЫХ ОРГАНИЗАЦИЙ'}
            link={'/managment'}
          />
          <AboutItem
            name={'О КОЛЛЕКТИВЕ'}
            link={'/team'}
          />
        </div>

        <div className='ContactForm'>
          <div className='titleContact'>Свяжитесь с нами</div>

          <div className='fields'>
            <p>Имя *</p>
            <input type="text" placeholder='Введите своё имя'/>
            <p>Эл. почта *</p>
            <input type="email" placeholder='Добавьте эл.почту'/>
            <p>Тема *</p>
            <input type="text" placeholder='Укажите тему'/>
            <p>Сообщение</p>
            <textarea ame="text" placeholder='Добавьте сообщение...'></textarea>

            <div className='send'>
              <button>Отправить</button>
            </div>

          </div>
        </div>

    </div>
  )
}
