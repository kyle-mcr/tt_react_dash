import React from "react";
import "./Accounts.css";
import PieChart from "react-minimal-pie-chart";
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  DateRange
} from "@appbaseio/reactivesearch";
import img from "./logo.jpg";

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
            dataField={["Acct", "Acct.search"]}
            title="Search"
            autosuggest={true}
            highlight={true}
            customHighlight={props => ({
              highlight: {
                pre_tags: ["<u>"],
                post_tags: ["</u>"],
                fields: {
                  text: {},
                  title: {}
                },
                number_of_fragments: 0
              }
            })}
            className="search-bar"
            queryFormat="and"
            placeholder="Search for an Account..."
          />
          <DateRange
            componentId="DateSensor"
            dataField="Pickup_Date"
            title="DateRange"
            className="date-bar"
            defaultValue={{
              start: new Date("2020-01-01"),
              end: new Date("2020-02-22")
            }}
            placeholder={{
              start: "Start Date",
              end: "End Date"
            }}
            focused={false}
            numberOfMonths={2}
            queryFormat="date"
            autoFocusEnd={true}
            showClear={true}
            showFilter={true}
            filterLabel="Date"
            URLParams={false}
          />
          <div className="col">
            <ReactiveList
              componentId="SearchResult"
              dataField="Acct"
              className="result-list-container"
              size={5}
              renderItem={this.AcctReactiveList}
              pagination
              URLParams
              react={{
                and: ["mainSearch", "DateSensor"]
              }}
            />
          </div>
        </ReactiveBase>
      </div>
    );
  }
  AcctReactiveList(data) {
    return (
      <div className="flex account-content" key={data._id}>
        <div className="flex column justify-center" style={{ marginLeft: 20 }}>
        <span className="piechart">
                  <PieChart
                    data={[
                      { title: "Trash", value: 10, color: "#E38627" },
                      { title: "Organics", value: 15, color: "#C13C37" },
                      { title: "Plastic", value: 20, color: "#6A2135" },
                      { title: "Glass", value: 10, color: "#ebc334" },
                      { title: "Metal", value: 15, color: "#dceb34" },
                      { title: "Paper", value: 20, color: "#9feb34" },
                      { title: "Cardboard", value: 15, color: "#34eb4f" },
                      { title: "Other", value: 20, color: "#34ebc6" }
                    ]}
                  />
                  {data.Volume} cubic feet filled
                </span>
          <div className="account-image">
            <img id="img" src={img} alt="TT" />
          </div>
          <div className="account-header">Account: {data.Acct}</div>

          <div className="flex column justify-space-between">
            <div>
              <div>
                Assigned Route:{" "}
                <span className="authors-list">{data.Assigned_Route}</span>
              </div>
              <div className="ratings-list flex align-center">
              </div>
              <div>
                <span className="avg-rating">
                  {data.Organics} ft3 Organics,
                </span>
                <span className="avg-rating">{data.Glass} ft3 Glass,</span>
                <span className="avg-rating">{data.Plastic} ft3 Plastic,</span>
                <span className="avg-rating">{data.Metal} ft3 Metal,</span>
                <span className="avg-rating">{data.Paper} ft3 Paper,</span>
                <span className="avg-rating">
                  {data.Cardboard} ft3 Cardboard,
                </span>
                <span className="avg-rating">{data.Trash} ft3 Trash,</span>
                <span className="avg-rating">{data.Other_Rec} ft3 Other</span>
              </div>
            </div>
            <span className="pub-year">Pick-up Weight: {data.Weight} lbs</span>
            <span className="pub-year">
              Date: {data.Pickup_Date} Time: {data.Pickup_Time}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Pickups;
