'use client'
import React, {useEffect} from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/hero.css'
import '@/app/call.css'
import '@/app/services.css'
import '@/app/testimonial.css'
import '@/app/portofolio.css'
import '@/app/about.css'


const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

          <ol id="hero-carousel-indicators" className="carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{ backgroundImage: 'url(/assets/img/hero-carousel/beko.jpg)' }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Pusat Layanan General kontraktor</h2>
                  <h4><b>SEJAK TAHUN 2003</b></h4>
                  <p className="animate__animated animate__fadeInUp">
                    Kami menyediakan jasa layanan konstruksi bangunan.
                    Temukan disini semua kebutuhan kontruksi bangunan Anda. <br />
                    Semua penawaran dapat dinegosiasikan.
                  </p>
                  <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">
                    Mulai
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item" style={{ backgroundImage: 'url(/assets/img/hero-carousel/stainless2.jpg)' }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Pusat Layanan <br /> Spesialis Stainless Steel</h2>
                  <h4><b>SEJAK TAHUN 2003</b></h4>
                  <p className="animate__animated animate__fadeInUp">
                    Kami menyediakan jasa Spesialis Stainless Steel, Temukan disini semua kebutuhan Hunian Anda.<br />
                    Semua penawaran dapat dinegosiasikan.
                  </p>
                  <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">
                    Mulai
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item" style={{ backgroundImage: 'url(/assets/img/hero-carousel/rumah.jpg)' }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Pusat Layanan Jasa <br /> Eksterior & Interior</h2>
                  <h4><b>SEJAK TAHUN 2003</b></h4>
                  <p className="animate__animated animate__fadeInUp">
                    Kami menyediakan jasa dekorasi Eksterior dan Interior, Temukan disini semua kebutuhan Hunian Anda.<br />
                    Semua penawaran dapat dinegosiasikan.
                  </p>
                  <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">
                    Mulai
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

const FeaturedServices = () => {
  return (
    <section id="featured-services">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 box">
            <i className="bi bi-briefcase"></i>
            <h4 className="title"><a href="#">General Kontraktor</a></h4>
            <p className="description">MEP (Mekanikal Elektrikal Plumbing), Konstruksi Baja Berat, Atap Baja Ringan.</p>
          </div>

          <div className="col-lg-3 box box-bg">
            <i className="bi bi-card-checklist"></i>
            <h4 className="title"><a href="#">Spesialis Fabriksi</a></h4>
            <p className="description">Solusi tepat bagi anda yang membutuhkan jasa fabrikasi baja berat untuk pembuatan struktur bangunan.</p>
          </div>

          <div className="col-lg-3 box">
            <i className="bi bi-binoculars"></i>
            <h4 className="title"><a href="#">Spesialist Stainless Steel</a></h4>
            <p className="description">Solusi tepat bagi anda yang membutuhkan segala macam keperluan berbahan dasar Stainless Steel.</p>
          </div>

          <div className="col-lg-3 box box-bg">
            <i className="bi bi-card-checklist"></i>
            <h4 className="title"><a href="#">Eksterior & Interior</a></h4>
            <p className="description">Solusi tepat bagi anda yang membutuhkan layanan jasa pembuatan & dekorasi Eksterior & Interior hunian Anda.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3>About Us</h3>
          <p>PT. Ngawi Tehnik Indonesia adalah perusahaan “General Contractor, Maintenance & Supplier”, didirikan sejak tahun 2003, yang berlokasi di Ujung Harapan – Bekasi.</p>
        </header>

        <div className="row about-cols">

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="about-col">
              <div className="img">
                <img src="/assets/img/about-mission.jpg" alt="" className="img-fluid" />
                <div className="icon"><i className="bi bi-bar-chart"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Mission</a></h2>
              <p>
                PT. Ngawi Tehnik Indonesia menerapkan sistem pemberdayaan lima pilar usaha konstruksi diantaranya pemasaran, operasional, keuangan, sumber daya manusia dan informasi.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="about-col">
              <div className="img">
                <img src="/assets/img/about-plan.jpg" alt="" className="img-fluid" />
                <div className="icon"><i className="bi bi-brightness-high"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Plan</a></h2>
              <p>
                PT. Ngawi Tehnik Indonesia, berkomitmen memberikan hasil yang terbaik & tepat waktu dengan biaya yang telah disepakati untuk skala pribadi maupun perusahaan.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="about-col">
              <div className="img">
                <img src="/assets/img/about-vision.jpg" alt="" className="img-fluid" />
                <div className="icon"><i className="bi bi-calendar4-week"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Vision</a></h2>
              <p>
                PT. Ngawi Tehnik Indonesia menjadi perusahaan dalam negeri yang terdepan dengan wawasan dan mengarah kepada standar di industri jasa konstruksi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services">
      <div className="container" data-aos="fade-up">

        <header className="section-header wow fadeInUp">
          <h3>Melayani</h3>
          <p>Kami merupakan General Kontraktor terpercaya yang memberikan jasa untuk melayani semua kebutuhan
            Konstruksi, Fabrikasi, Welding Specialist, Stainless Steel Specialist, Support Man Power.</p>
        </header>

        <div className="row">

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bi bi-briefcase"></i></div>
            <h4 className="title"><a href="#">Konstruksi Baja, Sipil & Arsitektur</a></h4>
            <p className="description">Kami adalah Ahlinya rancang bangun dengan struktur baja Mulai dari Gudang,
              Gedung Apartemen, Hotel, Ruko, Pasar, Restoran, Rumah tempat tinggal, Gerbang, Canopy, Pagar, dan lainnya yang berhubungan dengan Material Baja konvensional / Black steel.</p>
          </div>

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bi bi-bar-chart"></i></div>
            <h4 className="title"><a href="#">Kanopi, Railing, Tralis Jendela</a></h4>
            <p className="description">Kami siap memenuhi kebutuhan Kanopi, Railing, dan Tralis rumah anda agar mempercantik rumah anda.</p>
          </div>

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="#">Pintu Ornamen Tempa</a></h4>
            <p className="description">Kami siap memenuhi kebutuhan pagar model ornamen untuk rumah anda agar mempercantik rumah anda.</p>
          </div>

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="#">Folding Gate, Pintu Lipat</a></h4>
            <p className="description">Kami siap memenuhi kebutuhan ruko anda dengan pintu harmonika agar mempercantik ruko anda.</p>
          </div>

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="#">Pagar Minimalis</a></h4>
            <p className="description">Kami siap memenuhi kebutuhan pagar minimalis rumah anda agar mempercantik rumah anda.</p>
          </div>

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="#">Welding Specialist</a></h4>
            <p className="description">Spesialis di bidang welding dengan tenaga bersertifikasi sesuai dengan kebutuhan anda.</p>
          </div>

          <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="#">Stainless Steel</a></h4>
            <p className="description">Kami siap memenuhi kebutuhan pagar Stainless rumah anda agar mempercantik rumah anda.</p>
          </div>

        </div>

      </div>
    </section>
  );
};


const CallToAction = () => {
  return (
    <section id="call-to-action">
      <div className="container text-center" data-aos="zoom-in">
        <h3>Hubungi Kami</h3>
        <p>Konsultasikan segala kebutuhan anda kepada kami</p>
        <a
          className="cta-btn"
          href="https://api.whatsapp.com/send?phone=6289630401470&text=Hai%20admin%20saya%20ingin%20bertanya%20tentang%20jasa%20konstruksi%20bangunan%20pada%20PT%20NGAWI%20TEHNIK%20INDONESIA.."
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i> Chat WA Disini
        </a>
      </div>
    </section>
  );
};



const Portfolio = () => {
  return (
    <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Konstruksi Gudang</li>
              <li data-filter=".filter-card">Pintu Minimalist</li>
              <li data-filter=".filter-web">Sipil & Arsitektur</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/app1.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 1</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/web3.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/web3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 3</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/app2.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/app2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 2</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/card2.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/card2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 2</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/web2.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/web2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 2</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/app3.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/app3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">App 3</a></h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/card1.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/card1.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 1"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 1</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/card3.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/card3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Card 3</a></h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <figure>
                <img src="assets/img/portfolio/web1.jpg" className="img-fluid" alt="" />
                <a href="assets/img/portfolio/web1.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 1"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link"></i></a>
              </figure>
              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Web 1</a></h4>
                <p>Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



SwiperCore.use([Pagination, Autoplay]);

const Clients = () => {
  const clients = [
    "assets/img/clients/client-1.png",
    "assets/img/clients/client-2.png",
    "assets/img/clients/client-3.png",
    "assets/img/clients/client-4.png",
    "assets/img/clients/client-5.png",
    "assets/img/clients/client-6.png",
    "assets/img/clients/client-7.png",
    "assets/img/clients/client-8.png",
  ];

  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Clients</h3>
        </header>

        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="clients-slider"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img src={client} className="img-fluid" alt={`Client ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};


const Testimonials = () => {
  useEffect(() => {
    // Additional Swiper configurations or styles
  }, []);

  return (
    <section id="testimonials" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <Swiper
          pagination={{ clickable: true }}
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <img src="/assets/img/testimonial-1.jpg" className="testimonial-img" alt="" />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <img src="/assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img src="/assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="testimonial-item">
              <img src="/assets/img/testimonial-2.jpg" className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <img src="/assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <img src="/assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="testimonial-item">
              <img src="/assets/img/testimonial-3.jpg" className="testimonial-img" alt="" />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
                <img src="/assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <img src="/assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="testimonial-item">
              <img src="/assets/img/testimonial-4.jpg" className="testimonial-img" alt="" />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
                <img src="/assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <img src="/assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="testimonial-item">
              <img src="/assets/img/testimonial-5.jpg" className="testimonial-img" alt="" />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <img src="/assets/img/quote-sign-left.png" className="quote-sign-left" alt="" />
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <img src="/assets/img/quote-sign-right.png" className="quote-sign-right" alt="" />
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
