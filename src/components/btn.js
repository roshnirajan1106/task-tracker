//import React from 'react'
import PropTypes from 'prop-types' ;

const button = ({color,text}) => {
    
    return (
        <div>
         <button  style={{backgroundColor:color}} className="btn" >{text}</button>   
        </div>
    )
    }
    button.defaultProps ={
        color :'streetblue'
    }
   
    button.propTypes ={
        text : PropTypes.string,
        color:PropTypes.string,
        
    }
export default button
