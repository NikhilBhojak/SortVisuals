import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Frontend Developer</h3>
      </div>
      <div className="header-logo">Sort<span>Visuals</span></div>
   </div>
  )
}

export default Header;