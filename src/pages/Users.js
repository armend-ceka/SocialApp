import React, { useState, useEffect } from "react";
import User from "../components/user";
import UserPage from "./UserPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Loader from "../components/Loader";

export default function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const a = [
    { id: "123", firstName: "Dylan", lastName: "vasquez" },
    { id: "345", firstName: "Dylan", lastName: "vasquez" },
    { id: "456", firstName: "Dylan", lastName: "vasquez" },
  ];

  useEffect(() => {
    async function fetchData() {
      await fetch("https://dummyapi.io/data/api/user?limit=10", {
        headers: {
          "app-id": "60a7f2bc666edca6952a6311",
        },
      })
        .then((res) => {
          if (res.status === 429) {
            console.log("Reached request daily limit");
          }
          return res.json();
        })
        .then(
          (res) => {
            setUsers(res.data);
            console.log(res);
            setLoading(false);
          },
          (error) => {
            console.log(error);
            setLoading(false);
          }
        );
    }
    fetchData();
  }, []);
  let { url } = useRouteMatch();

  return loading ? (
    <Loader/>
  ) : (
    <div className="userList">
      {users.map((user) => (
        <Link to={`${url}/${user.id}`} key={user.id}>
          <User
            name={user.firstName + " " + user.lastName}
            image={user.picture}
          ></User>
        </Link>
      ))}
    </div>
  );
}
