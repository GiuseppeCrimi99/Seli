
import "./NavBar.css";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'
import { faShoppingCart, faGlobe, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar: React.FC = () => {
  const preHeaderRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null); 
  const [preHeaderHeight, setPreHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (preHeaderRef.current && navbarRef.current) {
      setPreHeaderHeight(preHeaderRef.current.offsetHeight);

      const handleScroll = () => {
        if (preHeaderRef.current && navbarRef.current) {
          if (window.scrollY > 0) {
            preHeaderRef.current.classList.add('hide');
            navbarRef.current.style.top = '0';
          } else {
            preHeaderRef.current.classList.remove('hide');
            navbarRef.current.style.top = preHeaderRef.current.offsetHeight + 'px';
          }
        }
      };
      

      window.addEventListener('scroll', handleScroll);

      return () => {
        // Cleanup event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <>
      <div ref={preHeaderRef} className='preHeader'>
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }} />
        <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} />
        <FontAwesomeIcon icon={faBook} style={{ color: "white" }} />
      </div>
      
      <header ref={navbarRef} className="header">
        <Link to="/" className="logo">
          <img src="" alt="Logo" />
        </Link>
        <input className="menu-btn" id="menu-btn" type="checkbox" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
export default NavBar;