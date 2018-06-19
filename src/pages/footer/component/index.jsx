import React from 'react';
import './footer.css'
import { BrowserRouter as Router ,Route ,Link ,Switch} from 'react-router-dom';


class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tabArray:[
                    {id:'1',content:'主页',link:'/'},
                    {id:'2',content:'发现',link:'/discover'},
                    {id:'3',content:'购物车',link:'/shopCart'},
                    {id:'4',content:'我的',link:'/mine'}
            ],
            num:'/'
        }

    }
    tabChange(link){
        this.setState({
            num:link
        })

    }

    render(){

        return(

                <div className='bottomTop'>
                    <div className="footer_warp">
                        <ul className="footer">
                            {
                                this.state.tabArray.map((item,i)=>{
                                    let iconName=item.link==this.state.num? 'nicon'+[item.id] : 'icon'+[item.id];
                                    let fontName=item.link==this.state.num? 'special':'';

                                    return(

                                            <Link  key={i} to={{pathname:item.link}} onClick={(e)=>{this.tabChange(item.link,e)}}>
                                                <li>
                                                    <p className={iconName}></p>
                                                    <span className={fontName}>{item.content}</span>
                                                </li>
                                            </Link>

                                        )

                                })
                            }
                        </ul>
                    </div>
                </div>


        )


    }
}
export default Footer;