import React from 'react';


const SelectorUi = (props) => {
   return(
    <label  className={props.ClassName} >
        <input type="radio" value={props.value} className="hide"  name="number_of_player"/>
        <span>{props.value} Players</span>
    </label>
   )
};

export default SelectorUi;
