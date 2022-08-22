import { Link } from 'react-router-dom';
import './ratings.scss';
import S from '../../img/S.webp';

export default function Ratings() {
  return (
    <div className='ratings'>
      
        <img src={S} width={450} height={450}/>

        <div className='list'>
            <p>Областные рейтинги</p>
            <Link className="link" to="/regional-ratings">
            <button>Открыть</button>
            </Link>
        </div>

        <img src={S} width={450} height={450}/>

        <div className='list'>
            <p>Городские рейтинги</p>
            <Link className="link" to="/city-ratings">
            <button>Открыть</button>
            </Link>
        </div>
    </div>
  )
}
