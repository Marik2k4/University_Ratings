import './ruleItem.scss';

export default function RuleItem(props) {
  return (
    <div className='RuleItem'>
        <div className='Titles'>
            <div className='RuleItemTitle'>{props.MainTitle}</div>
            <div className='RuleItemUnderTitle'>{props.UnderTitle}</div>
        </div>
        <div className='RuleItemDesrc'>{props.Desrc}</div>
    </div>
  )
}
