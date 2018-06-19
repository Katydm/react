import React from 'react';
import './index.css'
import { BrowserRouter as Router ,Route ,Link ,Switch} from 'react-router-dom';

class ShopCart extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.location.pathname)
        return(
            <div>
                <div className="no_goods">
                    <p>您的购物车中还没有任何商品</p>
                </div>
                <div className="startshopping_bnt">
                    <Link to='/'>开始购物</Link>
                </div>
            </div>

        )
    }
}
export default ShopCart;