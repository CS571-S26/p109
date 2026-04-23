import '../App.css'
import { Row, Col, Form, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
import ConcertTable from '../components/ConcertTable';
import CountdownTimer from '../components/CountdownTimer';
import tourDates from '../data/tourDates.js';
import ConcertDetails from '../components/ConcertDetails';

export default function ConcertPage() {
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div className="text-center">
        <h2>BAD BUNNY</h2>
        <h1>DeBÍ TiRAR MáS FOToS</h1>
        <h3>World Tour</h3>
      </div>


      <Col md={9} lg={8} xl={6}>
        <Row>
          {/* TODO: pass the concert date for a specific concert. */}
          <CountdownTimer targetDate={new Date("2026-05-22T22:00:00")}/> 
        </Row>

        {/* TODO: pass concert to ConcertDetails. */}
        <Row className='text-center mt-4'>
            <ConcertDetails />
        </Row>

        <Row className='mt-3'> {/* TODO: fix width on small screen */}
          <ConcertTable tourDates={tourDates}/>
        </Row>
      </Col>
    </div>
  )
}
