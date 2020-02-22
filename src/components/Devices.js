import React from 'react';
import "./NavBar.css";

const Devices = () => {
  return (
    <div id="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Device #</th>
            <th scope="col">Truck #</th>
            <th scope="col">Route #</th>
            <th scope="col">Last Account Serviced</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">P001</th>
            <td>T123</td>
            <td>001</td>
            <td>787261</td>
            <td id="on">Online</td>
          </tr>
          <tr>
            <th scope="row">P002</th>
            <td>T126</td>
            <td>002</td>
            <td>891689</td>
            <td id="off">Offline</td>
          </tr>
          <tr>
            <th scope="row">P003</th>
            <td>T121</td>
            <td>002</td>
            <td>675162</td>
            <td id="off">Offline</td>
          </tr>
          <tr>
            <th scope="row">P004</th>
            <td>T129</td>
            <td>003</td>
            <td>354123</td>
            <td id="on">Online</td>
          </tr>
          <tr>
            <th scope="row">P005</th>
            <td>T130</td>
            <td>003</td>
            <td>434877</td>
            <td id="on">Online</td>
          </tr>
          <tr>
            <th scope="row">P006</th>
            <td>T135</td>
            <td>004</td>
            <td>018263</td>
            <td id="off">Offline</td>
          </tr>
          <tr>
            <th scope="row">P007</th>
            <td>T126</td>
            <td>005</td>
            <td>837145</td>
            <td id="on">Online</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Devices;
