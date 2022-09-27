import React, { useState } from 'react'
import './style.css';

const UserForm = () => {

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const handleFirstName = (e) =>{
    const { value } = e.target;
    setFirstName(value);
    console.log(value.length);
    if (value.length < 2) {
      setFirstNameError("El nombre debe de tener por lo menos 2 carácteres")
    }else{
      setFirstNameError("")
    }
  }
  const handleLastName = (e) =>{
    const { value } = e.target;
    setLastName(value);
    if (value.length < 2) {
      setLastNameError("El apellido debe de tener por lo menos 2 carácteres")
    }else{
      setLastNameError("")
    }
  }

  const handleEmail = (e) =>{
    const { value } = e.target;
    setEmail(value)
    if (value.length < 2) {
      setEmailError("El correo debe de tener por lo menos 2 carácteres")
    }else{
      setEmailError("")
    }
  }

  const handlePassword = (e) =>{
    const { value } = e.target;
    setPassword(value)
    if (value.length < 8) {
      setPasswordError("El apellido debe de tener por lo menos 8 carácteres")
    }else{
      setPasswordError("")
    }
  }

  const handlePasswordConfirm = (e) =>{
    const { value } = e.target;
    setPasswordConfirm(value);
    console.log(value);
    console.log(password);
    if(value === password){
      setPasswordConfirmError("")
    }else{
      setPasswordConfirmError("Las contraseñas deben de coincidir")
    }
  }
  const createNewUser = (e) =>{
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }

    console.log("Se creo el usuario:");
    alert(`Se creo a ${user.firstName} ${user.lastName}, con correo ${user.email}`);
  }


  return (
    <>
      <form onSubmit={createNewUser}>
        <div className='formGroup'>
          <label>First Name:</label>
          <input type="text" onChange={ handleFirstName }/>
        </div>
        {
          firstNameError?
          <p style={{color:'red'}}>{ firstNameError }</p>:
          ""
        }
        <div className='formGroup'>
          <label>Last Name:</label>
          <input type="text" onChange={ handleLastName }/>
        </div>
        {
          lastNameError?
          <p style={{color:'red'}}>{ lastNameError }</p>:
          ""
        }
        <div className='formGroup'>
          <label>Email:</label>
          <input type="email" onChange={ handleEmail }/>
        </div>
        {
          emailError?
          <p style={{color:'red'}}>{ emailError }</p>:
          ""
        }
        <div className='formGroup'>
          <label>Password:</label>
          <input type="password" onChange={ handlePassword }/>
        </div>
        {
          passwordError?
          <p style={{color:'red'}}>{ passwordError }</p>:
          ""
        }
        <div className='formGroup'>
          <label>Confirm Password:</label>
          <input type="password" onChange={ handlePasswordConfirm }/>
        </div>
        {
            passwordConfirmError?
            <p style={{color:'red'}}>{ passwordConfirmError }</p>:
            ""
        }
        <input className='submit' type="submit" value="Create User" />
      </form>
    </>
  )
}

export default UserForm;