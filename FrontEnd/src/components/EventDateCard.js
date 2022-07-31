import "../styles/eventDateCard.scss";

// To display only 3 letters regardless of the month
function display(date) {
  let result = new Date(date.replace('T', ' ')).toLocaleString('fr-fr', { month: 'short' }).toUpperCase().replace('.', ''); 
  if (result.length > 3) {
    return result.substring(0, result.length - 1);
  }
  return result;
}

function EventDateCard({ start }) {
  return(
    <section className='event-date-card'>
      <div className='event-date-card__day'>{new Date(start.replace('T', ' ')).getUTCDay() + 1}</div>
      <div className='event-date-card__month'>
        {
          display(start)
        }
      </div>
    </section>
  )
}; 

export default EventDateCard;