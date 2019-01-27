import React,{ Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
    };

    this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.data
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.data
    });
  }

  inputChange(event) {
    let currentCars = [];
    let searchedCars = [];

    if (event.target.value !== "") {
      currentCars = this.props.data;

      searchedCars = currentCars.filter(car => {
        const updateCase = car.toLowerCase();
        const filter = event.target.value.toLowerCase();
      return updateCase.includes(filter);
      });
    } else {
    searchedCars = this.props.data;
    }

    this.setState({
      filtered: searchedCars
    });
  }

  render () {
    return (
      <div>
        <input placeholder="Transmission Type" type="text" className="input" onChange={this.inputChange} value={this.state.search}/>
      </div>
    )
  }
}

export default Search;
