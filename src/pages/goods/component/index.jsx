import React from 'react';
import './index.css';
import axios from "axios/index";
class productDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            i:''

        }
    }
    componentDidMount(){
        axios.get("http://lv55api.brolgatech.com/api/v1/categories/1/goods").then(res=>{
            this.setState({
                data:res.data.data,
                i:this.props.match.params.id
            })
        })
    }
    render(){

        const Data=this.state.data;
         console.log(Data.id);
        return (
            <div style={{marginBottom:55+'px'}}>
                <div className='single_product_img'><img src="" alt=""/></div>
                <div>
                    <div className="single_product_price">
                        <p>
                            <span>Swisse 胶原蛋白液 500ml</span>
                            <span>Swisse Hair Skin Nails 500ml</span>
                        </p>
                        <p>
                            <span>
                                <span>超惠价特卖中</span>
                            </span>
                        </p>
                    </div>
                    <p className='goods_price_wrap'>
                        <span>非会员价：￥300.61</span>
                        <span>￥148.93</span>
                    </p>
                </div>
                <div className="single_product_content">
                    <ul>
                        <li>
                            <span>规格：</span>
                            <span>500ml</span>
                            <span className="goincart">加入购物车</span>
                        </li>
                        <li>
                            <span>数量：</span>
                            <p>
                                <span id="reduce_num">-</span>
                                <span id="goods_num">1</span>
                                <span id="add_num">+</span>
                            </p>
                            <p><span id="go_pay">开心结算</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default productDetails;