import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:""
        }
    }

    componentDidMount(){
        axios.get("http://lv55api.brolgatech.com/api/v1/categories/1/goods").then(res=>{
            this.setState({
                data:res.data.data
            })
        })
    }
    render(){
        // const Data=this.state.data;

        const Data=this.state.data;
        console.log(Data);
        if(Data){
            return(
                <div>
                    <ul className = "goods_list" >
                        {
                            Data.map((data,i)=>(
                                < li className = "goods_warp" key={data.id}>
                                    <Link to={{pathname:"goodsdetails/"+data.id}}>
                                        <div className = "goods_pic" >
                                            <div>< img src = {data.image1} alt = "" /></div>
                                        </div>
                                        <span className="goods_title">{data.cn_title}</span>
                                        <p className="goods_price"><span>${data.price}</span></p>
                                    </Link>
                                </li>
                                )
                            )
                        }
                    </ul>

                </div>

            )
        }else{
            return(
                <div>加载中...</div>
            )
        }
    }
}
export default Home;