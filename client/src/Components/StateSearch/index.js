import React from "react";
import { connect } from "react-redux";
import { typeSearch } from "../../actions/search-actions";
import TypeSearch from "../TypeSearch/index";

class StateSearch extends React.Component {
  onTypeSearchSelect = () => {
    this.props.onTypeSearchSelect();
    console.log(this.props);
  };
  render() {
    let typeSearchComponent = null;
    let buttonText = "";
    if (this.props.showTypeSearch === false) {
      buttonText = "Show Type Search";
    } else {
      buttonText = "Hide Type Search";
      typeSearchComponent = <TypeSearch />;
    }
    return (
      <div className="brewery-search-landing">
        <div className="input-group mb-3" style={{ height: "38px" }}>
          <select className="ui fluid dropdown">
            <option value="">State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <button
            className="btn btn-md btn-outline-light m-0 px-3 py-2 z-depth-0 waves-effect"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        {typeSearchComponent}
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onTypeSearchSelect}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTypeSearch: state.search.showTypeSearch
});

const mapActionsToProps = {
  onTypeSearchSelect: typeSearch
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(StateSearch);
