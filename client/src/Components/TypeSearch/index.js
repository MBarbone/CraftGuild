import React from "react";

class TypeSearch extends React.Component {
  render() {
    return (
      <div
        className="input-group mb-3 brewery-search-landing"
        style={{ height: "38px" }}
      >
        <select className="ui fluid dropdown">
          <option value="">State</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="large">Large</option>
          <option value="planning">Planning</option>
          <option value="Bar">Bar</option>
          <option value="contract">Contract</option>
          <option value="proprietor">Proprietor</option>
        </select>
        <button
          className="btn btn-md btn-outline-light m-0 px-3 py-2 z-depth-0 waves-effect"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    );
  }
}

export default TypeSearch;
