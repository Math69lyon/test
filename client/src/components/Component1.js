/* Component relatif à la sous page Api Recipes User 
    Css directement intégré
*/


import React, { Component } from "react"
import Button from '@material-ui/core/Button'
import { Spring } from 'react-spring/renderprops'
import { Link } from "react-router-dom"

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

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
}


export class Component1 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c1Style}>
              <div className="component">
                <h1>Here are the recipes</h1>
                <p>
                  <button style={btn}>
                      <Link to="/recipe">
                        <Button
                          variant="outlined"
                          onClick={this.props.toggle}
                        >
                          Find Recipe !
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

export default (Component1)