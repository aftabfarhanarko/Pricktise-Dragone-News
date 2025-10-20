import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const PriverRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PriverRouter;