

// const element = document.createElement('div');
// element.textContent = 'Hello World';
// element.className = 'container';
// rootElement.appendChild(element);

// const element = React.createElement(
//     'div',
//     {
//     className: 'container',
//     children: ['Hello World', 'Goodbye World']
//     }
//   );
//   console.log(element)
function HelloWorld() {
    return <div className="container">Hello Function Component</div>;
  }
  const rootElement = document.getElementById('root');
  ReactDOM.render(<HelloWorld />, rootElement);