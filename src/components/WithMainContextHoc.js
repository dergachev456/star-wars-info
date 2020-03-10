import React from 'react'
import MainContext from '../App'
export const WithMainContextHOC = (Component) => {
    return (props) => {
        return (
            <MainContext.Consumer>
                {({ getId }) => {
                    return <Component {...props} getId={getId} />
                }}
            </MainContext.Consumer>
        )
    }
}

