/* eslint-disable react/prop-types */
import Brother from "../Brother/Brother.jsx";
import Myself from "../Myself/Myself.jsx";
import Sister from "../Sister/Sister.jsx";

const Dad = ({asset}) => {
    return (
        <div className="border-2 rounded-xl py-10 px-16  border-orange-600 ">
            <h1>Dad</h1>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;