import '../App.css';
import { Row, Col, Form, Container } from 'react-bootstrap';
import SongsTable from '../components/SongsTable';


export default function SongsPage() {
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div className="text-center">
        <h2>BAD BUNNY</h2>
        <h1>DeBÍ TiRAR MáS FOToS</h1>
        <h3>World Tour</h3>
      </div>

      <Col md={9} lg={8} xl={6}>
        <Row className='mt-3'> {/* TODO: fix width on small screen */}
          <Form.Label htmlFor='search'>Search</Form.Label>
          <Form.Control id='search'></Form.Control>
        </Row>

        <SongsTable />
      </Col>
    </div>
  )
}
