import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function CardComponent(props) {
  return (
    <tr>
      <th scope="row">{props.user.id}</th>
      <td>{props.user.nama}</td>
      <td>{props.user.alamat}</td>
      <td>
        <Link to={"blog/" + props.user.id}>
          <Button color="primary" className="mr-2">
            View
          </Button>
        </Link>
        <Button
          color="danger"
          onClick={() => props.fromChildToParentCallback(props.user.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default CardComponent;
