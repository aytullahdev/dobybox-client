import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Manaageallproduct from './Manaageallproduct';
const Myitems = () => {
    const [user]=useAuthState(auth);
    return (
        <div>
            <Manaageallproduct url={`https://young-beach-37066.herokuapp.com/productsby/${user.email}`}/>
        </div>
    );
};

export default Myitems;