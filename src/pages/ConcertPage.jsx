import '../App.css'
import { Row, Col } from 'react-bootstrap';
import ConcertTable from '../components/ConcertTable';
import CountdownTimer from '../components/CountdownTimer';
import tourDates from '../data/tourDates.js';
import ConcertDetails from '../components/ConcertDetails';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header.jsx';

export default function ConcertPage() {
  const location = useLocation();
  const concert = location.state ?? tourDates[0];
  const [selectedConcert, setSelectedConcert] = useState(concert);

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <Header />

      <Col md={9} lg={8} xl={6} className='counter-details'>
        <Row>
          <CountdownTimer targetDate={new Date(selectedConcert.date)}/> 
        </Row>

        <Row className='text-center mt-4'>
            <ConcertDetails concert={selectedConcert}/>
        </Row>

        <Row className='mt-3'>
          <ConcertTable tourDates={tourDates} selectedConcert={selectedConcert} onSelectConcert={setSelectedConcert}/>
        </Row>
      </Col>
    </div>
  )
}
