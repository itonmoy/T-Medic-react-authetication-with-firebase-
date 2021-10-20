import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
// import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;









































// import React, { Children } from 'react';
// import useFirebase from '../Hooks/useFirebase'
// const AuthContext = createContext();


// const AuthProvider = () => {
//     const allContext =useFirebase();
//     return (
//         <div>
//             <AuthContext.provider value={allContext}>
//                 {Children}

//             </AuthContext.provider>
//         </div>
//     );
// };

// export default AuthProvider;