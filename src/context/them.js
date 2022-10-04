import React,{useState} from "react";

const themeContext = React.createContext();



const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark")
    return ( 
       <themeContext.Provider value={{theme, setTheme}}>{children} </themeContext.Provider> 
     );
}
 
export {themeContext, ThemeProvider };