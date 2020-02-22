import React from 'react';
import './Accounts.css';
import {
  ReactiveBase,
  DataSearch,
  ReactiveList
} from "@appbaseio/reactivesearch";

class Pickups extends React.Component {
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="trash_tracker_dash"
          credentials="5weQkiaNq:86fc19c3-ca7d-4778-9c11-a37c5a981b6c"
        >
          <DataSearch
            componentId="mainSearch"
            dataField={["Acct"]}
            title="Search"
            autosuggest={true}
            highlight={true}
            className="search-bar"
            queryFormat="and"
            placeholder="Search for an Account..."
          />
          <div className="col">
            <ReactiveList
              componentId="SearchResult"
              dataField="Acct.raw"
              className="result-list-container"
              size={5}
              renderItem={this.AcctReactiveList}
              pagination
              URLParams
              react={{
                and: ["mainSearch"]
              }}
            />
          </div>
      </ReactiveBase>
      </div>
    );
  }
  AcctReactiveList(data) {
    return (
      <div className="flex account-content" key={data._id} >
        <div className="flex column justify-center" style={{ marginLeft: 20 }}>
          <div className="account-header">{data.Acct}</div>
          <div className="flex column justify-space-between">
            <div>
              <div>
                Assigned Route: <span className="authors-list">{data.Assigned_Route}</span>
              </div>
              <div className="ratings-list flex align-center">

                <span className="avg-rating">{data.Volume} cubic feet filled</span>
                </div>
                <div>
                <span className="avg-rating">{data.Organics} ft3 Organics,</span>
                <span className="avg-rating">{data.Glass} ft3 Glass,</span>
                <span className="avg-rating">{data.Plastic} ft3 Plastic,</span>
                <span className="avg-rating">{data.Metal} ft3 Metal,</span>
                <span className="avg-rating">{data.Paper} ft3 Paper,</span>
                <span className="avg-rating">{data.Cardboard} ft3 Cardboard,</span>
                <span className="avg-rating">{data.Trash} ft3 Trash,</span>
                <span className="avg-rating">{data.Other_Rec} ft3 Other</span>
              </div>
            </div>
            <span className="pub-year">
              Weight: {data.Weight} lbs
            </span>
            <span className="pub-year">
              Date: {data.time} 
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Pickups;
