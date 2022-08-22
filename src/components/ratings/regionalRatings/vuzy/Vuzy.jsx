import './vuzy.scss'
import RatingItem from '../../ratingItem/ratingItem';
import RatingItemWithoutScore from '../../ratingItemWithoutScore/ratingItemWithoutScore';

export default function Vuzy() {
  return (
    <div className='RegVu'>
      <div className='First'>

        <div className='MaitTitle'>
          <p>Рейтинг ВУЗов</p> 
          <p>Калининградской области</p> 
        </div>

        <div className='list'>
          <RatingItem
            title={'Калининградский государственный технический университет'}
            link={'https://www.klgtu.ru/'}
            score={'91 балл'}
          />
          <RatingItem
            title={'Балтийский Федеральный Университет им. И.Канта'}
            link={'https://kantiana.ru/'}
            score={'97 баллов'}
          />
          <RatingItem
            title={'Западный филиал Российской академии народного хозяйства и государственной службы при Президенте РФ '}
            link={'https://zf.ranepa.ru/'}
            score={'88 баллов'}
          />
        </div>
 
      </div>

      <div className='Second'>
        <div className='list'>
          <RatingItemWithoutScore
            title={'Заголовок элемента списка'}
            UndTitle={'Подзалоловок элемента'}
            link={'https://www.google.com/'}
          />
          <RatingItemWithoutScore
            title={'Заголовок элемента списка'}
            UndTitle={'Подзалоловок элемента'}
            link={'https://www.google.com/'}
          />
          <RatingItemWithoutScore
            title={'Заголовок элемента списка'}
            UndTitle={'Подзалоловок элемента'}
            link={'https://www.google.com/'}
          />
          <RatingItemWithoutScore
            title={'Заголовок элемента списка'}
            UndTitle={'Подзалоловок элемента'}
            link={'https://www.google.com/'}
          />
        </div>
      </div>

    </div>
  )
}
