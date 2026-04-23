import { Container, Card, Table } from "react-bootstrap";

export default function ConcertTable(props) {
    return <Container className="mt-5">
        <h5 className="text-center pb-2">See countdown for a different concert</h5>

        <Card >
            <Table striped>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>City</th>
                        <th>Venue</th>
                    </tr>
                </thead>

                {/* TODO: add click event on rows */}
                <tbody>
                    {props.tourDates.map((concert) => (
                        <tr key={concert.id}>
                            <td>{concert.date}</td>
                            <td>{concert.city}, {concert.country}</td>
                            <td>{concert.venue}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    </Container>
}