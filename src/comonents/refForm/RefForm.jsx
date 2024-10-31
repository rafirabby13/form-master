import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Your Name" className="border-2 p-5" name="name" />
        <br />
        <input ref={emailRef} defaultValue={'rojoni.sojoni@gamil.com'} className="border-2 p-5" type="email" name="email" id="" placeholder="Your Email" />
        <input ref={passwordRef} className="border-2 p-5" type="password" name="phone" id="" placeholder="Your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default RefForm;