import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { api } from "../customAxios";
import NavbarMenu from "./navbarMenu";
function RestaurantsCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("");
  const restName = (event) => {
    setName(event.target.value);
  };
  const restEmail = (event) => {
    setEmail(event.target.value);
  };
  const restRating = (event) => {
    setRating(event.target.value);
  };
  const restAddress = (event) => {
    setAddress(event.target.value);
  };

  const newRestaurant = {
    name: name,
    email: email,
    rating: rating,
    address: address,
  };
  const valid = () => {
    if (!name || !email || !rating || !address) {
      showConfirmationForEmpty();
    } else {
      showConfirmation();
    }
  };
  const addShow = () => {
    api.post("/add-restaurant", newRestaurant).then((resp) => {
      navigate("/home");
    });
  };
  const showConfirmationForEmpty = () => {
    Swal.fire({
      title: "Enter some Information",
      text: "You have to fill all inputs!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK!",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };
  const showConfirmation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Added!", "Your file has been Added.", "success");
        addShow();
      }
    });
  };
  return (
    <div className="container">
      <NavbarMenu />
      <h1>Create Restaurant</h1>
      <div>
        <input
          type="text"
          onChange={restName}
          value={name}
          placeholder="Restaurant Name"
        />
        <br />
        <br />
        <input
          type="email"
          onChange={restEmail}
          value={email}
          placeholder="Restaurant Email"
        />
        <br />
        <br />
        <input
          type="number"
          onChange={restRating}
          value={rating}
          placeholder="Restaurant Rating"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={restAddress}
          value={address}
          placeholder="Restaurant Address"
        />
        <br />
        <br />
        <button className="btn btn-success" onClick={valid}>
          Add Restaurants
        </button>
      </div>
    </div>
  );
}

export default RestaurantsCreate;
