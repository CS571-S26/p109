import '../App.css'
import { Row, Col } from 'react-bootstrap';
import ConcertTable from '../components/ConcertTable';
import CountdownTimer from '../components/CountdownTimer';
import tourDates from '../data/tourDates.js';
import ConcertDetails from '../components/ConcertDetails';
import { useLocation } from 'react-router-dom';

export default function ConcertPage() {
  const location = useLocation();
  const concert = location.state;

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div className="text-center">
        <h2>BAD BUNNY</h2>
        <h1>DeBÍ TiRAR MáS FOToS</h1>
        <h3>World Tour</h3>
      </div>


      <Col md={9} lg={8} xl={6}>
        <Row>
          <CountdownTimer targetDate={new Date(concert.date)}/> 
        </Row>

        <Row className='text-center mt-4'>
            <ConcertDetails concert={concert}/>
        </Row>

        <Row className='mt-3'> {/* TODO: fix width on small screen */}
          <ConcertTable tourDates={tourDates}/>
        </Row>
      </Col>
    </div>
  )
}
