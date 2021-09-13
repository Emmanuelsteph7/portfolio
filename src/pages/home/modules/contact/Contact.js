import { SectionHeaders } from "components";
// import { ImLocation } from "react-icons/im";
// import { AiOutlinePhone } from "react-icons/ai";
// import { SiGmail } from "react-icons/si";
import "./contact.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, scrollFunc } from "components/index";
import axios from "axios";

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
    // {
    //   name: "project",
    //   placeholder: "Project",
    // },
    // {
    //   name: "phoneNo",
    //   type: "tel",
    //   placeholder: "Phone Number",
    // },
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

  const location = useLocation();

  useLayoutEffect(() => {
    scrollFunc(contact1);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(contact2);
  }, []);
  useLayoutEffect(() => {
    scrollFunc(contact3);
  }, []);

  useEffect(() => {
    const element = document.querySelector("#contact");
    if (location && location.pathname === "/contact") {
      const position = element.offsetTop;
      window.scrollTo(0, position - 70);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const res = axios.post(
      "https://eming-mailer.herokuapp.com/portfolio",
      body,
      headers
    );

    console.log(res);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__container container">
        <SectionHeaders
          section="contact"
          subHeader="For projects"
          sectionHeader="Contact Me"
        />
        {/* <div className="contact__cards">
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
        </div> */}
        <Form
          data={data}
          onSubmit={handleSubmit}
          state={formState}
          stateFunc={setFormState}
        />
      </div>
    </div>
  );
};

export default Contact;
