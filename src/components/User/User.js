/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "hortiz-usuarios-api.azurewebsites.net/usuarios";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>{user.nombre}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{user.email}</td>
      </tr>
      <tr>
        <td>Password</td>
        <td>{user.password}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default EditUser;
