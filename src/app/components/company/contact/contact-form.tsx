import React from "react";
import ContactUs from "../../Contactus/page";

export default function ContactForm() {
  return (
    <>
      <ContactUs />
      <div className="w-full h-96 overflow-hidden shadow-lg my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4272306968446!2d75.73609587534567!3d26.88993306106924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49f94e7afe9%3A0x3dd67d4a63c9e062!2sCamlenio%20Software%20Private%20Limited.!5e0!3m2!1sen!2sin!4v1757502934027!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
