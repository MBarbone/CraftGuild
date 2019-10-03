import React from "react";
import NameSearch from "../NameSearch/index";
import StateSearch from "../StateSearch/index";
import TypeSearch from "../TypeSearch/index";
import { connect } from "react-redux";
import {
  nameSearch,
  stateSearch,
  typeSearch,
  nameSearchSubmit
} from "../../actions/search-actions";
import "./style.css";

class Hero extends React.Component {
  state = {
    query: ""
  };

  onNameSearchSelect = () => {
    this.props.onNameSearchSelect();
    console.log(this.props);
  };

  onStateSearchSelect = () => {
    this.props.onStateSearchSelect();
    console.log(this.props);
  };

  activeStyle = () => {
    document.getElementById("nameSearchTab").classList.toggle("active");
    document.getElementById("stateSearchTab").classList.toggle("active");
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  };

  handleSubmit = (e, query) => {
    e.preventDefault();
    if (query === "") return;
    console.log("clicked");

    // history.push(`/search=${query}`);
  };

  render() {
    let condRender = null;
    let condRender2 = null;

    if (this.props.showNameSearch) {
      condRender = (
        <NameSearch
          query={this.query}
          handleChange={this.handleChange}
          handleSubmit={e => this.handleSubmit(e, this.state.query)}
        />
      );
    } else if (this.props.showStateSearch) {
      condRender = <StateSearch />;
    } else if (this.props.showTypeSearch) {
      condRender2 = <TypeSearch />;
    }

    return (
      <div>
        <section className="hero">
          <div className="hero-inner">
            <h1>Find Your Brew</h1>
            <h2>Your guide to finding breweries all across America</h2>
            <br></br>
            <h4>Search By:</h4>
            <ul className="nav nav-tabs">
              <li className="nav-item" onClick={this.onNameSearchSelect}>
                <div
                  className="nav-link active"
                  id="nameSearchTab"
                  onClick={this.activeStyle}
                >
                  Brewery Name
                </div>
              </li>
              <li className="nav-item" onClick={this.onStateSearchSelect}>
                <div
                  className="nav-link"
                  id="stateSearchTab"
                  onClick={this.activeStyle}
                >
                  State
                </div>
              </li>
            </ul>
            {condRender}
            {condRender2}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showNameSearch: state.search.showNameSearch,
  showStateSearch: state.search.showStateSearch,
  showTypeSearch: state.search.showTypeSearch,
  results: []
});

const mapActionsToProps = {
  onNameSearchSelect: nameSearch,
  onStateSearchSelect: stateSearch,
  onTypeSearchSelect: typeSearch,
  onNameSearchSubmit: nameSearchSubmit
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Hero);
