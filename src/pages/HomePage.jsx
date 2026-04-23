import { useState } from 'react'
import { Col } from 'react-bootstrap';
import '../App.css';
import TourSearchFilter from '../components/TourSearchFilter';
import TourTable from '../components/TourTable';
import tourDates from '../data/tourDates';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);

  // Filter tour dates to only display what matches the search bar or filters.
  const filteredDates = tourDates.filter((concert) => {
    const searchItems = search.toLowerCase();
    const matchesSearch = (
      concert.date.toLowerCase().includes(searchItems) ||
      concert.city.toLowerCase().includes(searchItems) ||
      concert.venue.toLowerCase().includes(searchItems)
    );

    const matchesSelectedDate = selectedDate ? concert.date === selectedDate : true;
    const matchesSelectedCity = selectedCity ? concert.city === selectedCity : true;
    const matchesSelectedVenue = selectedVenue ? concert.venue === selectedVenue : true;

    return matchesSearch && matchesSelectedDate && matchesSelectedCity && matchesSelectedVenue;
  });

  return (
    <div className="w-100 d-flex flex-column align-items-center">
        <div className="text-center">
          <h2>BAD BUNNY</h2>
          <h1>DeBÍ TiRAR MáS FOToS</h1>
          <h3>World Tour</h3>
        </div>
        
      <Col lg={8} xl={6}>
          <TourSearchFilter search={search} setSearch={setSearch} selectedDate={selectedDate} setSelectedDate={setSelectedDate} 
            selectedCity={selectedCity} setSelectedCity={setSelectedCity} selectedVenue={selectedVenue} setSelectedVenue={setSelectedVenue}/>
          <TourTable filteredDates={filteredDates}/>
      </Col>
    </div>
  )
}
