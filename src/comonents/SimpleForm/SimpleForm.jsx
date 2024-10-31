const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" className="border-2 p-5" name="name" />
        <br />
        <input className="border-2 p-5" type="email" name="email" id="" placeholder="Your Email" />
        <input className="border-2 p-5" type="text" name="phone" id="" placeholder="Your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
