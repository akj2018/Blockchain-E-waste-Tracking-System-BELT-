import React from 'react';
import { Link } from 'react-router-dom';
import './CreateEWastePassport.css';

const CreateEWastePassport = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form handling code here
    console.log('Form submitted');
  };

  return (
    <div className="passport-form-container">
      <h1>Create EWaste Passport</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneName">Phone Name</label>
          <input type="text" id="phoneName" defaultValue="iPhone 12 Pro" />
        </div>

        <div className="form-group">
          <label htmlFor="imeiNumber">IMEI Number</label>
          <input type="number" id="imeiNumber" defaultValue={123456789012345} />
        </div>

        <div className="form-group">
          <label htmlFor="manufacturer">Manufacturer</label>
          <input type="text" id="manufacturer" defaultValue="Apple" />
        </div>

        <div className="form-group">
          <label htmlFor="expectedLifecycle">Expected Lifecycle (in years)</label>
          <input type="number" id="expectedLifecycle" />
        </div>

        <div className="form-group">
          <label htmlFor="manufactureDate">Manufacture Date</label>
          <input type="date" id="manufactureDate" />
        </div>

        <div className="form-group">
          <label htmlFor="isBatteryReplaceable">Is Battery Replaceable?</label>
          <select id="isBatteryReplaceable">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" id="releaseDate" />
        </div>

        <div className="form-group">
          <label htmlFor="os">Operating System (OS)</label>
          <input type="text" id="os" />
        </div>

        <div className="form-group">
          <label htmlFor="chipset">Chipset</label>
          <input type="text" id="chipset" />
        </div>

        <div className="form-group">
          <label htmlFor="phoneMemory">Phone Memory (in GB)</label>
          <input type="number" id="phoneMemory" />
        </div>

        <div className="form-group">
          <label htmlFor="batteryType">Battery Type</label>
          <input type="text" id="batteryType" />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <input type="text" id="condition" />
        </div>

        <div className="form-group">
          <label>Components</label>
          {["Central Processing Unit (CPU)", "Display Screen", "Battery"].map((component, index) => (
            <div key={index}>
              <input type="text" defaultValue={component} />
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Materials</label>
          {["Silicon", "Gorilla Glass", "Lithium-ion"].map((material, index) => (
            <div key={index}>
              <input type="text" defaultValue={material} />
            </div>
          ))}
        </div>

        

        <button type="submit" className="submit-button">Submit</button>
      </form>
      <Link to="/"><button className="back-button">Back to Home</button></Link>
    </div>
  );
}

export default CreateEWastePassport;
