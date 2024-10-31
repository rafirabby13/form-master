import  { useContext, useState } from 'react';
import { AssetContext } from '../Grandpa/Grandpa.jsx';

const Friends = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h1>Friends: {gift}</h1>
        </div>
    );
};

export default Friends;