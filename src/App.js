// Core
import { Component } from "react";

// Components
import { CardList } from "./CardList";
import { SearchBar } from "./SearchBar";

// Styles
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
  };

  componentDidMount = () =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) => this.setState({ robots: users }));

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { robots, searchField } = this.state;
    const filteredRobotsArr = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return robots.length < 1 ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 mb3">ROBOFRIENDS</h1>
        <SearchBar onChange={this.handleChange} />
        <CardList data={filteredRobotsArr} />
      </div>
    );
  }
}

export default App;
