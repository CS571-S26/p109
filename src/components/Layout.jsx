import { Link, Outlet } from 'react-router-dom'
import '../App.css'
import { Button } from "react-bootstrap";
import { BsInstagram, BsSpotify, BsAppleMusic, BsYoutube } from 'react-icons/bs';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <nav className="m-3 d-flex justify-content-between align-items-center">
        <div className='d-flex'>
          <Link to="/" className="me-3">Home</Link>
          <Link to="/songs/" className="me-3">Songs</Link>
          <Link to="/concert/" className="me-3">Concert</Link>
        </div>

        <div className='d-flex'>
          <Button variant="link" href='https://www.instagram.com/badbunnypr/?hl=en' target="_blank" rel="noopener noreferrer">
              <BsInstagram size={20}></BsInstagram>
          </Button>
          <Button variant="link" href='https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X' target="_blank" rel="noopener noreferrer">
              <BsSpotify size={20}></BsSpotify>
          </Button>
          <Button variant="link" href='https://music.apple.com/us/artist/bad-bunny/1126808565' target="_blank" rel="noopener noreferrer">
              <BsAppleMusic size={20}></BsAppleMusic>
          </Button>
          <Button variant="link" href='https://www.youtube.com/@BadBunnyPR' target="_blank" rel="noopener noreferrer">
              <BsYoutube size={20}></BsYoutube>
          </Button>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
