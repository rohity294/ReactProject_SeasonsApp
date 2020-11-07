import React from 'react';

// const Spinner = (props)=>{
//     return(    
//   <div className="ui active dimmer">
//     {<div className="ui text loader">{props.message || 'Loading..'}</div>}
//   </div>
//     );
// };

const Spinner = (props)=>{
    return(    
  <div className="ui active dimmer">
    {<div className="ui text loader">{props.message}</div>}
  </div>
    );
};

Spinner.defaultProps = {
    message:'Currently Loading...'
};

export default Spinner;