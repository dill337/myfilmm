
import React, { useState } from "react";
import "./registration-view.scss";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function RegistrationView(props) {
  const [username, createUsername] = useState("");
  const [password, createPassword] = useState("");
  const [email, createEmail] = useState("");
  const [birthday, createBirthday] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://myflixdb-api.herokuapp.com/users", {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self"); // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch((e) => {
        console.log("error registering the user");
      });
  };

  return (
    <Form className="registration-form">
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => createUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => createPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => createEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicBirthday">
        <Form.Control
          type="text"
          placeholder="Enter Date of Birth"
          value={birthday}
          onChange={(e) => createBirthday(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleRegister}>
        Register
      </Button>
    </Form>
  );
}







// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Container, Button } from 'react-bootstrap'


// export function RegistrationView(props) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [birthday, setBirthday] = useState(date)

//   const handleRegister = () => {
//     e.preventDefault();
//     console.log(username, password);
//     //sends a request to the server for authentication, 
//     // then call props.onLoggedIn(username)
//     props.onLoggedIn(username);

//     // const createdUser = {
//     //   Username: username,
//     //   Password: password,
//     //   Email: email,
//     //   Birthday, birthday
//     // };

//     axios
//       .post('https://myfilmm.herokuapp.com/users', createdUser)
//       .then((response) => {
//         console.log(response);
//         console.log(response.data);
//         alert('User created successfully');
//         window.open('/client', '_self');
//       })
//       .catch((e) => {
//         console.log(e.response);
//         alert('Error processing request');
//       });
//   };
// };

// return (
//   <Form className="registration-form">
//     {/* <img src={logo} alt="logo" style={{ width: "300px" }} /> */}
//     <Form.Group controlId="formBasicUsername">
//       <Form.Control
//         type="text"
//         placeholder="Enter username"
//         value={username}
//         onChange={(e) => createUsername(e.target.value)}
//       />
//     </Form.Group>
//     <Form.Group controlId="formBasicPassword">
//       <Form.Control
//         type="text"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => createPassword(e.target.value)}
//       />
//     </Form.Group>
//     <Form.Group controlId="formBasicEmail">
//       <Form.Control
//         type="text"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => createEmail(e.target.value)}
//       />
//     </Form.Group>
//     <Form.Group controlId="formBasicBirthday">
//       <Form.Control
//         type="text"
//         placeholder="Enter Date of Birth"
//         value={birthday}
//         onChange={(e) => createBirthday(e.target.value)}
//       />
//     </Form.Group>
//     <Button variant="primary" type="submit" onClick={handleRegister}>
//       Register
//   </Button>
//   </Form>

//   // <form>
//   //   <label>
//   //     Username:
//   //     <input
//   //       type="text"
//   //       value={username}
//   //       placeholder="enter username here"
//   //       onChange={e => setUsername(e.target.value)} />
//   //   </label>
//   //   <label>
//   //     Password:
//   //     <input
//   //       type="password"
//   //       value={password}
//   //       placeholder="enter password here"
//   //       onChange={e => setPassword(e.target.value)} />
//   //   </label>
//   //   <label>
//   //     Email:
//   //       <input
//   //       type="email"
//   //       value={email}
//   //       placeholder="enter email here"
//   //       onChange={e => setEmail(e.target.value)} />
//   //   </label>
//   //   <label>
//   //     Birthday:
//   //     <input
//   //       type="birthday"
//   //       value={birthday}
//   //       placeholder='01/01/2001'
//   //       onChange={e => setBirthday(e.target.value)} />
//   //   </label>
//   //   <button type="button" onClick={handleSubmit}>Sign Up</button>
//   // </form>
// );
