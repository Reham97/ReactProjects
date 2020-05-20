import React,{Component} from 'react'
import TodoItems from './component/TodoItems/TodoItems'
import AddItem from './component/AddItem/AddItem'

class App extends Component{

  state = {
    id :3,
    items : [
      {id:1, name:'Computer Science - Ain Shams',duration:2015},
      {id:2, name:'ITI',duration:2019},
    ]
  }

  deleteItem = (id) =>{
    let items = this.state.items;
    let i = items.findIndex(item=>item.id === id);
    items.splice(i,1);

    this.setState({items})

    // this.setState({items:items})
    // console.log(id);
  }

  addItem = (item)=> {
    let items =  this.state.items;
    let id =  this.state.id;
    item.id = id;
    id++;

    items.push(item);
    this.setState({items});
    this.setState({id});
  }

  render()
    {
      return (
        <div className="App container">
        <h1 className="text-center">My Education</h1> 
        <TodoItems deleteItem = {this.deleteItem} items={this.state.items}/>
        <AddItem addItem={this.addItem} />
        </div>
      );
    }
}
export default App;
