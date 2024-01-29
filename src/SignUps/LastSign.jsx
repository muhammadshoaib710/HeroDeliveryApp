import React from "react";
import Service from "../components/Service";
const LastSign = () => {
  const input = (
    <input
      type="text"
      className="form-control"
      placeholder="Saad@example.com"
    />
  );
  const field1 = (
    <input
      type="text"
      className="form-control"
      placeholder="Karim@example.com"
    />
  );
  const field2 = (
    <input type="text" className="form-control" placeholder="Phone Number" />
  );
  const field3 = (
    <textarea
      typeof="text"
      className="form-control"
      placeholder="Every bussiness is unique give us some information about your bussiness so we can configure accordingly"
    ></textarea>
  );
  const service = <Service />;
  return (
    <>
      <div className="sign2">
        <SignUps
          title="Start your free Hassle Free Journey"
          para="All-in-one inventory, fulfillment and accounting software."
          number1="1"
          acount="Acount"
          number2="2"
          Personal="Personal"
          number3="3"
          Intergration="Integration"
          emailHead="Your Name"
          Cname="Company Name"
          phone="Phone Number"
          message="Comapny Basic Infromation"
          image={cycle}
          input1={input}
          input2={field1}
          input3={field2}
          input4={field3}
          service={service}
        />
      </div>
    </>
  );
};

export default LastSign;
