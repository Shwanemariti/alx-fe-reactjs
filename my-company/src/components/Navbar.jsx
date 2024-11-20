import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
  };

  const linkStyle = {
    margin: '0 15px',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
