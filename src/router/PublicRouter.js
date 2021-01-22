import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const PublicRouter = ({ isAuthenticated, component, path, ...rest }) =>
    isAuthenticated ? <Redirect to="/" /> : <Route path={path} component={component} {...rest} />;

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PublicRouter);
