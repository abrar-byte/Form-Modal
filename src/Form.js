import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap"

export default class Formulir extends Component {
  state = {
    email: localStorage.length === 0 ? "" : JSON.parse(localStorage.getItem('state')).email,
    password: localStorage.length === 0 ? "" : JSON.parse(localStorage.getItem('state')).password,
    check: localStorage.length === 0 ? false : JSON.parse(localStorage.getItem('state')).check

  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state))
  }
  submit = (e) => {
    e.preventDefault()
    const email = e.target.halo.value
    const pass = e.target.hai.value
    this.setState({
      email: email,
      password: pass
    })
  }

  // semail = (event) => {
  //   event.preventDefault()
  //   this.setState({ email: event.target.value })
  // }

  // pass = (event) => {
  //   event.preventDefault()
  //   this.setState({ password: event.target.value })
  // }


  render() {
    console.log(typeof localStorage);
    return (
      <div>
        <p>email= {this.state.email}</p>
        <p>password= {this.state.password}</p>
        <p>check= {this.state.check}</p>
        <Form onSubmit={e => this.submit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control /* onChange={event => this.semail(event)} */ name="halo" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"><br />
              <br />
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control /* onChange={event => this.pass(event)} */ name="hai" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>



      </div>
    )
  }
}
