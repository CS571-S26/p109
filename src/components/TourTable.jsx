import { Container, Card, Table, Button } from "react-bootstrap";

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
                    {/* TODO: dynamically add the tour dates and details */}
                    <tr> {/* TODO add a key for each individual row */}
                        <td>May 22, 2026</td>
                        <td>Barcelona, Spain</td>
                        <td>Estadi Olimpic Lluis Companys</td>
                        <td><Button variant="primary" size="sm">Buy Tickets</Button></td>
                    </tr>
                    <tr> {/* TODO add a key for each individual row */}
                        <td>May 23, 2026</td>
                        <td>Barcelona, Spain</td>
                        <td>Estadi Olimpic Lluis Companys</td>
                        <td><Button variant="primary" size="sm">Buy Tickets</Button></td>
                    </tr>
                    <tr> {/* TODO add a key for each individual row */}
                        <td>May 26, 2026</td>
                        <td>Lisbon, Portugal</td>
                        <td>Estadio Da Luz</td>
                        <td><Button variant="primary" size="sm">Buy Tickets</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    </Container>
}