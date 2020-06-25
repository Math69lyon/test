/* Component relatif à la sous page Api Ademam Recipes 
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
  backgroundColor: "steelblue",
  color: "#80deea",
  '&:hover': {
      color: 'steelblue',
      borderColor: 'steelblue',
      backgroundColor: 'steelblue',
      textTransform: "uppercase"
  }
}

const c3Style = {
  background: "skyblue",
  color: "white",
  padding: "1.5rem 1.5rem 5rem 1.5rem"
}

export class Component3 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 3000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c3Style}>
              <div className="component">
                <h1>Connection</h1>
                <p>
                  <button style={btn}>
                      <Link to="/connection">
                        <Button
                          variant="outlined"
                          onClick={this.props.toggle}
                        >
                          Sign In !
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

export default Component3