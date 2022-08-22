import './cityVuzy.scss';
import RatingItem from '../../ratingItem/ratingItem'

export default function Suzy() {
  return (
    <div className='Suzy'>
         <div className='First'>

            <div className='MaitTitle'>
                <p>Рейтинг ВУЗов</p> 
                <p>ГОРОДА КАЛИНИНГРАДА</p> 
            </div>

            <div className='list'>
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'93 балла'}
                />
                <RatingItem
                    title={'Балтийский Федеральный Университет им. И.Канта'}
                    link={'https://kantiana.ru/'}
                    score={'98 баллов'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'89 баллов'}
                />
            </div>

            </div>

            <div className='Second'>
                <div className='list'>
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'80 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'75 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'70 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'65 баллов'}
                    color={'white'}
                />

                </div>
            </div>
    </div>
  )
}
