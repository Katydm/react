import React from 'react';
import Register from 'pages/register/component/index.js'
class Personal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.location.pathname)
        return(
            <div>
               content: Personal
                <Register/>
            </div>

        )
    }
}
export default Personal;