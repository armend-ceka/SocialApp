import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

export default function UserPage() {
  let { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://dummyapi.io/data/api/user/${userId}`, {
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
            setUser(res);
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

  return loading ? (
    <Loader />
  ) : (
    <div className="userPage">
      <div className="user_top">
        <div className="left">
          <img
            src={user.picture}
            style={{ borderRadius: "50%", width: "100%" }}
          />
        </div>
        <div
          className="user_details"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="name" style={{ fontSize: "2rem" }}>
            <b>{user.firstName + " " + user.lastName} </b>
          </div>
        </div>
      </div>
      <div className="user_top">
        <div className="left"></div>
        <div className="user_details" style={{ flex: "1" }}>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>First Name:&nbsp;</b>
            </div>
            <div>{user.firstName}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Last Name:&nbsp;</b>
            </div>
            <div>{user.lastName}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Email:&nbsp;</b>
            </div>
            <div>{user.email}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Gender:&nbsp;</b>
            </div>
            <div>{user.gender}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Birth date:&nbsp;</b>
            </div>
            <div>{new Date(user.dateOfBirth).toString().substring(0,15)}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Phone:&nbsp;</b>
            </div>
            <div>{user.phone}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Registerd date:&nbsp;</b>
            </div>
            <div>{new Date(user.registerDate).toString().substring(0,15)}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Address:&nbsp;</b>
            </div>
            <div style={{width:"75%"}}>{user.location.country+", "+user.location.state+", "+user.location.city+", "+user.location.street+", "}</div>
          </div>
          <div>
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${user.location.city},${user.location.country}&zoom=13&size=600x300&maptype=roadmap
&key=[YOUR API KEY]`}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
