import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      name: e.target.value,
      count: this.state.count +1
    });
  }
  handleClick() {
    this.setState({
      count: 0,
      name: ""
    }
    )
  }
  render() {
    return(
      <>
        <h2>{this.state.count}</h2>
        <h1>{this.state.name}</h1>
        <input
          value={this.state.name}
          name="name"
          type="text"
          onChange={this.handleChange}
          />
          <button
              onClick={this.handleClick}
          >Reset</button>
      </>
    );
  }
}
export default Main;