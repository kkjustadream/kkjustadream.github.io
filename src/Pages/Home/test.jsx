import React from "react";
// use formspree to handle form submission
import { useForm, ValidationError } from "@formspree/react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mqkrzknl");
  // after form submission
  if (state.succeeded) {
    return (
      <div className="text-md success-message">
        <img src="./img/success_msg.gif" alt="Success GIF" />
        <p>Thank you for contacting me!</p>
        <p>I will get back to you as soon as possible.</p>
      </div>
    );
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>

      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <ValidationError
            prefix="First Name"
            field="first-name"
            errors={state.errors}
          />
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <ValidationError
            prefix="Last Name"
            field="last-name"
            errors={state.errors}
          />
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" required>
            <option disabled>Select One...</option>
            <option>General</option>
            <option>Feedback </option>
            <option>Others</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">
            I accept to be contacted regarding this inquiry
          </span>
        </label>
        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
