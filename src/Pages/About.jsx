import React from 'react'

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-4" style={{ color: "#58056dff" }}>About SnapCart</h2>
          <p className="lead mb-4 justify">
            SnapCart is revolutionizing the way people shop online. Founded in 2020, our mission is to provide
            a seamless shopping experience with the best products at unbeatable prices.
          </p>
          <p className="mb-4">
            We carefully curate our product selection to ensure quality and value for our customers. Our team
            of experts works tirelessly to negotiate the best deals with suppliers and pass the savings on to you.
          </p>
          <p className="mb-0">
            With a focus on customer satisfaction, innovation, and social responsibility, SnapCart is more than
            just an e-commerce platform - we're a community of smart shoppers.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20241102/pngtree-e-commerce-in-neon-image_16486041.jpg"
            alt="About SnapCart"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  )
}

export default About