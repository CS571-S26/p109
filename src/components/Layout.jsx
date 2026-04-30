import { Link, Outlet } from 'react-router-dom'
import '../App.css'
import { Image } from "react-bootstrap";
import frog from "../assets/frog-sticker.png"

export default function Layout() {
  return (
    <div>
      <nav className="m-3">
        <Link to="/" className="me-3">Home</Link>
        <Link to="/songs/" className="me-3">Songs</Link>
        <Link to="/concert/" className="me-3">Concert</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <Image className='mx-auto d-block' src={frog} height={200} width={200} alt="Sticker of frog posing with a coffee mug"></Image>
    </div>
  )
}
