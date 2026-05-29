   import React, { useState } from "react"; function App() {
     // State for background color const [bgColor, setBgColor] = useState("white");   

     return ( <div style={{ backgroundColor: bgColor, height: "100vh", textAlign: "center", paddingTop: "50px" }} ></div>