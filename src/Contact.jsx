import React, { useRef} from "react";
import "./styles/Contact.css";
import emailjs from "emailjs-com";
import resumeFile from "./assets/resume.pdf"; // import your resume
     

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ew438r4",   // Your Service ID
      "template_un908g8",  // Your Template ID
      form.current,
      "fyK5HoyJ04kfUbzL4npm"   // Your Public Key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h4>GET IN TOUCH</h4>
      <h2>Let’s build something together</h2>

       <p className="intro">
        I’m currently looking for new opportunities and my inbox is always open.
        Whether you have a question, a project idea, or just want to say Hi, I’ll
        try my best to get back to you!
      </p>

       <div className="contact-info">
        <p>📧 saipraba28@gmail.com</p>
        <p>📞 +91 7200243474</p>
        <p>📍 Chennai, India</p>
      </div>

      <div className="resume-links">
        <h3>My Resume</h3>
        <p>A complete overview of my experience and skills</p>
        
        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
        <a href={resumeFile} download="resume.pdf" className="btn">Download Resume</a>
        
      </div>


      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="btn">Send Message ✈️</button>
      </form>
    </section>
  );
};

export default Contact;
