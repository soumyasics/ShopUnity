import React, { useEffect, useState } from "react";
import "./customer.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axiosInstance from "../../APIS/axiosinstatnce";

function CustomerProductCardPage({ url }) {

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") == null &&
  //     localStorage.getItem("customer") == null
  //   ) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <div>
    <h1>Congratzzz Your order is confirmed</h1>
    </div>
  );
}

export default CustomerProductCardPage;
