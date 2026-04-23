import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import tourDates from '../data/tourDates.js';

export default function TourSearchFilter(props) {
    const noDuplicatesInConcerts = tourDates.reduce((prev, current) => {
        const cityAlreadyExists = prev.find(item => item.city === current.city);

        if (!cityAlreadyExists) {
            prev.push(current);
        }
        return prev;
    }, []);

    return <Container className="mt-3">
        <Row>
            <Col>
                <Form.Label htmlFor='search'></Form.Label>
                <Form.Control id='search' value={props.search} onChange={(event) => props.setSearch(event.target.value)} placeholder='Search by date, city, or venue'></Form.Control>
            </Col>
        </Row>
        
        <Row className="mt-3">
            <Col>
                <Dropdown>
                    <Dropdown.Toggle>{props.selectedDate || 'Date'}</Dropdown.Toggle>
                    <Dropdown.Menu style={{maxHeight: '432px', overflowY: 'auto'}}>
                        <Dropdown.Item onClick={() => props.setSelectedDate(null)}>All Dates</Dropdown.Item>
                        {tourDates.map((concert) => (
                            <Dropdown.Item key={concert.date} onClick={() => props.setSelectedDate(concert.date)}>{concert.date}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                </Col>

            <Col>
                <Dropdown>
                    <Dropdown.Toggle>{props.selectedCity || 'City'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.setSelectedCity(null)}>All Cities</Dropdown.Item>
                        {noDuplicatesInConcerts.map((city) => (
                            <Dropdown.Item key={city.city} onClick={() => props.setSelectedCity(city.city)}>{city.city}, {city.country}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col>
                <Dropdown>
                    <Dropdown.Toggle>{props.selectedVenue || 'Venue'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.setSelectedVenue(null)}>All Venues</Dropdown.Item>
                        {noDuplicatesInConcerts.map((city) => (
                            <Dropdown.Item key={city.venue} onClick={() => props.setSelectedVenue(city.venue)}>{city.venue}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    </Container>
}