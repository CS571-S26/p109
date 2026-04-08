import { Link, Outlet } from 'react-router-dom'
import '../App.css'

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
    </div>
  )
}
