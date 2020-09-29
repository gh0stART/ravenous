import React from 'react';
import './App.css';
import BusinessList from '../businessList/businessList';
import SearchBar from '../searchbar/searchbar';
import Yelp from '../../util/yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
}

export default App;
