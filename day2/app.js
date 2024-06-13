import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"HIIII"),React.createElement("h2",{},"hheee"),]),React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"HIIII"),React.createElement("h2",{},"hheee"),])]);
   
   
   //const heading =  React.createElement("h1" ,{id:"heading"},"Hello .... World");
   //console.log(heading)
   console.log(parent)
   const root = ReactDOM.createRoot(document.getElementById("root"));
   
   //root.render(heading);
   root.render(parent);