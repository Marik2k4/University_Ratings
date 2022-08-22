import './managementItem.scss';

export default function ManagmentItem(props) {
  return (
    <div className='ManagementItem'>
      <div className='Titles'>
          <div className='ManagementItemTitle'>{props.MainTitle}</div>
          <div className='ManagementItemUnderTitle'>{props.UnderTitle}</div>
      </div>
      <div className='ManagementItemDesrc'>{props.Desrc}</div>
    </div>
  )
}
