import React ,{Component} from 'react';
import UserCard from './UserCard';
// // Functional component can be created like this
// const TerminalPractice = (props)=>{

//     return(
//         <div>abc</div>
//     )
// }

class TerminalPractice extends Component{
  state={
    name:"Cultus",
    description:"Suzuki has discontinued Cultus in Pakistan"
  }

    handlemethod = ()=>{
        return(
            <h1>calling the mehod</h1>
        )
    }   

  render(){
    return(
        <div>
               <UserCard name={this.state.name} description={this.handlemethod}/>
        </div>
    )
  }

}




export default TerminalPractice;
