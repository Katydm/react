import React from 'React';
class Register extends React.Component{
    render(){
        return(
            <div>
            <form  id="register_form" style={{display: block}}>
            <div class="login_module">
            <p>注册</p>
            <p><input type="text" placeholder="用户名" name="signup-username"/></p>
            <p style={{marginBottom: 31+"px"}}>
                <input type="text" placeholder="邮箱" name="signup-email"/>
            </p>
            <p style={{height:48+"px",lineHeight:48+"px"}}>
                <input type="password" placeholder="密码" name="signup-password"/>
            </p>
            <p style={{height: 48+"px",marginTop: 31+"px", display: none}}>
                <input type="password" placeholder="确认密码" name="signup-password2"/>
            </p>
            <p style={{margin:"24px 3px 0px"}}>
            <span>
        <input type="checkbox" checked="checked" name="check_read" id="check_read" style={{margin:"0px 3px 0px 0px",verticalAlign: middle}}/>

        </span>

        </p>
        </div>
            <div class="entry">
            <input type="submit" value="注册" id="signup-submit" style={{background: rgb(123, 24, 77),pointerEvents: auto}}/>
            </div>
            </form>
        )
    }
}
export default Register;