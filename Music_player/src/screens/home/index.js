import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { setClientToken } from "../../spotify";
import Login from "../auth/login";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../favorites/ChatFeed';
import LoginForm from '../favorites/LoginForm';
import Feed from "../feed";
import Library from "../library";
import Player from "../player";
import Trending from "../trending";
import "./home.css";
import Loginn from '../../Login';
import Signup from '../../Signup';
import "./App.css";
export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <Routes>
<Route path="/login" element={<Loginn />} />
        <Route path="/" element={<Signup />} />
        <Route path="/favorites" element={
            !localStorage.getItem('username') ? (
              <LoginForm />
            ) : (
              <ChatEngine
                height='100vh'
                projectID='2ce28e28-937c-4235-84ac-a1e155b51646'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
              />
            )
          } />
</Routes>
      <div className="main-body">

        <Sidebar />
        <Routes>
        <Route path="/home" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          
                  </Routes>
      </div>
    </Router>
  );
}