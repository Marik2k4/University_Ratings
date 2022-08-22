import './reviews.scss';
import ReviewItem from '../reviews/reviewItem/reviewItem';

export default function Reviews() {
  return (
    <div className='reviews'>
      <p>Отзывы</p> 
      
       <div className='reviewsItems'>
        <ReviewItem
          text={'Отличный портал - очень удобно переключаться между сайтами и выбирать ВУЗ для поступления.'} 
          author={'Иван Иванов'}
        />
        <ReviewItem
          text={'Не только помогает определиться с выбором, но и заставляет учебные заведения поддерживать репутацию и делать обучение качественнее.'}
          author={'Иван Иванов'}
        />
        <ReviewItem
          text={'Очень грамотно созданы критерии оценивания - всё честно'}
          author={'Иван Иванов'}
        />
        <ReviewItem
          text={'Отлично'}
          author={'Иван Иванов'}
        />
        <ReviewItem
          text={'Хороший сайт.'}
          author={'Иван Иванов'}
        />
      </div>
        
    </div>
  )
}
