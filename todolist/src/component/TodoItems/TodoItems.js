import React from 'react'
const TodoItems = (props) =>{
    const {items,deleteItem} = props;
    const ListItems = items.length ? (items.map(item =>{   
        return(
            <div key={item.id}>
                <span className="name">{item.name} </span>
                <span className="duration">{item.duration} </span>
                <span className="action icon" onClick={()=>deleteItem(item.id)}> &times; </span>
            </div>
        )
    } )) : (
            <p>
                No Items To Show
            </p>
     )
    return(
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="duration title">Duration</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}

        </div>
    )
}

export default TodoItems 