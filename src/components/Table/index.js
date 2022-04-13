const Table = () => {
  return (
    <table class="table is-bordered is-narrow is-hoverable is-fullwidth has-text-centered">
      <thead>
        <tr>
          <th className="has-background-grey-lighter">Name</th>
          <th className="has-background-grey-lighter">Gender</th>
          <th className="has-background-grey-lighter">Birth</th>
          <th className="has-background-grey-lighter">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Raul</td>
          <td>Male</td>
          <td>02/08/1995</td>
          <td>IDK</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
