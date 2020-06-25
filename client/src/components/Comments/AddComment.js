import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentActions'


const styles = {
    paper: {
        padding: 8
    },
    textField: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e0f7fa',
        '&:hover': {
            color: '#212121',
            backgroundColor: '#a7ffeb'
        }

    }
}

class AddComment extends Component {
    constructor (props) {
        super(props)
        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        this.setState({ text: e.target.value })
    }
    
    handleSubmit (e) {
        e.preventDefault()

        const commentData = {
            text: this.state.text
        }

        this.props.addComment(commentData)
        this.setState({ text: ''})
    }

    render () {
        const { classes } = this.props
        return (
            <Paper className={classes.paper}>
                <TextField
                    multiline
                    rowsMax="4"
                    label="Your opinion !"
                    className={classes.textField}
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <Button 
                    variant="outlined"
                    className={classes.button}
                    onClick={this.handleSubmit}
                >
                    Send
                </Button>
            </Paper>
        )
    }
}



export default connect(null, { addComment})(withStyles(styles)(AddComment))