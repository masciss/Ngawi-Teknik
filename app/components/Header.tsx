'use client'
import Link from 'next/link';
import { useState } from 'react';
import '@/app/header.css'

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header id="header" className={`fixed-top d-flex align-items-center header-transparent`}>
  <div className="container-fluid">
    <div className="row justify-content-center align-items-center">
      <div className="col-xl-11 d-flex align-items-center justify-content-between">
        
        {/* <h1>
          <Link href="/" className="brand-logo-txt"><b>PT NGAWI TEHNIK INDONESIA</b></Link>
        </h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <Link href="/" className="logo"><img src="/assets/img/logo.png" alt="" className="img-fluid" /></Link> */}

        <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link href="#hero" className="nav-link scrollto active">Home</Link></li>
            <li><Link href="#about" className="nav-link scrollto">Profil</Link></li>
            {/* <li><Link href="#services" className="nav-link scrollto">Services</Link></li> */}
            {/* <li><Link href="#portfolio" className="nav-link scrollto">Portfolio</Link></li> */}
            {/* <li><Link href="#team" className="nav-link scrollto">Team</Link></li> */}
            <li className="dropdown">
              <Link href="#"><span>Produk Jasa</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                {/* <li className="dropdown"><Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-right"></i></Link>
                  <ul>
                    <li><Link href="#"><a>Deep Drop Down 1</a></Link></li>
                    <li><Link href="#"><a>Deep Drop Down 2</a></Link></li>
                    <li><Link href="#"><a>Deep Drop Down 3</a></Link></li>
                    <li><Link href="#"><a>Deep Drop Down 4</a></Link></li>
                    <li><Link href="#"><a>Deep Drop Down 5</a></Link></li>
                  </ul>
                </li> */}
                <li><Link href="#">Sipil & Konstruksi</Link></li>
                <li><Link href="#">Spesialis Fabrikasi</Link></li>
                <li><Link href="#">Spesialis Stainless Steel</Link></li>
                <li><Link href="#">CME & Erection</Link></li>
                <li><Link href="#">Eksterior & Interior</Link></li>
              </ul>
            </li>
            <li><Link href="/blog" className="nav-link">Artikel</Link></li>
            <li><Link href="#contact" className="nav-link scrollto">Hubungi Kami</Link></li>
          </ul>
          <i className={`bi bi-list mobile-nav-toggle ${isMobileNavOpen ? 'bi-x' : ''}`} onClick={toggleMobileNav}></i>
        </nav>
      </div>
    </div>
  </div>
</header>

  );
}
