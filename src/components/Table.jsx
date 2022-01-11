import React from 'react'

const Table = ({ tableData }) => {
  return (
    tableData.length > 0 ?
      <table border="1">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>City</th>
          </tr>

        </thead>
        <tbody>
          {tableData?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
                <td>{item.address?.city}</td>
              </tr>
            )
          })}
        </tbody>
      </table> : <div>No data to display</div>
  )
}

export default Table
