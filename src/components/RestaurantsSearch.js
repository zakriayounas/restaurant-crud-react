import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../customAxios";
import NavbarMenu from "./navbarMenu";
function RestaurantsSearch() {
  const [Search, setSearch] = useState("");
  const [noData, setNoData] = useState(false);
  function Find(key) {
    api.get(`/restaurants?name=${key}`).then((resp) => {
      if (resp.data.data.length > 0) {
        setSearch(resp.data.data);
        setNoData(false);
      } else {
        setSearch(null);
        setNoData(true);
      }
    });
  }
  const Delete = (id) => {
    api.delete(`/delete-restaurant/${id}`).then((resp) => {
      const updateList = Search.filter((item) => item.id !== id)
      setSearch(updateList);
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
    <div>
      <NavbarMenu />
      <Container>
        <h1>Restaurants Search</h1>
        <Form.Control
          type="text"
          onChange={(event) => Find(event.target.value)}
          placeholder="Search Restuarants"
        />
        {Search ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {Search?.slice().reverse().map((item, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>

                    <td>
                      <Link to={"/Update/" + item._id}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ color: "orange", marginRight: "5px" }}
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
          </div>
        ) : (
          ""
        )}

        {noData ? <h2>No Data Found</h2> : null}
      </Container>
    </div>
  );
}

export default RestaurantsSearch;
