import React from "react";
import ReactDOM from "react-dom" ;
import { BrowserRouter as Router ,Route ,Link ,Switch} from 'react-router-dom';
import Home from 'pages/home/component/index.jsx';
import Discover from 'pages/discover/component/index.jsx';
import ShopCart from 'pages/shopcart/component/index.jsx';
import Personal from 'pages/mine/component/index.jsx';
import Layout from "pages/layout/component/index.jsx";
import productDetails from "pages/goods/component/index.jsx";
class App extends React.Component{


    render(){
console.log(this.props)
        return (

            <Router>
                <Layout>
                        <Route exact path='/' component={Home} />
                        <Route  path='/discover' component={Discover}/>
                        <Route  path='/shopCart' component={ShopCart}/>
                        <Route  path='/mine' component={Personal}/>
                        <Route  path='/goodsdetails/:id'component={productDetails}/>
                </Layout>
            </Router>

        )

    }

}

ReactDOM.render(
    <App/>,document.getElementById('app')
)

