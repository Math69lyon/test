/* Component relatif à la sous page About us 
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
} from "react-router-dom";

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

const c4Style = {
  background: "#4e4ea2",
  color: "white",
  padding: "1.5rem 1.5rem 5rem 1.5rem"
}

export class Component4 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 4000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c4Style}>
              <div className="component">
                <h1>Who We Are</h1>
                <p>
                  <button style={btn}>
                      <Link to="/aboutUs">
                        <Button
                          variant="outlined"
                          onClick={this.props.toggle}
                        >
                          About Us !
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

export default Component4;