/**
 * <div id = "parent">
 * <div id = "child">
 * <h1></h1>
 * </div>
 * </div>
 * 
 * ReactElement(object) => HTML(Browser understands)
 */


/**
 * creating siblings
 * 
 * <div id = "parent">
 * <div id = "child">
 * <h1></h1>
 * <h2></h2> adding siblings ( convert into an array )
 * </div>
 * </div>
 * 
 * ReactElement(object) => HTML(Browser understands)
 */

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