import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";

function DetailBlogComponent() {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(
        `https://my-json-server.typicode.com/riymuh/db_json_react/users/` + id
      )
      .then((res) => {
        const user = res.data;
        setUser(user);
      });
  };
  return (
    <div>
      {user.nama ? (
        <Container>
          {id} {user.nama}
        </Container>
      ) : (
        <div className="text-center">
          <h1>Loading</h1>
          {/* {props.errorUsersList ? (
            <h1>Terjadi kesalahan, silahkan muat ulang</h1>
          ) : (
            <Spinner color="dark" />
          )} */}
        </div>
      )}
    </div>
  );
}

export default DetailBlogComponent;
