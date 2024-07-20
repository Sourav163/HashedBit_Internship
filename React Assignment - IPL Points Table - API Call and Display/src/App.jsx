import "./App.css";
import TableRow from "./components/TableRow";

// Create a table for displaying the points of IPL Season 2022.
//     The data is provided in this API endpoint:
//         https://my-json-server.typicode.com/FreSauce/json-ipl/data
// Use a script to fetch the data from the given API endpoint. Sort the data fetched in ascending order based on the NRR value of each team. Display the sorted data in the table.

// Sample - https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/assignment/question/bafab3d0831447f794446aad34184ee7.png

let api = await fetch(
  "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
);
let ipl = await api.json();

ipl.sort((a, b) => a.NRR - b.NRR);

function App() {
  return (
    <>
      <div className="container">
        <h1>IPL Season 2022 Points</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {ipl.map((team) => (
              <TableRow
                key={team.No}
                no={team.No}
                team={team.Team}
                matches={team.Matches}
                won={team.Won}
                lost={team.Lost}
                tied={team.Tied}
                nrr={team.NRR}
                points={team.Points}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
