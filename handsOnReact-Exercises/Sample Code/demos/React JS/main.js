


// Topic: Element Rendering

const rootElement = document.getElementById('root');
// const element = React.createElement(
//     'div',{className:'Container'},'Children Example'
// )
// console.log(element);

///////////////////////////
// Introduction to JSX   //
///////////////////////////

// const exampleText = 'Apple'
// const exampleNumber = 555
// function concatString(str1,str2){
//     return str1+': '+str2
// }
// const element = <p className="Container">
// Here are some example text: {exampleText}<br></br> 
// here are some example Number: {exampleNumber}<br></br> 
// and an example output from a function: <br></br> 
// {concatString(exampleText,exampleNumber)}</p>

// ReactDOM.render(element,rootElement);


/////////////////////////////
//// React Components //////
////////////////////////////

// Two types of react components
// 1. Functional React Component - Uses function
// 2. Class React Component - Uses Classes


// // FUNCTIONAL REACT COMPONENT EXAMPLE
// function SampleButton(){
//     return <div><button>Sample Button</button></div>;
// }
// // CLASS REACT COMPONENT EXAMPLE
// class SampleComponent extends React.Component{
//     render(){
//         return <div>Hello Class Component</div>;
//     }
// }
// function App(){
//     return(
//     <div>
//         <SampleButton />
//         <SampleComponent />
//         <SampleComponent />
//     </div>
//     );
// }
    
// ReactDOM.render(<App />,rootElement);

// Props
// Properties

// function Greeter(props){
//     return <h1>Hello, {props.name}, My Name is {props.name2}</h1>;
// }

// class Greeter2 extends React.Component{
//     render(){
//         return(
//             <h1>Example of a {this.props.name}</h1>
//         )
//         }
//     }


// function App(){
//     return(
//         <div>
//         <Greeter name='Joe' name2='Joejoe'/>
//         <Greeter2 name='JoeMama' />
//         </div>
//     )
// }
// ReactDOM.render(<App />, rootElement);

// Topic: Spread Operator on Props

// function SampleComponent(props){
//     return(
//         <div>First Name: {props.fname} Last Name: {props.lname}</div>
//     )
// }

// function SpreadExample(){
//     const props = {fname:'Christopher',lname:'Caysido'};
//     return <SampleComponent {...props}/>
// }
// ReactDOM.render(<SpreadExample />,rootElement);


//////////////////////////////////
//// Prop Types //////////////////
//////////////////////////////////

// class Greeter extends React.Component{
//     render(){
//         <div>Example Greeting: {this.props.greetings}</div>
//     }
// }

// Greeter.propTypes = {
//     greetings: PropTypes.string.isRequired, // Must be a string
// };

// console.log(Greeter.propTypes)

// const element = <Greeter greetings='Hello World'/>

// ReactDOM.render(element,rootElement);


// Javascript map() method

// var sampleArray = ['sampleName1','sampleName55','sampleName3','sampleName2'];
// var newArray = sampleArray.map(addCool)
// console.log(newArray)


// function addCool(item){
//     return item+' is Cool';
// }

// Javascript For Loop

// for(let index=0;index < 55;index++){
//     let newArray = [];
//     newArray[index] = index * 100;
//     console.log(newArray[index]);
// }

// Javascript map() with arrow function

// var array3 = [55,56,57,58];
// var newArray2 = array3.map((array3)=>array3*50)
// newArray2.forEach(element => {console.log(element)
// });

///////////////////////////////////////////
//// Rendering Multiple React Elements ////
///////////////////////////////////////////

// function FruitList(props){
//     const fruitDataList = props.fruits.map((fruit) =>
//         <li key={fruit.id}>{fruit.name}</li>
//     )
//     return <ul>{fruitDataList}</ul>
// }

// const data = [
//     { id: 1, name: 'apple' },
//     { id: 2, name: 'orange' },
//     { id: 3, name: 'blueberry' },
//     { id: 4, name: 'banana' },
//     { id: 5, name: 'kiwi' },
//   ];

// ReactDOM.render(<FruitList fruits={data} />,rootElement)
  
/////////////////////////////////////////////////
/// Rendering Multiple React Components//////////
/////////////////////////////////////////////////

// Create a component for the individual items of the List
// function FruitItemList(props){
//     return <div class="container"><button id={props.fruit.name}>{props.fruit.name}</button><br></br></div>
// }

// function FruitList(props){
//     const fruitListItems = props.fruits.map((fruit)=>(
//     <FruitItemList key={fruit.id} fruit={fruit}/>));
//     return <ul>{fruitListItems}</ul>
// }

// const data = [
//     { id: 1, name: 'apple' },
//     { id: 2, name: 'orange' },
//     { id: 3, name: 'blueberry' },
//     { id: 4, name: 'banana' },
//     { id: 5, name: 'kiwi' },
//   ];

// ReactDOM.render(<FruitList fruits={data}/>,document.getElementById('root'))

////////////////////////
//// Event Handlers/////
////////////////////////

/// Vanilla JS Event Handling
// var headerNumber = 0;

// function handleClick(){
//     var newText = document.createElement('h1');
//     newText.setAttribute('id','header'+headerNumber)
//     var textNode = document.createTextNode('New Header 1');
//     newText.append(textNode);
//     rootElement.appendChild(newText);
//     headerNumber = headerNumber++;
// }

// function removeButton(){
//     var latestButton = document.getElementById('header'+headerNumber);
//     latestButton.remove()
// }


// React JS Function Component
function handleClick(){
    console.log('Button Works');
}

function ButtonComponent(){
    return <button onClick={handleClick}>Click Me!</button>
}



// React Class Component

// class ClassButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleClick2 = this.handleClick2.bind(this);
//     }
//     handleClick2(){
//         console.log('Button Worked')
//     }
//     render(){
//         return <button> Name of Button </button>
//     }
// }


// function Elements(){
//     return(
//         <div>
//         <ButtonComponent /> <br></br>
//         <ClassButton />
//         </div>  
//     )
// }

// ReactDOM.render(<Elements />,rootElement);