import React, { useState } from "react";
import { Input, Button, Container } from "reactstrap";

const ShoppingList = () => {
  const [email, setEmail] = useState("");

  const subject = "Your CookBook Pro shopping list";
  const body = "this is the body dfakwjefvkwevfawefashdvfkahgfkahwegfkahwefk";

  const mailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    email +
    "&su=" +
    subject +
    "&body=" +
    body;

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <h1>Export a shopping list</h1>
      <Container className="col-4">
        <p>this only works when you are logged into gmail</p>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />
        
        <Button href={mailLink} className="mt-3">send an email to {email}</Button>
      </Container>
    </>
  );
};

export default ShoppingList;
