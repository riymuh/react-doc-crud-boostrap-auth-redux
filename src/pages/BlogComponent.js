import React from "react";
import { Container, Row, Spinner, Table } from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import CardComponent from "../components/blog/CardComponent";
import FormComponent from "../components/blog/FormComponent";

const BlogComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`https://my-json-server.typicode.com/riymuh/db_json_react/users`)
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  const receiveChildValue = (value) => {
    console.log("Parent received value from child: " + value); // value is 42
  };

  const createUser = (nama, nohp, umur, alamat) => {
    // e.preventDefault();
    let newUser = {
      nama: nama,
      nohp: nohp,
      umur: umur,
      alamat: alamat,
    };
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: prevUsers.length + 1,
        nama: nama,
        nohp: nohp,
        umur: umur,
        alamat: alamat,
      },
    ]);
    // console.log(data);
  };

  return (
    <div>
      {users.length > 0 ? (
        <Container className="mt-5">
          <Row>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <CardComponent
                    user={user}
                    fromChildToParentCallback={receiveChildValue}
                    key={user.id}
                  />
                ))}
              </tbody>
            </Table>
          </Row>
          <FormComponent fromChildCreateUser={createUser} />
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
};

export default BlogComponent;
