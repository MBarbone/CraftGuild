import React from "react";

class NameSearch extends React.Component {
  render() {
    return (
      <div className="input-group mb-3 brewery-search-landing">
        <input
          type="text"
          className="form-control"
          placeholder="Brewery Search"
          aria-label="Brewery Search"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-md btn-outline-light m-0 px-3 py-2 z-depth-0 waves-effect"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default NameSearch;
