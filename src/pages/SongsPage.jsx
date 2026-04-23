import '../App.css';
import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import SongsTable from '../components/SongsTable';
import tracklist from '../data/tracklist.js';

export default function SongsPage() {
  const [search, setSearch] = useState('');

  // Filter by song title or artist(s).
  const filteredTracklist = tracklist.filter((song) => {
    const searchTerms = search.toLowerCase();
    return (
      song.title.toLowerCase().includes(searchTerms) ||
      song.artists.some((artist) => artist.toLowerCase().includes(searchTerms))
    )
  });

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div className="text-center">
        <h2>BAD BUNNY</h2>
        <h1>DeBÍ TiRAR MáS FOToS</h1>
        <h3>World Tour</h3>
      </div>

      <Col md={9} lg={8} xl={6}>
        <Row className='mt-3'> {/* TODO: fix width on small screen, form should be completeable by keyboard (search on enter?) */}
          <Form.Label htmlFor='search'>Search songs by title or artist(s)</Form.Label>
          <Form.Control id='search' value={search} onChange={(event) => setSearch(event.target.value)}></Form.Control>
        </Row>

        <SongsTable tracklist={filteredTracklist}/>
      </Col>
    </div>
  )
}
