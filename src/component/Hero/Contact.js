import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-main">
      <section class="text-#ffffff body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font my-class">
                Our Contact Information
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed my-class-two">
              Location: Chawkbazar, Chittagong, Bangladesh 22°21′10.73″N
              91°50′12.68″E
              <br />
              Campus : Urban, 20 acres (8.1 ha)
              <br />
              College Website: <a target="blank"  href="www.ctgcollege.gov.bd"> www.ctgcollege.gov.bd </a>
            </p>
          </div>
        </div>
      </section>

      <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0174043198704!2d91.83428287417117!3d22.352971679648785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2766a8247ce5%3A0xe89af28ebcae8e8!2sChittagong%20College!5e0!3m2!1sen!2sbd!4v1694534031274!5m2!1sen!2sbd"
        title="map"
        className="map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="seminar-man-info">
        <h1>Seminar Assistant Info</h1>
        <label>Name</label>
        <br></br>
        <input type="text" value="First Name" />
        <p></p>
        <label>Email</label>
        <br></br>
        <input className="seminar-email" type="text" value="example@gmail.com" />
        <p></p>
        <label>Phone</label>
        <br></br>
        <input type="text" value="123-456-7890" />
      </div>
      </div>
    </div>
  );
}
