import React from 'react';
import './header.css';
import { Link }     from 'react-router-dom';
class Header extends React.Component{
    render() {
        return(
            <div className='header'>
                <Link to='/home'>
                <div className="logo">
                </div>
                </Link>
                <div className="search">
                    <input className="search_text" type="text" placeholder="搜商品名称，品牌，种类"/>
                    <span className="search_bnt"><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
                </div>
            </div>
        )
    }
}
export default Header;