import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import NavbarMenu from "./navbarMenu";
import { api } from "../customAxios";
function RestaurantsList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    api.get("/restaurants").then((resp) => {
      setList(resp.data.data);
    });
  }, []);
  const Delete = (id) => {
    api.delete(`/delete-restaurant/${id}`).then((resp) => {
      const updatedList = list
        .filter((item) => item._id !== id)
      setList(updatedList);
    });
  };

  const showConfirmation = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        Delete(id);
      }
    });
  };
  return (
    <div className="container">
      <NavbarMenu />
      <h1 style={{ textAlign: "left" }}>Restaurants List</h1>
      {
        <Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Address</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {list?.slice().reverse().map((item, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.rating}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={"/Update/" + item._id}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{
                          color: "orange",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <span onClick={() => showConfirmation(item._id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          color: "red",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Form>
      }
    </div>
  );
}

export default RestaurantsList;
