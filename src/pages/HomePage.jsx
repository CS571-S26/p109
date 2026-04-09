import { useState } from 'react'
import { Col } from 'react-bootstrap';
import '../App.css'
import TourSearchFilter from '../components/TourSearchFilter'
import TourTable from '../components/TourTable'

export default function HomePage() {

  return (
    <div className="w-100 d-flex flex-column align-items-center">
        <div className="text-center">
          <h2>BAD BUNNY</h2>
          <h1>DeBÍ TiRAR MáS FOToS</h1>
          <h3>World Tour</h3>
        </div>
        
      <Col lg={8} xl={6}>
          <TourSearchFilter />
          <TourTable />
      </Col>
    </div>
  )
}
