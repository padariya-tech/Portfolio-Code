import React, { useRef } from 'react';
import './Contact.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = formRef.current.from_name.value;
    const email = formRef.current.from_email.value;
    const message = formRef.current.message.value;
  
    if (!name || !email || !message) {
      // Display toast for empty fields
      toast.error('All fields are required.');
      return;
    }
    emailjs
      .sendForm('service_0bwdzeg', 'template_d3ul727', formRef.current, '49w0Wn3kaLpPiENyN')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message.');
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with
                      <a
                        href="https://www.linkedin.com/in/nij-padariya-886ab01b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin color="blue" className="ms-2" size={30} />
                      </a>
                      <a
                        href="https://github.com/padariya-tech"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" className="ms-2" size={30} />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />

                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form ref={formRef}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Enter Your Message"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={sendEmail}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
