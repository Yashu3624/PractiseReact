import React from "react"
import ReactDOM from "react-dom/client"


// react elements 
const heading = React.createElement("h1" , {id:"heading"} , "This is day3 react ");

//root for react app . whatever happens in root it will happen in that root 
//core react create element  but ReactDOM is for displaying in browsers
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// replace the content in root in html with heading .
root.render(heading); 

// JSX
const jsxHeading = <h1 id = "heading">Namsthe React using JSX</h1>

console.log(jsxHeading) ; 


root.render(jsxHeading)


//React Components  
const HeadingComponent = () =>{
    return <h1>React Functional Component</h1>;  // return jsx code
} 
//another way 

/*const Heading = ()  => <h1>HII this is another way </h1>

const Heading1 = () => (
    <h1>
        HII this is another another way 

    </h1>
);
*/
root.render(<HeadingComponent/>);


/// Component composition 
function Title() {
    return (
      <h1 className="head" tabIndex="5">
        Namaste React using JSX............
      </h1>
    );
  }
  

const number = 100000
const HeadingComponent1 = () => (

     <div id="container">
        <Title/>
        {number}
        <h1>iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
        <h2>{number}</h2>
        <h3>{500*47}</h3>
        {jsxHeading}
    </div>
   
);
root.render(<HeadingComponent1/>);


// react element in react component
// {react element}
// react element in react element