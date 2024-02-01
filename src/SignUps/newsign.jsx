import React from 'react';

const HassleFreeJourney = () => {
  return (
    <div className="hassle-free-journey-container">
      <div className="hassle-free-journey-content">
        <h2>Start your free Hassle Free Journey</h2>
        <p>All-in-one inventory, fulfillment and accounting software.</p>
        <div className="personal-details">
          <div className="sales-channels">
            <h4>Which sales channels do you currently sell on</h4>
            <select name="sales-channels" id="sales-channels">
              <option value="none">Nothing selected</option>
            </select>
          </div>
          <div className="shipping-provider">
            <h4>Who do you currently ship ecommerce orders with</h4>
            <select name="shipping-provider" id="shipping-provider">
              <option value="none">Nothing selected</option>
            </select>
          </div>
          <div className="orders-per-month">
            <h4>How many orders per month do you process</h4>
            <select name="orders-per-month" id="orders-per-month">
              <option value="none">Select order amount</option>
            </select>
          </div>
        </div>
        <form action="#">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign up to our marketing list</button>
        </form>
        <p>
          For helpful ecommerce content, product updates and help from our sales
          teams.
        </p>
        <div className="legal">
          <p>Retail Terms and Service</p>
          <p>Privacy Policy</p>
        </div>
        <button type="submit">Let's Start!</button>
      </div>
    </div>
  );
};

export default HassleFreeJourney;