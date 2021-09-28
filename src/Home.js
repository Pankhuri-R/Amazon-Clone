import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="The lean startup: A book to inspire you for your future ideas"
            price={29.3}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="DVD Player for TV, HD DVD Player with HDMI & AV Cable for Projector "
            price={35.99}
            image="https://m.media-amazon.com/images/I/61Mie8CpqsL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Black Face Mask 100pcs Disposable Masks Breathable 3 Layer"
            price={16}
            image="https://images-na.ssl-images-amazon.com/images/I/51axS4O5BML.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="Seagate Portable 2TB External Hard Drive Portable HDD"
            price={200}
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
            rating={4}
          />
          <Product
            id={5}
            title="Apple AirPods with Charging Case
          by Apple"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/31jBnwWr91L.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Sony X91J 85 Inch TV: Full Array LED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility KD85X91J- 2021 Model, Black"
            price={2798}
            image="https://m.media-amazon.com/images/I/91Erri4enJL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
