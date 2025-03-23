// const heading = React.createElement('h1', {id: "heading"}, "Hello World")
// console.log(heading)

const parent = React.createElement('div', {id:"parent"}, 
    [ React.createElement('div', {id:"child"}, "hello i am child") ,  
        React.createElement('h1', {id:"child2"}, "hello i am child2"),
         React.createElement('div', {id:"parent"}, [
        React.createElement('div', {id:"child"}, "hello i am child") ,  React.createElement('h1', {id:"child2"}, "hello i am child2")])]
    
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);