import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const FormComponent = (props) => {
  //   const [values, handleChange] = useForm({ nama: "", alamat: "", nohp: "" });
  const [{ nama, alamat, nohp, umur }, setValue] = useState({
    nama: "Riyadh muhammad",
    alamat: "jalan sokarno hatta",
    nohp: "07987",
    umur: "12",
  });

  return (
    <Form>
      <FormGroup row>
        <Label for="" sm={2}>
          Nama
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="nama"
            placeholder="Nama"
            value={nama}
            onChange={(e) =>
              setValue((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="" sm={2}>
          Umur
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            name="umur"
            placeholder="Umur"
            value={umur}
            onChange={setValue}
            onChange={(e) =>
              setValue((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="" sm={2}>
          No Hp
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            name="nohp"
            placeholder="Nomor Hp"
            value={nohp}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Alamat
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="alamat"
            id="exampleText"
            value={alamat}
            onChange={(e) =>
              setValue((currentState) => ({
                ...currentState,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 3, offset: 2 }}>
          <Button
            className="btn-block"
            onClick={() => props.fromChildCreateUser(nama, nohp, umur, alamat)}
          >
            Submit
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormComponent;
