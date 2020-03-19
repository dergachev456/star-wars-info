import React, { Component } from 'react'
import Loader from '../Loader/Loader'

const isEmpty = (prop) => (
    prop === null || prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
    return class LoadingHOC extends Component {
        render() {
            return isEmpty(this.props[loadingProp]) ?
                <Loader />
                : <WrappedComponent {...this.props} />
        }
    }
}

export default LoadingHOC;