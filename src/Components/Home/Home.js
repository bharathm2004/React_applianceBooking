import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='fbody'>
    <div className="home-body">
      <ul className="home-list" style= {{ fontFamily: 'century gothic' }}>
        <li className="home-li"><Link to="./LoginForm" className="home-hover">Log-in</Link></li>
        <li className="home-li"><Link to="./Register" className="home-hover">Sign-Up</Link></li>
        <li className="home-li"><Link to="./about" className="home-hover">About</Link></li>
        <li className="home-li"><Link to="./Help" className="home-hover">Help</Link></li>
        <li className="home-li"><Link to="./product" className="home-hover">Products</Link></li>
      </ul>
      <br></br><br></br><br></br>
      <h1 className="home-h1">Royal Appliances</h1>
      <article className="home-article" align="center" style={{ fontFamily: 'century gothic' }}>
        <h2 className="home-h2">Empower Your Home with Seamless Comfort: Book Your Appliances Online Today!</h2>
      </article>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
