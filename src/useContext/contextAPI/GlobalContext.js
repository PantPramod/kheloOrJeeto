import { useState, createContext } from "react";

export const userdata = createContext({
    name: "",
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
});

const GlobalContext = (props) => {
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (name) => {
        setName(name);
        setIsLoggedIn(true);
    }
    const logout = () => {
        setName('');
        setIsLoggedIn(false);
    }
    const datatopass = {
        name,
        isLoggedIn,
        login,
        logout
    }
    return (<userdata.Provider value={datatopass}>
        {props.children}
    </userdata.Provider>)
}

export default GlobalContext;