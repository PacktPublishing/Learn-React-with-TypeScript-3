import * as React from "react";
import ContactUs from "./ContactUs";

class ContactUsPage extends React.Component<{}, {}> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      name: "",
      notes: "",
      reason: ""
    };
  }
  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs />
      </div>
    );
  }
}
export default ContactUsPage;
