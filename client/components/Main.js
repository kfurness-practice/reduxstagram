import React from 'react';
import { Link } from 'react-router';



// const Main = React.createClass({
export default class Main extends React.Component {

  render()  {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
