/* Component relatif à la sous page Api Recipes User 
    Css directement intégré
*/


import React, { Component } from "react"
import Button from '@material-ui/core/Button'
import { Spring } from 'react-spring/renderprops'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const btn = {
  backgroundColor: "#80deea",
  color: "#006064",
  '&:hover': {
      color: '#80deea',
      borderColor: '#80deea',
      backgroundColor: '#006064',
      textTransform: "uppercase"
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
}

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 2000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <div className="component">

                <h1>Registration</h1>
                <p>
                  <button style={btn}>
                      <Link to="/registration">
                        <Button
                          variant="outlined"
                          onClick={this.props.toggle}
                        >
                          Sign Up !
                        </Button>
                      </Link>
                  </button>
                </p> 
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Component2;