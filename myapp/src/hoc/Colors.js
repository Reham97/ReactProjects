import React from 'react';

const Colors = (WrappedComponent) => {
  
  const colors=['yellow','blue','green','pink']
  const randomcolor = colors[Math.floor(Math.random()*3)];
  const className = randomcolor + '-text';
  console.log(className);
  

  return(props) =>{
    return(
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )

  }
}
export default Colors
