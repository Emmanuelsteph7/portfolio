import { ContactCard, SectionHeaders } from "components";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import "./contact.scss";
import { useEffect, useRef, useState } from "react";
import { Form, scrollFunc } from "components/index";

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

  const contact1 = useRef();
  const contact2 = useRef();
  const contact3 = useRef();

  useEffect(() => {
    scrollFunc(contact1, 2);
  }, []);
  useEffect(() => {
    scrollFunc(contact2, 2);
  }, []);
  useEffect(() => {
    scrollFunc(contact3, 2);
  }, []);

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
            refValue={contact1}
            details="Lagos, Nigeria"
            icon={<ImLocation />}
          />
          <ContactCard
            name="Phone"
            refValue={contact2}
            href="tel:+2349029923646"
            details="+2349029923646"
            icon={<AiOutlinePhone />}
          />
          <ContactCard
            name="Email"
            refValue={contact3}
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