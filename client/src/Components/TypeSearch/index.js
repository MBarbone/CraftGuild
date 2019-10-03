import React from "react";

class TypeSearch extends React.Component {
  render() {
    return (
      <div
        className="input-group mb-3 brewery-search-landing"
        style={{ height: "38px" }}
      >
        <select className="ui fluid dropdown">
          <option value="">Type</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="large">Large</option>
          <option value="planning">Planning</option>
          <option value="Bar">Bar</option>
          <option value="contract">Contract</option>
          <option value="proprietor">Proprietor</option>
        </select>
      </div>
    );
  }
}

export default TypeSearch;
