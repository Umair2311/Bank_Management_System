import React from "react";
import Button from './button'

function Users() {
  return (
    <div className="p-32 text-center">
      <h1 className="text-4xl">Total users in our bank</h1>
      <table className="border border-collapse border-cyan-600 text-center mx-auto my-7">
        <thead className="border-b border-cyan-600">
          <tr>
            <th className="text-sm font-medium px-6 py-4 border-r border-cyan-600">Sr No.</th>
            <th className="text-sm font-medium px-6 py-4 border-r border-cyan-600">Name</th>
            <th className="text-sm font-medium px-6 py-4 border-r border-cyan-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-sm font-medium px-6 py-4 border-r border-cyan-600">1</td>
            <td className="text-sm font-medium px-6 py-4 border-r border-cyan-600">John Smith</td>
            <td className="text-sm font-medium px-6 py-4 border-r border-cyan-600"><Button text="Details" /></td>
          </tr>
        </tbody>
      </table>
      <Button text="Back" />
    </div>
  );
}

export default Users;
