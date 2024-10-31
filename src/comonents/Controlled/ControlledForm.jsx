import { useState } from "react";

const ControlledForm = () => {
    const [name, setName] = useState('Rojoni Klanto')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    password.length > 5?
    setError(email, name, password)
    :
    setError('pass must be 6 character or longer');
  };

  const handleEMailChange=(e)=>{
    setEmail(e.target.value);

  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);

  }
  const handleNameChange=(e)=>{
    setName(e.target.value);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleNameChange}
          type="text"
          placeholder="Your Name"
          className="border-2 p-5"
          name="name"
        />
        <br />
        <input
        onChange={handleEMailChange}
          className="border-2 p-5"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <input
        onChange={handlePasswordChange}
          className="border-2 p-5"
          type="password"
          name="password"
          id=""
          placeholder="Your password" required
        />
        <br />
        <input type="submit" value="Submit" />
        <h1 className="text-2xl text-red-700">{error}</h1>
      </form>
    </div>
  );
};

export default ControlledForm;
