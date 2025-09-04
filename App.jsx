import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Router>
            <Routes>
                    {/* Home Page */}
                            <Route path="/" element={<Home />} />

                                    {/* Login Page */}
                                            <Route path="/login" element={<Login />} />

                                                    {/* Dashboard Page */}
                                                            <Route path="/dashboard" element={<Dashboard />} />
                                                                  </Routes>
                                                                      </Router>
                                                                        );
                                                                        }

                                                                        export default 
                                                                        import React from "react";
                                                                        import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

                                                                        // ✅ Apne pages import karo
                                                                        import Home from "./Home";
                                                                        import Login from "./Login";
                                                                        import Dashboard from "./Dashboard";

                                                                        function App() {
                                                                          return (
                                                                              <Router>
                                                                                    <Routes>
                                                                                            {/* Default route */}
                                                                                                    <Route path="/" element={<Home />} />

                                                                                                            {/* Login page */}
                                                                                                                    <Route path="/login" element={<Login />} />

                                                                                                                            {/* Dashboard page */}
                                                                                                                                    <Route path="/dashboard" element={<Dashboard />} />
                                                                                                                                          </Routes>
                                                                                                                                              </Router>
                                                                                                                                                );
                                                                                                                                                }

                                                                                                                                                export default App;