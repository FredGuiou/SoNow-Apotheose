import "../styles/dateCard.scss";

// To display only 3 letters regardless of the month
function display(date) {
  let result = new Date(date.replace('T', ' ')).toLocaleString('fr-fr', { month: 'short' }).toUpperCase().replace('.', ''); 
  if (result.length > 3) {
    return result.substring(0, result.length - 1);
  }
  return result;
}

function DateCard({ start }) {
  return(
    <section className='date-card'>
      <div className='date-card__day'>{new Date(start.replace('T', ' ')).getUTCDay() + 1}</div>
      <div className='date-card__month'>
        {
          display(start)
        }
      </div>
    </section>
  )
}; 

export default DateCard;