import useInputStates from "../Hooks/useInputState.js";
import useInputState from "../Hooks/useInputState.js";

const hookForm = () => {

    // const nameState= useInputStates('Rojoni')
    // const nameState= useInputStates('Rojoni')
    //  console.log(nameState);

  const handleSubmit = (e) => {
    console.log('form data', name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
        value={name} onChange={handleNameChange}
          type="text"
          placeholder="Your Name"
          className="border-2 p-5"
          name="name"
        /> */}
        <br />
        <input
          className="border-2 p-5"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <input
          className="border-2 p-5"
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default hookForm;
