export default function ConcertDetails(props) {
    return <div>
        <p>City: {props.concert.city}</p>                                        
        <p>Date: {props.concert.date}</p>
        <p>Venue: {props.concert.venue}</p>
    </div>
}