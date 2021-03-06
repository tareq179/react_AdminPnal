import "./User.css";
import profile from "../../image/img1.png";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={profile} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Abdul Karim</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">25 Nov 1997</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+8801825325914</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">abdulkarimctg373@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <div className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label >Username</label>
                        <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Full Name</label>
                        <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Email</label>
                        <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Phone</label>
                        <input type="text" placeholder="+880 1825 32914" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Address</label>
                        <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                    </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img src={profile} alt="" className="userUpdateImg" />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default User;
