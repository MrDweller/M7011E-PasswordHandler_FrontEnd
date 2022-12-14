import React from 'react';
import { Link } from "react-router-dom";

class UserTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_buttons : props.nav_buttons,
            is_open: false
        }
    }

    #render_nav_buttons() {
        return (
            this.state.nav_buttons.map(nav_button => {
                return (
                    <Link key={nav_button.id} to={nav_button.path} style={{textDecoration: 'none'}}>
                        <button className='user_tab_nav_button' onClick={() => {
                            nav_button.onClickCallback();
                        }}>
                            {nav_button.text()}
                        </button>
                    </Link>
                );
            })
        );
    }

    render() {
        if(this.props.loggedIn){
            return (
                <div className='user_tab'>
                    <img className="user_tab_img" src={`${this.props.pfp["pfpURL"]}?${this.props.pfp["pfpHash"]}`} alt="User Tab"/>
                    
                    <div className='user_tab_drop_down'>
                        {this.#render_nav_buttons()}
                    </div>


                </div>
            
        );
        }else{
            return (
                <div className='user_tab'>
                    <img className="user_tab_img" src={"https://passwordhandler.s3.eu-north-1.amazonaws.com/user_tab.png"} alt="User Tab"/>
                    
                    <div className='user_tab_drop_down'>
                        {this.#render_nav_buttons()}
                    </div>


                </div>
            
        );
        }
    }
}

export default UserTab;