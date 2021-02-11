import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'

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
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="btn-lg btn-dark btn-block"
        type="submit"
        onClick={handleSubmit}
      >
        Login
    </Button>
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