import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td className="no-col">{props.no}</td>
      <td className="team-col">{props.team}</td>
      <td>{props.matches}</td>
      <td>{props.won}</td>
      <td>{props.lost}</td>
      <td>{props.tied}</td>
      <td>{props.nrr}</td>
      <td>{props.points}</td>
    </tr>
  );
}

export default TableRow;
