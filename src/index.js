import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (success)=>{console.log(success)}, 
//         (err)=>{console.log(err)}
//         );

//     return(
//       <div>Latitude:</div>
//     );
// };

//functional component above viz-a-viz class based component below

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {lat:null, errorMessage:''};  
    // }

    state = {lat:null, errorMessage:''}; 

    componentDidMount(){
        //console.log('ComponentDidMount called');
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                //call setState to anytime re-render our component, 
                //and not this.state.lat = position.coords.latitude with the only exception of initialization in constructor
                this.setState({lat:position.coords.latitude});
            }, 
            (err)=>{
                this.setState({errorMessage:err.message})
            }
            );
    }

    // componentDidUpdate(){
    //     console.log('ComponentDidUpdate called')
    // }

    // render(){
    //         if(this.state.lat && !this.state.errorMessage)
    //         {
    //             // return <div>Latitude:{this.state.lat}</div>;
    //             return <SeasonDisplay lat={this.state.lat} />;
    //         }
    //         else if(!this.state.lat && this.state.errorMessage)
    //         {
    //             return <div>Error:{this.state.errorMessage}</div>;
    //         }
    //         else{
    //             // return <div>Loading Content..</div>;
    //             return <Spinner message="Please allow location access request"/>;
    //         }
    // }
   
    renderContent(){
        if(this.state.lat && !this.state.errorMessage)
        {
            // return <div>Latitude:{this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat} />;
        }
        else if(!this.state.lat && this.state.errorMessage)
        {
            return <div>Error:{this.state.errorMessage}</div>;
        }
        else{
            // return <div>Loading Content..</div>;
            return <Spinner message="Please allow location access request"/>;
        }
    };

    render(){
        return(
            <div className="borderRed">
                {this.renderContent()}
            </div>
        );
    };
}

ReactDOM.render(<App/>,document.querySelector('#root'))