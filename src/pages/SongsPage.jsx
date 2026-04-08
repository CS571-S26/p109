import '../App.css'
import { Card } from 'react-bootstrap'

export default function SongsPage() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h2>Songs</h2> 
        </Card.Body>
      </Card>
    </div>
  )
}
