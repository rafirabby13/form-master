import Cousin from "../Cousin/Cousin.jsx";

const Uncle = () => {
    return (
        <div className="border-2 rounded-xl py-10 px-16  border-orange-600">
            <h1>Uncle</h1>
            <section>
                <Cousin name='rana'></Cousin>
                <Cousin name='Sohana'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;