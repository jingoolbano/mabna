import React from "react";
import { IoChevronBackCircle } from "react-icons/io5";

const FormInput = ({ onChange, ...inputProps }) => {
  return (
    <div className="input">
      <input {...inputProps} onChange={onChange} />
      <IoChevronBackCircle />
    </div>
  );
};

export default FormInput;
