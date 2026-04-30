import { Container, Card, Table } from "react-bootstrap";

export default function ConcertTable(props) {
    return <Container className="mt-5">
        <h5 className="text-center pb-2 table-title">See countdown for a different concert</h5>

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
                    {props.tourDates.map((concert) => (
                        <tr key={concert.id} onClick={() => {
                                props.onSelectConcert(concert);
                                window.scrollTo({top: 0});
                            }}
                            style={{cursor: 'pointer'}}
                            onKeyDown={(e) => e.key === 'Enter' && props.onSelectConcert(concert)}
                            tabIndex={0}
                            role="Button"
                        >
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