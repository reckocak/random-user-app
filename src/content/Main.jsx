import axios from "axios";
import './Main.css'
import { useEffect, useState } from "react";
import email from './assest/email.svg';
import phone from './assest/phone.svg';
import location from './assest/location.svg'

const Main = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]));
  };
  console.log(user);
  //   const{name, email, phone, picture, location, dob, registered }=user[0];
  return (
    <div className="container">
      <div className="card">
        <div className="div div2">
          <img className="img" src={user.picture?.medium} alt="" />
          <p>
            {user.name?.title} {user.name?.first} {user.name?.last}
          </p>
        </div>

        <div className="div div1">
          <img className="kleinImg" src={email} alt="" /> {user.email}
        </div>

        <div className="div div1">
          <img className="kleinImg" src={phone} alt="" />
          {user.phone}
        </div>

        <div className="div div1">
          <img className="kleinImg" src={location} alt="" />
          {user.location?.city}-{user.location?.country}
        </div>

        <div className="div div5">Age:{user.dob?.age}</div>
        <div className="div div6">
          Register Date: {user.registered?.date.slice(0, 10)}
        </div>
      </div>
      <button className="btn" onClick={getUser}>
        Random User
      </button>
    </div>
  );
};

export default Main;
