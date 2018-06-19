import React from 'react';
import Header from 'pages/header/component/index.jsx';
import Footer from 'pages/footer/component/index.jsx';
class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.path)
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Layout;