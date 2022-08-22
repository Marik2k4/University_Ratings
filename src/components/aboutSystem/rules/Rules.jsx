import './rules.scss';
import RuleItem from './RuleItem/RuleItem';

export default function Rules() {
  return (
    <div className='Rules'>
      <div className='RulTitle'>Правила оценивания</div>
      <div className='RulDesrc'>
        <RuleItem
          MainTitle={'Заголовок элемента списка'}
          UnderTitle={'ПОДЗАГОЛОВОК ЭЛЕМЕНТА'}
          Desrc={' Это описание элемента. Здесь можно рассказать о товарах, услугах и сотрудниках компании, а также разместить информацию о других темах, к которым необходимо привлечь внимание посетителей'}
        />
        <RuleItem
          MainTitle={'Заголовок элемента списка'}
          UnderTitle={'ПОДЗАГОЛОВОК ЭЛЕМЕНТА'}
          Desrc={'Это описание элемента. Здесь можно рассказать о товарах, услугах и сотрудниках компании, а также разместить информацию о других темах, к которым необходимо привлечь внимание посетителей'}
        />
        <RuleItem
          MainTitle={'Заголовок элемента списка'}
          UnderTitle={'ПОДЗАГОЛОВОК ЭЛЕМЕНТА'}
          Desrc={' Это описание элемента. Здесь можно рассказать о товарах, услугах и сотрудниках компании, а также разместить информацию о других темах, к которым необходимо привлечь внимание посетителей'}
        />
        <RuleItem/>
        <RuleItem/>
      </div>
    </div>
  )
}
