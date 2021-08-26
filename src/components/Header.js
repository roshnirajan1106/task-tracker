import Button from './btn'

const Header = (props) => {
  
    return (
        <div>
         <header className ='header'>
             <h1>{props.title} </h1>
             <Button color="green" text="Add" onClick ={props.onAdd}/> 
             </header>
        </div>
    )
}
Header.defaultProps = {
    title :'Task Tracker',
}

export default Header
