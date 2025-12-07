import React from "react";
import "./TourSection.css";
import Japan from '../../../assets/famous-palce.jpg'
export default function TourSection() {
  return (
    <section className="tour-section">
      <h2 className="title">ABOUT THE TOUR</h2>

      <div className="content">
        {/* LEFT SIDE TEXT */}
         <div className="left-text">
           <p className="Topa-tag">
             We’ve planned a simple and convenient 10-day itinerary for your trip
             to Japan. You’ll visit three cities:
              <span className="highlight"> Osaka, Kyoto, and Tokyo</span>. 
           </p>

           <p className="Topa-tag">
             No need to worry about routes, schedules, or finding places —
             everything is already organized. We'll show you where to go, what to
             see, and where to eat, so you can simply enjoy the journey.
           </p> 
        </div> 

        {/* RIGHT SIDE TIMELINE */}
         <div className="timeline">
          <div className="item">
            <span className="day">Days 1–3</span>
            <h3>Osaka</h3>
            <img
              src={Japan}
              alt="Osaka"
              className="city-img"
            />
          </div> 

           <div className="item">
            <span className="day">Days 4–6</span>
            <h3>Kyoto</h3>
            <img
              src={Japan}
              alt="Kyoto"
              className="city-img"
            />
          </div> 

          <div className="item">
            <span className="day">Days 7–10</span>
            <h3>Tokyo</h3>
            <img
              src={Japan}
              alt="Tokyo"
              className="city-img"
            />
          </div>
        </div> 
      </div>
    </section>
  );
}
