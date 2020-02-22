import React from "react";
import "./NavBar.css";
import { useAuth0 } from "../react-auth0-spa";

const Accounts = () => {
  return (
    <div id="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Trash Bins Owned</th>
            <th scope="col">Recycing Bins Owned</th>
            <th scope="col">Route</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">56176</th>
            <td>CVS</td>
            <td>14</td>
            <td>17</td>
            <td>004</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">21756</th>
            <td>Ralphs</td>
            <td>12</td>
            <td>14</td>
            <td>003</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">17867</th>
            <td>Costco</td>
            <td>19</td>
            <td>24</td>
            <td>003</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">56123</th>
            <td>Whole Foods</td>
            <td>5</td>
            <td>7</td>
            <td>004</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">63716</th>
            <td>Safeway</td>
            <td>12</td>
            <td>12</td>
            <td>005</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">54312</th>
            <td>Starbucks</td>
            <td>2</td>
            <td>3</td>
            <td>004</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">24231</th>
            <td>Target</td>
            <td>18</td>
            <td>22</td>
            <td>001</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">73982</th>
            <td>Sherwin-Williams</td>
            <td>7</td>
            <td>7</td>
            <td>002</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">13423</th>
            <td>Petco</td>
            <td>4</td>
            <td>4</td>
            <td>002</td>
            <td>Commercial</td>
          </tr>
          <tr>
            <th scope="row">54532</th>
            <td>Walmart</td>
            <td>14</td>
            <td>15</td>
            <td>001</td>
            <td>Commercial</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
