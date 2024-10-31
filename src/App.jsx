/* eslint-disable no-unused-vars */

import "./App.css";
import ControlledForm from "./comonents/Controlled/ControlledForm.jsx";
import RefForm from "./comonents/refForm/refForm.jsx";
import refForm from "./comonents/refForm/refForm.jsx";
import HookForm from "./comonents/hookForm/hookForm.jsx";
import ReusableForm from "./comonents/ReusableForm/ReusableForm.jsx";
import Grandpa from "./comonents/Grandpa/Grandpa.jsx";
function App() {



  const handleSignUpSubmit = ( data) => {
    // e.preventDefault();
    console.log(data);
  };
  const handleUpdateSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <>
    <Grandpa></Grandpa>
      {/* <ReusableForm
        formTitle="Sign Up"
        submitBtnText="Sign Up"
        handleSubmit={handleSignUpSubmit}
      
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle="Profile Update"
        submitBtnText="Update"
        handleSubmit={handleUpdateSubmit}
      >
        <div>
          <h2>Update Up</h2>
          <p>Please Update</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
