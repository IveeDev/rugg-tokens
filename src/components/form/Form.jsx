import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="container">
          <div className="form__group">
            {/* <label htmlFor="" className="form__label">
              Wallet
            </label> */}
            <input
              type="text"
              className="form__input"
              placeholder="Paste wallet Address"
            />
          </div>

          <div className="form__group">
            <button className="btn">Check Eligibility</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
