import { Container, Card, Table, Button } from "react-bootstrap";
import tourDates from '../data/tourDates.js';
import { useNavigate } from "react-router-dom";

export default function TourTable(props) {
    const navigate = useNavigate();

    const navigateToConcertPage = (concertDetails) => {
        navigate('../concert', {state: concertDetails});
    }

    return <Container className="mt-5">
        <Card >
            <Table striped>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>City</th>
                        <th>Venue</th>
                    </tr>
                </thead>

                <tbody>
                    {props.filteredDates.map((concert) => (
                        <tr key={concert.id} onClick={() => navigateToConcertPage(concert)}>
                            <td>{concert.date}</td>
                            <td>{concert.city}, {concert.country}</td>
                            <td>{concert.venue}</td>
                            <td><Button variant="primary" size="sm" href={concert.ticketLink} target="_blank" rel="noopener noreferrer">Buy Tickets</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    </Container>
}