import React from "react";
import Col from "./Col";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const newList = props.employees.filter(user => (
    user.name.toLowerCase().includes(props.search.toLowerCase())
    ||
    user.email.toLowerCase().includes(props.search.toLowerCase())
    ||
    user.phone.includes(props.search)
  ));

  return (
    <>
      {newList.map((user,i) => (
        <div className="Row">
        <Col size="md-1" key={i}>
        </Col>
        <Col size="md-2"><img src={user.picture.thumbnail} alt="thumbnail"></img>
        </Col>
        <Col size="md-2">{user.name}
        </Col>
        <Col size="md-2">{user.phone}
        </Col>
        <Col size="md-2">{user.email}
        </Col>
        <Col size="md-2">{user.phone}
        </Col>
        <Col size="md-1">
        </Col>
      </div>
      ))}
    </>
  );
}

export default List;
