/* eslint-disable react/prop-types */

const ReusableForm = ({
  
  submitBtnText = "submit",
  handleSubmit, children
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data={
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
    }
    handleSubmit(data)
  };

  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="border-2 p-5"
          name="name"
        />
        <br />
        <input
          className="border-2 p-5"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          className="border-2 p-5"
          type="text"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        <input className="border-2 p-5" type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
