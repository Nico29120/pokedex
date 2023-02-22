import { useState, createContext } from 'react';

const initialState = {
    user : {},
};

export const AuthContext = createContext({
    ...initialState,
    setUserInfo : ()=>{},
});

function AuthContextProvider({ children }){
    const [auth, setAuth] = useState(initialState);

    function setUserInfo(userInfo){
        const newUserData = { user : {...userInfo}}
        setAuth(newUserData)
    }

    const value = {auth, setUserInfo}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;