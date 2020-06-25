import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { connectionUser } from '../../actions/authActions'

const styles = {
    textField: {
        marginTop: '1%',
        marginRigth: '1%',
        width: '100%'
    },
    btnBlock: {
        textAlign: 'center',
        margin: '2%'
    }
}

class Connection extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)   
    }

    componentDidMount () {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit (e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.connectionUser(userData)
    }

    render () {
        const { classes } = this.props;
        const { errors } = this.state
        return (
            <Paper style={{ padding: 8 }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        variant="outlined"
                        type="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true : false}
                        placeholder="Ex: koko@koko.com" />
                        
                    <TextField
                        variant="outlined"
                        type="password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true : false}
                        placeholder="Tape your password" />

                    <div className={classes.btnBlock}>
                    <Button variant="contained" style={{ backgroundColor: '#80cbc4' }} type="submit" className={classes.button} startIcon={<SaveIcon />} value="Submit">OK</Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { connectionUser })(withRouter(withStyles(styles)(Connection)))
