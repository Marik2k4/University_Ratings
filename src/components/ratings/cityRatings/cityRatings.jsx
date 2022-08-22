import { Link } from 'react-router-dom';
import './cityRatings.scss';

export default function cityRatings() {
  return (
    <div className='cityRatings'>
        <div className='title'>Городские рейтинги</div>

        <div className='list'>

            <div className='Vuzy'>
                <div className='name'>Вузы</div>
                <Link className="link" to="/city-vuzy">
                <button>Открыть список</button>
                </Link>
            </div>

            <div className='Tech'>
                <div className='name'>
                    <p>Колледжи</p>
                    <p>Техникумы</p> 
                </div>
                <Link className="link" to="/city-kolledzh">
                <button>Открыть список</button>
                </Link>
            </div>

            <div className='Students'>
                <div className='name'>Студенты</div>
                <button>Открыть список</button>
            </div>

        </div>
        
    </div>
  )
}
