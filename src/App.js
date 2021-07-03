
import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(data=> this.setState({ monsters:data}));

  }

  render(){
    return (
      <div className="App">
        <h1>Monsters Saga</h1>
        <SearchBox placeholder = "Search monsters" handleChange = {e => {this.setState({searchField:e.target.value})}}/>
        <CardList monsters ={this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))} />
      </div>
    );

  }

}


export default App;
