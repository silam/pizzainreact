const Pizza = (props)=>{
    return React.createElement("div",{},[
        React.createElement("h2",{}, props.name),
        React.createElement("p",{}, props.description),

    ]);
}


const App = () => {
    return React.createElement(
        "div",
        {},
            [
                React.createElement("h1",{},"Pizza Serverless Company"),
                React.createElement(Pizza, {name: "The Peppo", description: "With Pepper"}),
                React.createElement(Pizza, {name: "American", description: "French Fries"}),
                React.createElement(Pizza, {name: "Itaian", description: "Hot dog"}),
                React.createElement(Pizza, {name: "Mexican Pizza", description: "Ketchup"})

            ]

       
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));