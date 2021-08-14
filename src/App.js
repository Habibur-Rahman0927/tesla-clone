import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Menu from './Component/Header/Menu/Menu';
import HeaderBlock from './Component/HeaderBlock/HeaderBlock';
import LogIn from './Component/LogIn/LogIn';
import { login, logOut, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import SignUp from './Component/SignUp/SignUp';
import TeslaAccount from './Component/TeslaAccount/TeslaAccount'
import { auth } from './firabase.config';
import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logOut())
      }
    })
  }, [dispatch])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {/* Header */}
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></Header>
            {/* HeaderBlock */}
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to='/teslaaccount' /> : <LogIn></LogIn>}
          </Route>

          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? <Redirect to='/login' /> : (
              <>
                <TeslaAccount isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
