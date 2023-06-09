import React from "react";
import { Link } from "react-router-dom";

function Studio() {
  return (
    <div>
      <style>
        {`
    .profile-container {
        padding: 24px;
        margin: 24px;
        margin-bottom: 265px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
    }

    .box {
        display: inline-block;
        margin: 10px;
    }
    
    `}
      </style>

      <div className="profile-container">
        <div
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
        >
          <div
            style={{
              flex: 0.3,
              display: "inline-block",
              marginBottom: "10px",
              paddingRight: "64px",
            }}
          >
            <div className="card bg-base-300 shadow-xl">
              <div className="avatar">
                <img src={require("../static/images/studiofloorplan.jfif")} />
              </div>

              <div className="card-body items-center text-center">
                <h2 className="card-title white">Studio Floor Plan</h2>
              </div>
            </div>
          </div>

          <div
            className="bg-base-200 shadow-xl"
            style={{ flex: 1, marginLeft: "0px" }}
          >
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Apartment</th>
                    <th>Rent</th>
                    <th>Size</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>121</th>
                    <td>1100</td>
                    <td>670</td>
                    <td>Available</td>
                    <td>
                      <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th>220</th>
                    <td>1150</td>
                    <td>770</td>
                    <td>Available</td>
                    <td>
                    <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th>245</th>
                    <td>1250</td>
                    <td>850</td>
                    <td>3/6/2023</td>
                    <td>
                    <Link to="../book_apartment">
                        <b>Book</b>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
