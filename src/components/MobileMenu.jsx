import { Link } from "react-router-dom";

const MobileMenu = ({ open, onClose }) => {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>✕</button>

      <ul>
        <li><Link to="/" onClick={onClose}>Home</Link></li>
        <li><Link to="/about" onClick={onClose}>About</Link></li>
        <li><Link to="/services" onClick={onClose}>Services</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
