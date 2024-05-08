import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

const HelloWorld = ({data}) => {
  debugger
   // axios.get('https://jsonplaceholder.typicode.com/todos/1')
   //  .then(response => {
   //    console.log(response.data);
   //  })
   //  .catch(error => {
   //    console.error('Error fetching data:', error);
   //  });
  console.log(data)
  return (
    <React.Fragment>
      Greetingscscscscscccc : {data.title}
    </React.Fragment>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
