import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
export default function User() {
  const url = "http://localhost:3001/users/";
  const [data, setdata] = useState([]);

  // const FetchData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((result) =>
  //     result.json().then((resp) => {
  //       setdata(resp);
  //       console.table(resp);
  //     })
  //   );
  //};
  const FetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
    console.table(data);
  };

  // const HandleDel = (index, e) => {
  //   setdata(data.filter((v, i) => i !== index));
  // };
  const deleteUserFromServer = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    }).then(() => FetchData());
  };

  const DeleteUser = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUserFromServer(id);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Action</th>
          </tr>
        </thead>
        {data?.map((user, index) => (
          <tbody>
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button variant="light">edit</Button>
                <Button variant="light" onClick={() => DeleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
