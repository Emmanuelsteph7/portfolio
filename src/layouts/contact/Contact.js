import { ContactCard, SectionHeaders } from "components";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import "./contact.scss";
import { useState } from "react";
import { Form } from "components/index";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    phoneNo: "",
    message: "",
  });
  const data = [
    {
      name: "name",
      placeholder: "Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "project",
      placeholder: "Project",
    },
    {
      name: "phoneNo",
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Message",
      rows: "5",
    },
    {
      name: "button",
      type: "submit",
      label: "Send Message",
    },
  ];
  return (
    <div className="contact">
      <div className="contact__container container">
        <SectionHeaders
          section="contact"
          subHeader="For projects"
          sectionHeader="Contact Me"
        />
        <div className="contact__cards">
          <ContactCard
            name="Location"
            details="Lagos, Nigeria"
            icon={<ImLocation />}
          />
          <ContactCard
            name="Phone"
            href="tel:+2349029923646"
            details="+2349029923646"
            icon={<AiOutlinePhone />}
          />
          <ContactCard
            name="Email"
            href="mailto:stephenemmanuel770@gmail.com"
            details="stephenemmanuel770@gmail.com"
            icon={<SiGmail />}
          />
        </div>
        <Form data={data} state={formState} stateFunc={setFormState} />
      </div>
    </div>
  );
};

export default Contact;
