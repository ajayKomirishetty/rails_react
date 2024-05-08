import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

const HelloWorld = (props) => {
   axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  return (
    <React.Fragment>
      Greeting : {'data'}
    </React.Fragment>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
