import React, {useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/User";
import {themeContext} from "../context/them";

function App() {

const {theme} = useContext(themeContext);
  return (
  
    <main className={theme}>
      <UserProvider>
      <Header />
      <Profile />
      </UserProvider>
      </main>
  );
}

export default App;
