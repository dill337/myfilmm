import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";


import { RegistrationView } from '../registration-view/registration-view';


import './login-view.scss'

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://myfilmm.herokuapp.com/login', {
      Username: username,
      Password: password,
    })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log('no such user');
      });
  }


  //   console.log(username, password);
  //   //sends a request to the server for authentication, 
  //   // then call props.onLoggedIn(username)
  //   props.onLoggedIn(username);
  // };





  return (

    <Form className="login-form">
      <Form.Group controlId="formBasicUsername">
        <Form.Label className="label">Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        className="new-user"
        variant="btn-lg btn-dark btn-block"
        type="submit"
        onClick={handleSubmit}
      >
        Login
    </Button>
      <br />
      <Link to={`/register`}>
        <Button variant="link" className="new-user">New User</Button>
        {/* <Button variant="link" type="button" onClick={props.onRegisterClick}>New User</Button> */}
      </Link>
    </Form>

    // <div className="login_style">
    //   <div>
    //     <form>
    //       <label>
    //         Username:
    //     <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    //       </label>
    //       <label>
    //         Password:
    //     <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    //       </label>
    //       <button type="button" onClick={handleSubmit}>Login</button>
    //       <button type="button">Sign Up</button>
    //     </form>
    //   </div>
    // </div>
  );
}