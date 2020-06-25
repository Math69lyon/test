import React from 'react'
import style from './recipe.module.css'
import Button from '@material-ui/core/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const button = {
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
  padding: "1.5rem"
}

const Recipe = ({ title, calories, image, ingredients, props, c2Style, button }) => {
    return (
        <div className={style.recipe}>
            <div className='h1'>
            <h1>{title}</h1>
            </div>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <div className='calories'>
                <h3>Calories</h3>
            </div>
            <p> {calories}</p>
            <img className={style.image} src={image} alt="" />
            {props => (
                <div style={props}>
                    <div style={c2Style}>
                        <div className="comment">
                            <p>
                              <button style={button}>
                                  <Link to="/homeConnect">
                                    <Button
                                      variant="outlined"
                                      onClick={this.props.toggle}
                                    >
                                      Comment
                                    </Button>
                                  </Link>
                              </button>
                            </p> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe