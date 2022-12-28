import React from "react";
import Header from '../navbar/Header';

class NoPage extends React.Component {
    render() {
        return (
            < >
                <Header login={this.props.login} setLogin={this.props.setLogin} />
                <div className='nopage'>
                    <p>404</p>
                </div>
            </>
        );
    }
}

export default NoPage;