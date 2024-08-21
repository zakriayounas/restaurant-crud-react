import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { api } from "../customAxios";
import NavbarMenu from "./navbarMenu";

function RestaurantsUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    api.get(`/single-restaurant/${id}`).then((resp) => {
      const { name, email, rating, address } = resp.data;
      setName(name);
      setEmail(email);
      setRating(rating);
      setAddress(address);
    });
  }, [id]);

  const updateNow = async () => {
    const newUpdate = {
      name: name,
      email: email,
      rating: rating,
      address: address,
    };
    await api
      .put(`/update-restaurant/${id}`, newUpdate)
      .then((resp) => {
        navigate("/Home");
      });
  };

  const showConfirmation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "Your file has been updated.", "success");
        updateNow();
      }
    });
  };
  return (
    <div>
      <NavbarMenu />
      <h1>Restaurants Update</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Restaurant Name"
        />
        <br />
        <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Restaurant Email"
        />
        <br />
        <br />
        <input
          type="number"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          placeholder="Restaurant Rating"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Restaurant Address"
        />
        <br />
        <br />
        <button className="btn btn-success" onClick={showConfirmation}>
          Update{" "}
        </button>
      </div>
    </div>
  );
}

export default RestaurantsUpdate;
