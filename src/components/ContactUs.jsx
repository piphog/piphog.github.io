const ContactUs = () => {
  return (
    <div className="contact-section container mt-5 pt-5" id="contact">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-photo/register-enquiry-online-web-page-concept_53876-124774.jpg?t=st=1727520621~exp=1727524221~hmac=0a180d6817830052c6386ff316e02f473caf0716a3c634434a500efd54351422&w=740" // Replace with your contact image
            alt="Contact Us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-lg-6">
          <h2 className="section-title display-5 fw-bold txt-dark mb-4 txt-white">
            Get in Touch
          </h2>
          <p className="txt-white mb-4">
            I would love to hear from you! Please fill out the form below and I
            will get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label txt-white">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label txt-white">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label txt-white">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg mt-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
