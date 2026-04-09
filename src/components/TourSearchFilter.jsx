import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';

export default function TourSearchFilter() {
    return <Container className="mt-3">
        <Row>
            <Col>
                <Form.Label htmlFor='search'>Search</Form.Label>
                <Form.Control id='search'></Form.Control>
            </Col>
        </Row>
        
        <Row className="mt-3">
            <Col>
                <Dropdown>
                    <Dropdown.Toggle>Date</Dropdown.Toggle>

                    {/* TODO: add dates dynamically */}
                    <Dropdown.Menu>
                        <Dropdown.Item>May 22, 2026</Dropdown.Item>
                        <Dropdown.Item>May 23, 2026</Dropdown.Item>
                        <Dropdown.Item>May 26, 2026</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>

            <Col>
                <Dropdown>
                    <Dropdown.Toggle>City</Dropdown.Toggle>

                    {/* TODO: add cities dynamically */}
                    <Dropdown.Menu>
                        <Dropdown.Item>Barcelona, Spain</Dropdown.Item>
                        <Dropdown.Item>Barcelona, Spain</Dropdown.Item>
                        <Dropdown.Item>Lisbon, Portugal</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col>
                <Dropdown>
                    <Dropdown.Toggle>Venue</Dropdown.Toggle>

                    {/* TODO: add cities dynamically */}
                    <Dropdown.Menu>
                        <Dropdown.Item>Estadi Olimpic Lluis Companys</Dropdown.Item>
                        <Dropdown.Item>Estadi Olimpic Lluis Companys</Dropdown.Item>
                        <Dropdown.Item>Estadio Da Luz</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    </Container>
}