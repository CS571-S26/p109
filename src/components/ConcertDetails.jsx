export default function ConcertDetails(props) {
    return <div className="details-text">
        <p><span className="fw-bold">City:</span> {props.concert.city}</p>                                        
        <p><span className="fw-bold">Date:</span> {props.concert.date}</p>
        <p><span className="fw-bold">Venue:</span> {props.concert.venue}</p>
    </div>
}