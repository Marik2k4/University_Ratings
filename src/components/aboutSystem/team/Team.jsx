import './team.scss';
import team from '../../../img/team.jpg'

export default function Team() {
  return (
    <div className='Team'>
      <span>О коллективе</span>
      <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque illum quis iste necessitatibus tenetur minus assumenda, tempore alias? Itaque et aut repudiandae adipisci vel nostrum autem facere earum, facilis blanditiis.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque illum quis iste necessitatibus tenetur minus assumenda, tempore alias? Itaque et aut repudiandae adipisci vel nostrum autem facere earum, facilis blanditiis.
      </p>
      <img src={team} height="auto" width="940px"></img>
    </div>
  )
}
