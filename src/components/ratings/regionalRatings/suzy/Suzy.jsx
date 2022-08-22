import './suzy.scss';
import RatingItem from '../../ratingItem/ratingItem'

export default function Suzy() {
  return (
    <div className='Suzy'>
         <div className='First'>

            <div className='MaitTitle'>
                <p>Рейтинг ССУЗов</p> 
                <p>Калининградской области</p> 
            </div>

            <div className='list'>
                <RatingItem
                    title={'КМРК КГТУ'}
                    link={'https://kmrk.ru/'}
                    score={'94 балла'}
                />
                <RatingItem
                    title={'Колледж при БФУ  имени И.Канта'}
                    link={'https://kantiana.ru/universitys/instituty/university-college/'}
                    score={'95 баллов'}
                />
                <RatingItem
                    title={'Колледж сервиса и туризма'}
                    link={'http://www.xn--j1ahchdg.xn--p1ai/'}
                    score={'93 балла'}
                />
            </div>

            </div>

            <div className='Second'>
                <div className='list'>
                <RatingItem
                    title={'Колледж при Западном филиале РАНХиГС при президенте РФ'}
                    link={'https://zf.ranepa.ru/'}
                    score={'88 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Прибалтийский судостроительный техникум'}
                    link={'http://xn--d1ac0akhds.xn--p1ai/'}
                    score={'86 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Балтийский информационный техникум'}
                    link={'https://biit39.ru/'}
                    score={'83 балла'}
                    color={'white'}
                />
                {/*---*/}
                <RatingItem
                    title={'Калининградский областной музыкальный колледж им. С.В Рахманинова'}
                    link={'https://kaliningrad.ucheba.ru/uz/21480'}
                    score={'80 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Калининградский бизнес колледж'}
                    link={'http://student39.ru/'}
                    score={'79 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Колледж предпринимательства'}
                    link={'https://www.kolledge39.ru/'}
                    score={'76 баллов'}
                    color={'white'}
                />
                {/*---*/}
                <RatingItem
                    title={'Колледж Информационных Технологий и Строительства'}
                    link={'http://kitis.ru/'}
                    score={'72 балла'}
                    color={'white'}
                />
                <RatingItem
                    title={'Колледж Экономики и Права'}
                    link={'http://kep39.ru/'}
                    score={'70 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Профессиональное училище №5'}
                    link={'https://pu5.aln.eduru.ru/'}
                    score={'68 баллов'}
                    color={'white'}
                />  
                {/*---*/}
                <RatingItem
                    title={'Калининградский колледж управления'}
                    link={'https://kku39.ru/college'}
                    score={'66 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Колледж Строительства И Профессиональных Технологий'}
                    link={'https://ptpt39.ru/'}
                    score={'64 балла'}
                    color={'white'}
                />
                <RatingItem
                    title={'Колледж Мехатроники И Пищевой Индустрии'}
                    link={'http://www.proftop39.ru/'}
                    score={'62 балла'}
                    color={'white'}
                />
                {/*---*/}
                <RatingItem
                    title={'Колледж Калининградского филиала РУК'}
                    link={'https://kaliningrad.postupi.online/ssuz/kolledzh-kaliningradskogo-filiala-ruk/'}
                    score={'60 баллов'}
                    color={'white'}
                />
                <RatingItem
                    title={'Кениг-Колледж'}
                    link={'https://kaliningrad.postupi.online/ssuz/kolledzh-kie/'}
                    score={'58 баллов'}
                    color={'white'}
                />
                </div>
            </div>
    </div>
  )
}
