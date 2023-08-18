import { useEffect, useState } from 'react';
import './App.css';
import CardList from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredArray, setFilteredArray] = useState(monsters);

  console.log('rendered')
  const onSearchChange = (event)=> {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString)
      }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  },
  [])

  // in the code below we are saying that whenever the monster array is changed or 
  // the searchfield is change then only run the use effect listed below
  // this is done to save time and not unnecessaraliy calling the function
  useEffect(()=>{
    const newFilteredArray = monsters.filter((Monsters) => Monsters.name.toLowerCase().includes(searchField));
    setFilteredArray(newFilteredArray);
  }
  ,[monsters, searchField])



  return(
      <div className="App">
        <h1 className='app-title'>Hello Kitties</h1>
        <SearchBox 
          onSearchHandler = {onSearchChange} 
          placeholder = 'search monsters' 
          className = 'search-box'/>
        <CardList monsters = {filteredArray}/>
      </div>
  )
}

// using class components

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       Monsters: [],
//       searchField : ''
//     }
// }

//   componentDidMount(){
//     
//   }

//   onSearchChange = (event)=> {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(()=>{return{searchField}})
//   }

//   render(){

//     const {Monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredArray = Monsters.filter((Monsters) => Monsters.name.toLowerCase().includes(searchField))

//     return (
//       <div className="App">
//         <h1 className='app-title'>Hello Kitties</h1>
//         <SearchBox onSearchHandler = {onSearchChange} placeholder = 'search monsters' className = 'search-box'/>
//         <CardList monsters = {filteredArray}/>
//       </div>
//     );
//   }
// }

export default App;
