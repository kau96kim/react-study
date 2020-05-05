import React, { useReducer, Component } from 'react';


class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.increase = this.increase.bind(this);
  //   this.decrease = this.decrease.bind(this);
  // }

  state = {
    counter: 0
  };

  increase = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1 
    }));
  }
  decrease = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    const style = {margin: 3};
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase} style={style}>+</button>
        <button onClick={this.decrease} style={style}>-</button>
      </div>
    );
  }
}

export default Counter;

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const buttonStyle = {
//     margin: 3
//   };

//   const [number, dispatch] = useReducer(reducer, {
//     counter: 0
//   });

//   const increase = () => {
//     dispatch({
//       type: "INCREMENT"
//     });
//   };

//   const decrease = () => {
//     dispatch({
//       type: "DECREMENT"
//     });
//   };

//   return (
//     <div>
//       <h1>{number.counter}</h1>
//       <button onClick={increase} style={buttonStyle}>+</button>
//       <button onClick={decrease} style={buttonStyle}>-</button>
//     </div>
//   );
// }

// export default React.memo(Counter);