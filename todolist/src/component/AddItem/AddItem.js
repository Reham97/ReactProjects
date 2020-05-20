import React,{Component} from 'react'
import './AddItem.css'
class AddItem extends Component{
    state = {
        name : '',
        duration : ''
    }

    handleChange = (e) =>{
        // console.log(e.target.value+"  "+ e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        //3l4an hwa by3ml refresh m nfsoh
        e.preventDefault();
        if(this.state.name && this.state.duration )
        {
            this.props.addItem(this.state)
            this.setState({
                name: '',
                duration:''
            })
        }

    }


  render()
    {
      return (
        <div className = "AddItem" >
            <form onSubmit={this.handleSubmit}>
            <input type = "text" placeholder="Enter New Step .... " id="name" onChange={this.handleChange} value={this.state.name} ></input>
            <input type = "number" min="0" placeholder="Enter duration .... " id="duration" onChange={this.handleChange} value={this.state.duration} ></input>
            <input type = "submit"value="ADD"></input>
            </form>
        </div>
      );
    }
}
export default AddItem;
