import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import axios from "axios";

const Orders = () => {
  const [values, setValues] = useState({
    product_type: "",
    weight: "",
    vehicle_type: "",
    loading_location: "",
    unloading_loc: "",
    loading_date: "",
    border_passage: "",
    loading_hour: "",
    description: "",
    trader: "",
    petro_seller_co: "",
  });

  const inputs = [
    {
      id: 1,
      name: "product_type",
      type: "text",
      placeholder: "نوع کالا",
    },
    {
      id: 2,
      name: "weight",
      type: "text",
      placeholder: "وزن",
    },
    {
      id: 3,
      name: "vehicle_type",
      type: "string",
      placeholder: "نوع ناوگان",
    },
    {
      id: 4,
      name: "loading_location",
      type: "text",
      placeholder: "محل بارگیری",
    },
    {
      id: 5,
      name: "unloading_loc",
      type: "text",
      placeholder: "محل تخلیه",
    },
    {
      id: 6,
      name: "loading_date",
      type: "date",
      placeholder: "تاریخ بارگیری",
    },
    {
      id: 7,
      name: "border_passage",
      type: "text",
      placeholder: "نام اعلام کننده بار",
    },
    {
      id: 8,
      name: "loading_hour",
      type: "text",
      placeholder: "ساعت بارگیری",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/trader/orders", values).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert(error.message);
      }
    );
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);

  return (
    <div className="h-screen">
      <div className="flex flex-col max-h-screen">
        <Header title={"ثبت سفارش"} />
        <form
          className="flex flex-col justify-center items-center p-4"
          onSubmit={handleSubmit}
        >
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))}
          <textarea
            name="description"
            placeholder="توضیحات"
            className="input h-16 overflow-hidden resize-none outline-none rounded-xl"
            value={values.description}
            onChange={handleChange}
          />
          <button
            className="bg-gray-300 rounded-full w-[150px] h-10 font-semibold cursor-pointer hover:opacity-80 text-lg"
            onClick={handleSubmit}
          >
            تایید
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Orders;
