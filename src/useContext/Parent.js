import React, { createContext, useState } from 'react'
import Child from './Child';

export const MyContext = createContext();
export const colorTheme = createContext();

export const Userdata = createContext({
    name: "",
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
});

const Parent = () => {
    const [name, setname] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (name) => {
        setname(name);
        setIsLoggedIn(true)
    }
    const logout = () => {
        setname('');
        setIsLoggedIn(false)
    }
    const data = {
        name: name,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout

    }
    return (
        <div>
            <MyContext.Provider value={"Some data which is to pass"}>
                <colorTheme.Provider value={"theme1"}>
                    <Userdata.Provider value={data}>
                        Parent Component
                        <Child />
                    </Userdata.Provider>
                </colorTheme.Provider>
            </MyContext.Provider>
        </div>
    )
}

export default Parent
