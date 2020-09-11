import React from "react"
import "./style.scss"

const Contact = () => (
  <div className="contact-background">
    <div>
      <h3 className="contact-title">Send me a message!</h3>
      <div id="contact-line"></div>
    </div>
    <div className="contact-form">
      <form
        name="contact"
        method="POST"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <textarea name="message" placeholder="message me here.." />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
)

export default Contact
