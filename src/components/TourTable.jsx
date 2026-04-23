import { Container, Card, Table, Button } from "react-bootstrap";
import tourDates from '../data/tourDates.js';

export default function TourTable() {
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
                    {tourDates.map((concert) => (
                        <tr key={concert.id}>
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