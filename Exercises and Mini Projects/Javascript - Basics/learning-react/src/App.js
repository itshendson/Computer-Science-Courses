import React from "react"
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart'

// This is a Functional Component:
// function App() {
//   return (
//     <div>
//         <Header />
//         <Body />
//     </div>
//   );
// }

// This is a class-based Component:
class App extends React.Component {

  constructor() {
    super()
    this.state = {
        myFirstState: "Some data goes here"
    }
  }

  render() {
    return (
      <div>
          <Header />
          <Body />
          <Cart />
      </div>
    )
  }
}

export default App;
