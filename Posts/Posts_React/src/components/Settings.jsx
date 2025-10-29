import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Settings = () => {
  const [toggled, setToggled] = useState(false);

  const [searchInputFocused, setSearchInputFocused] = useState(false);

  return (
    <div>
      <div className="settingTitle">
        <Link to={"/posts"}>
          <button className="userBackBtn">
            <BiArrowBack className="userBackIcon" />
          </button>
        </Link>

        <h2>Settings</h2>
        <p></p>
      </div>
      <div className="searchDivHolder">
        <input
          type="text"
          className="searchInput"
          placeholder="Search settings"
          onBlur={(e)=> setSearchInputFocused(false)}
          onFocus={()=> setSearchInputFocused(true)}
        ></input>
        <BsSearch className="searchIcon" color={searchInputFocused ? 'red': 'black'} />
      </div>

      <div className="settingsUserDivHolder">
        <div className="settingsUserDiv">
          <div className="settingLeftUser">
            <FaUserCircle className="settingsUserIcon" />
            <div className="settingsUserInfo">
              <h4>Brooklyn Simons</h4>
              <p>brooklyn@gmail.com</p>
            </div>
          </div>
          <div className="settingRightUser">
            <Link to={"/user"}>
              <button className="settingUserBtn">
                <MdArrowForwardIos />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="accountDivHolder">
        <h3>Account</h3>
        <div className="accountDiv">
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <FaRegUser className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Edit Profile</p>
                </div>
              </div>
              <div className="accountRight">
                <button className="forwardIcon">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <MdLockOutline className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Change Password</p>
                </div>
              </div>
              <div className="accountRight">
                <button className="forwardIcon">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <MdPayment className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Payment & Subscription</p>
                </div>
              </div>
              <div className="accountRight">
                <button className="forwardIcon">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accountDivHolder">
        <h3>Notifications</h3>
        <div className="accountDiv">
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <MdNotificationsNone className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Push Notifications</p>
                </div>
              </div>
              <div className="accountRight">
                <button className="forwardIcon">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <AiOutlineMail className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Email Notification</p>
                </div>
              </div>
              <div className="accountRight">
                <button className="forwardIcon">
                  <button
                    className={`toggle ${toggled ? "toggled" : ""}`}
                    onClick={() => setToggled(!toggled)}
                  >
                    <div className="thumb"></div>
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accountDivHolder">
        <h3>Notifications</h3>
        <div className="accountDiv">
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <FaCircleHalfStroke className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Appearance</p>
                </div>
              </div>
              <div className="accountRight">
                <p className="lastDivp">System</p>
                <button className="forwardIcon">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
          <div className="editProfileDiv1">
            <div className="editProfileDiv">
              <div className="accountLeft">
                <div className="userIcnoDiv">
                  <TbWorld className="userIcno" />
                </div>
                <div>
                  <p className="editProfilepP">Laguage</p>
                </div>
              </div>
              <div className="accountRight">
                <p className="lastDivp">English</p>
                <button className="forwardIcon">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="settingsBtnsDiv">
        <div>
          <div className="settingsLogoutBtn">
            <button className="settingsbtn">Log Out</button>
          </div>
        </div>
        <button className="settingsbtn2">Delete Account</button>
      </div>
      <div className="footer">
        <p>App Version 1.2.3</p>
      </div>
    </div>
  );
};

export default Settings;
