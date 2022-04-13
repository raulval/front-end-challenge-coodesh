import axios from "axios";
import { format, parseISO } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/dataSlice";

const Table = () => {
  const baseURL = "https://randomuser.me/api/?results=5&nat=br,us";
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.results);
        dispatch(getData(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        {data.map((patient) => (
          <tr key={patient.id.value}>
            <td>
              {patient.name.first} {patient.name.last}
            </td>
            <td>{patient.gender}</td>
            <td>{format(parseISO(patient.dob.date), "dd/MM/yyyy")}</td>
            <td>
              <button className="button is-info">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
