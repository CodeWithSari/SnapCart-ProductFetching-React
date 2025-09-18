import React from 'react'

function Contact() {
  return (
    <div className="container py-5" style={{ backgroundColor: "#e6d2ecff" }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#6d1384ff" }}>Contact Us</h2>
          <p className="lead mb-5" style={{ color: "#cc43efff" }}>Have questions or feedback? We'd love to hear from you!</p>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "white" }}>
                <div className="mb-3" style={{ color: "#9439f0ff", fontSize: "2rem" }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h5 className="fw-bold">Address</h5>
                <p>123 Commerce Street<br />Shopping District, SC 12345</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "white" }}>
                <div className="mb-3" style={{ color: "#9439f0ff", fontSize: "2rem" }}>
                  <i className="fas fa-phone"></i>
                </div>
                <h5 className="fw-bold">Phone</h5>
                <p>+1 (555) 123-4567<br />Mon-Fri, 9am-5pm EST</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="p-4 rounded shadow-sm" style={{ backgroundColor: "white" }}>
                <div className="mb-3" style={{ color: "#9439f0ff", fontSize: "2rem" }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h5 className="fw-bold">Email</h5>
                <p>support@snapcart.com<br />info@snapcart.com</p>
              </div>
            </div>
          </div>
          
          <form className="mt-5">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control form-control-lg" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-lg px-5 py-3 fw-bold mt-3"
              style={{
                backgroundColor: "#9439f0ff",
                color: "#FFFFFF",
                borderRadius: "50px",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact