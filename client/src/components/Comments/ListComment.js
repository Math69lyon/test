import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import AddComment from './AddComment'
import Comment from './Comment'
import { connect } from 'react-redux'
import { getComments, getCommentsByFollowingUsers } from '../../actions/commentActions'
import LoadingComments from './LoadingComments'

class ListComment extends Component {
    constructor (props) {
        super(props)

        this.state = {
            allComments: true
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ allComments: event.target.checked })
    }

    componentDidMount() {
        this.props.getComments()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.allComments !== this.state.allComments) {
            this.state.allComments
            ? this.props.getComments()
            : this.props.getCommentsByFollowingUsers()
        }
    }

    render () {
        const { list, loading } = this.props
        const { allComments } = this.state
        const items = list && list.map(el => <Comment key={el._id} post={el} />)
        return (
            <div>
                <AddComment />
                <FormControlLabel
                    control={
                        <Switch checked={allComments} onChange={this.handleChange} />
                    }
                    label={allComments ? 'All comments' : 'From following users'}
                />
                { loading ? <LoadingComments /> : items}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.comment.list,
    loading: state.comment.loading
})

export default connect(mapStateToProps, { getComments, getCommentsByFollowingUsers })(ListComment)