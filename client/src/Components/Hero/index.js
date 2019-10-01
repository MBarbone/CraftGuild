import React from "react";
import NameSearch from "../NameSearch/index";
import StateSearch from "../StateSearch/index";
import TypeSearch from "../TypeSearch/index";
import { connect } from "react-redux";
import {
  nameSearch,
  stateSearch,
  typeSearch
} from "../../actions/search-actions";
import "./style.css";

class Hero extends React.Component {
  onNameSearchSelect = () => {
    this.props.onNameSearchSelect();
    console.log(this.props);
  };

  onStateSearchSelect = () => {
    this.props.onStateSearchSelect();
    console.log(this.props);
  };

  onTypeSearchSelect = () => {
    this.props.onTypeSearchSelect();
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-inner">
            <h1>Find Your Brew</h1>
            <h2>Your guide to finding breweries all across America</h2>
            <br></br>
            <h4>Search By:</h4>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <div className="nav-link active">Brewery Name</div>
              </li>
              <li className="nav-item" onClick={this.onStateSearchSelect}>
                <div className="nav-link">State</div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showNameSearch: state.search.showNameSearch,
  showStateSearch: state.search.showStateSearch,
  showTypeSearch: state.search.showTypeSearch
});

const mapActionsToProps = {
  onNameSearchSelect: nameSearch,
  onStateSearchSelect: stateSearch,
  onTypeSearchSelect: typeSearch
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Hero);
