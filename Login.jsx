import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

    const handleLogin = async () => {
        try {
              const result = await signInWithPopup(auth, provider);
                    console.log("User Info:", result.user);
                          navigate("/dashboard"); // login ke baad dashboard par bhej do
                              } catch (error) {
                                    console.error("Login Error:", error);
                                        }
                                          };

                                            return (
                                                <div style={{ textAlign: "center", marginTop: "50px" }}>
                                                      <h1>Login Page</h1>
                                                            <button onClick={handleLogin}>Login with Google</button>
                                                                </div>
                                                                  );
                                                                  }

                                                                  export default Login;