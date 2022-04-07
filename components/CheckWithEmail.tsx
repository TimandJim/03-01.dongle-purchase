import React from 'react'
import { Button, Form } from 'react-bootstrap'

function CheckWithEmail() {
  return (
    <Form>
    {/* <div className="mb-3"> */}

    <Form.Group controlId="emailAdress">
      <Form.Control
        as="input"
        placeholder="you@example.com"
        type="email"
        isInvalid={false}
        isValid={true}
      ></Form.Control>
      <Button variant="primary" type="submit">
        Send code
      </Button>
    </Form.Group>
    <Button variant="primary" type="submit">
      Check my release schedule
    </Button>
    {/* </div> */}
  </Form>
  )
}

export default CheckWithEmail