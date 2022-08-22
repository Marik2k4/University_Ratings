import { Link } from 'react-router-dom';
import './regionalRatings.scss'

export default function regionalRatings() {
  return (
    <div className='regionalRatings'>
      <div className='title'>Областные рейтинги</div>

      <div className='list'>

        <div className='Vuzy'>
          <div className='name'>Вузы</div>
          <Link className="link" to="/region-vuzy">
            <button>Открыть список</button>
          </Link>
        </div>

        <div className='Ssuzy'>
          <div className='name'>Ссузы</div>
          <Link className="link" to="/region-suzy">
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
