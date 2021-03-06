import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PrivateRouter = ({ isAuthenticated, ...rest }) =>
    isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRouter);
