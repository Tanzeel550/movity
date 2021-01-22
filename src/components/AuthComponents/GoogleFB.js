import React from 'react';
import { startLoginWithGoogle } from '../../actions/authActions';

class GoogleFB extends React.Component {
    render() {
        return (
            <div className="flex-c-m">
                <button className="social__item facebook-icon">
                    <i className="zmdi zmdi-facebook" />
                </button>

                <button className="social__item google-icon" onClick={startLoginWithGoogle}>
                    <i className="zmdi zmdi-google" />
                </button>
            </div>
        );
    }
}

export default GoogleFB;
