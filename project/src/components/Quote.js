import "./styles.css";
import { useEffect, useState } from "react";

// https://randomuser.me/api

export default function App() {
  const [userDataJSON, setUserDataJSON] = useState("");
  const [userData, setUserData] = useState([]);

  function getRandomUser() {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results[0]);
        setUserDataJSON(JSON.stringify(data.results[0]));
        setUserData(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getRandomUser();
  }, []);
  return (
    <div className="App">
      <h1>RANDOM API USER DETAILS GENERATOR</h1>
      <br/><br/><br/><br/>
      <p>{userDataJSON}</p>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={data.picture.thumbnail} alt="thumbnail" />
                </td>
                <td>
                  {data.name.first} {data.name.last}
                </td>
                <td>{data.gender}</td>
                <td>{new Date(data.dob.date).toDateString()}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
