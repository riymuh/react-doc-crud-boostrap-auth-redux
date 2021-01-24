import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Container,
} from "reactstrap";

const CreateBlogComponent = () => {
  const createNewUser = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={createNewUser}>
        <FormGroup row>
          <Label for="" sm={2}>
            Nama
          </Label>
          <Col sm={10}>
            <Input type="text" name="nama" placeholder="Nama" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="" sm={2}>
            Umur
          </Label>
          <Col sm={10}>
            <Input type="number" name="umur" placeholder="Umur" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="" sm={2}>
            No Hp
          </Label>
          <Col sm={10}>
            <Input type="number" name="nohp" placeholder="Nomor Hp" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Alamat
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 3, offset: 2 }}>
            <Button className="btn-block">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default CreateBlogComponent;
