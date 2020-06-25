import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListComment from './Comments/ListComment'
import Connection from './Auth/Connection'

class HomeConnect extends Component {
    
    render () {
        const { isAuthenticated } = this.props
        return (
            <div>
                { isAuthenticated ? <ListComment /> : <Connection/> }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.isAuthenticated
})
  
export default connect(mapStateToProps)(HomeConnect)