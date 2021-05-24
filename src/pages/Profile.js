import React from "react";

export default function Profile() {
  const user = {
    dateOfBirth: "1998-06-06",
    email: "armend_ceka@hotmail.com",
    firstName: "Armend",
    gender: "Male",
    id: "1Ajqw24qjfQsdq",
    lastName: "Ceka",
    location: {
      city: "Tetovo",
      country: "North Macedonia",
      street: "Kumanovska 48",
    },
    phone: "+389 70 531 097",
    picture:
      "https://scontent.fskp3-1.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/90468691_10212428588028555_1649321055740755968_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=CF02iMO6k-oAX-Bt8p1&_nc_ht=scontent.fskp3-1.fna&tp=27&oh=79c89ad747ca8a0111a980cd963c3c7b&oe=60D03996",
    registerDate: "2020-05-10T09:00:22.160Z",
    title: "mr",
  };
  return (
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
            <div>{new Date(user.dateOfBirth).toString().substring(0, 15)}</div>
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
            <div>{new Date(user.registerDate).toString().substring(0, 15)}</div>
          </div>
          <div style={{ display: "flex", padding: "5px" }}>
            <div style={{ textAlign: "right", width: "25%" }}>
              <b>Address:&nbsp;</b>
            </div>
            <div style={{ width: "75%" }}>
              {user.location.country +
                ", " +
                user.location.city +
                ", " +
                user.location.street +
                ", "}
            </div>
          </div>
          <div>
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${user.location.city},${user.location.country}&zoom=13&size=600x300&maptype=roadmap
&key=AIzaSyA9UBCppN5OyYw_MZkeyvWuvrzyEMIcvqw`}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
