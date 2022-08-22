import './kolledzh.scss'
import RatingItem from '../../ratingItem/ratingItem'

export default function Kolledzh() {
  return (
    <div className='Suzy'>
         <div className='First'>

            <div className='MaitTitle'>
                <p>Рейтинг Колледжей</p> 
                <p>ГОРОДА КАЛИНИНГРАДА</p> 
            </div>

            <div className='list'>
                <RatingItem
                    title={'Колледж при  Западном филиале РАНХиГС'}
                    link={'https://zf.ranepa.ru/'}
                    score={'85 баллов'}
                />
                <RatingItem
                    title={'Калининградский морской рыбопромышленный колледж'}
                    link={'https://kmrk.ru/'}
                    score={'92 баллав'}
                />
                <RatingItem
                    title={'Колледж при БФУ им. И.Канта'}
                    link={'https://google.com'}
                    score={'83 балла'}
                />
            </div>

            </div>

            <div className='Second'>
                <div className='list'>
                <RatingItem
                    title={'Колледж информационных технологий и строительства'}
                    link={'https://google.com'}
                    score={'65 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'60 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'58 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Заголовок элемента списка'}
                    link={'https://google.com'}
                    score={'54 балла'}
                    color={'white'}
                />

                </div>
            </div>
    </div>
  )
}

