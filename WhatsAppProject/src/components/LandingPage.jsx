import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { PiCaretCircleLeftThin } from "react-icons/pi";
import { PiCaretCircleRightThin } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <>
      <div className="headerDiv">
        <div>
          <img
            src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
            alt="Logo"
          />
        </div>
        <div className="navLinksDIv">
          <div className="singleNavLinkDIv1">
            <Link className="navLink1">
              <span>WhatsApp</span>
              <FaAngleDown />
            </Link>
          </div>
          <div className="singleNavLinkDIv">
            <Link className="navLink">Privacy</Link>
          </div>
          <div className="singleNavLinkDIv">
            <Link className="navLink">Help Center</Link>
          </div>
          <div className="singleNavLinkDIv">
            <Link className="navLink">Blog</Link>
          </div>
          <div className="singleNavLinkDIv">
            <Link className="navLink">For Business</Link>
          </div>
          <div className="singleNavLinkDIv">
            <Link className="navLink">Apps</Link>
          </div>
        </div>
        <div className="headerBtnsDivHolder">
          <div className="headerBtnsDiv">
            <button className="loginBtn">
              <span className="loginBtnSpan">Log in</span>
              <FaAngleRight className="loginBtnIcon" />
            </button>
          </div>
          <div className="headerBtnsDiv2">
            <button className="downloadBtn">
              <span>Download</span> <RiDownloadLine />
            </button>
          </div>
        </div>
      </div>

      <div className="containerHolder">
        <div className="container">
          <div className="leftContainer">
            <h1 className="containerH1">Message privately</h1>
            <h4 className="containerH4">
              Simple, reliable, private messaging and calling for free*,
              available all over the world.
            </h4>
            <div className="containerBtns">
              <div>
                <button className="downloadBtn">
                  <span>Download</span>
                  <span className="downlaodSpan">
                    <RiDownloadLine />
                  </span>
                </button>
              </div>
              <div className="containerLoginBtnDiv">
                <button className="loginBtn2">
                  <span> Log in</span>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <img src="../text.webp" alt="first text" className="textImg" />
            <img src="../reaction.webp" alt="reaction" />
            <img src="../VN.webp" alt="chat" />
            <img src="../pic1.webp" alt="chat" className="imageimg" />
            <img
              src="../reactionOnPic.webp"
              alt="chat"
              className="reactionImg"
            />
            <img src="../lastText.webp" alt="chat" />
          </div>
        </div>
      </div>
      <div className="Pdiv">
        <p className="dataP">
          * Data charges may apply. Contact your provider for details.
        </p>
      </div>
      <div className="secondContainer">
        <div className="leftSecondContainer">
          <img src="../second.webp" alt="" />
        </div>
        <div className="rightSecondContainer">
          <h1 className="h1">Chat and call on a larger screen</h1>
          <h4 className="h4">
            View messages, photos, videos and documents on a larger screen with
            WhatsApp for Windows.
          </h4>
          <button className="windowsDownloadBtn">
            <span>Download Windows app</span>
            <RiDownloadLine />
          </button>
        </div>
      </div>

      <div className="thirdContainer">
        <div className="leftThirdDiv">
          <h1 className="h1">Never miss a moment with voice and video calls</h1>
          <h4 className="h4">
            From a group call to classmates to a quick call with mom, feel like
            you’re in the same room with voice and video calls.
          </h4>
          <Link className="learnMorelINK">
            <span className="learnMorelINKp">Learn More </span>
            <FaAngleRight className="learnMorelINKIcon" />
          </Link>
        </div>
        <div className="rightThirdDiv">
          <img src="../videoCall.webp" alt="video call" />
        </div>
      </div>

      <div className="fourthContainer">
        <div className="fourthleftContainer">
          <img src="../third.webp" alt="" />
        </div>
        <div className="fourthrightContainer">
          <h1 className="h13">Speak</h1>
          <h1 className="h14">freely</h1>
          <h4 className="p14">
            With end-to-end encryption on WhatsApp, your personal messages and
            calls are secured with a lock. Only you and the person you're
            talking to can read or listen to them, and no one else, not even
            WhatsApp
          </h4>
          <Link className="learnMorelINK1">
            <span className="learnMorelINKp1">Learn More </span>
            <FaAngleRight className="learnMorelINKIcon" />
          </Link>
        </div>
      </div>

      <div className="thirdContainer">
        <div className="leftThirdDiv">
          <h1 className="h1">Keep in touch with your groups</h1>
          <h4 className="h4">
            Whether it's planning an outing with friends or simply staying on
            top of your family chats, group conversations should feel
            effortless.
          </h4>
          <Link className="learnMorelINK">
            <p className="learnMorelINKp">Learn More </p>
            <FaAngleRight className="learnMorelINKIcon" />
          </Link>
        </div>
        <div className="rightThirdDiv1">
          <img
            src="../chatHolderImg.webp"
            alt="video call"
            className="videocalImg"
          />
          <img
            src="../fourthImg.webp"
            alt="video call"
            className="videocalImgChat"
          />
        </div>
      </div>

      <div className="secondContainer">
        <div className="leftSecondContainer1">
          <img
            src="../sayWhatYouFeelHolder.webp"
            alt="say what you feel"
            className="sayWhatYouFeel1"
          />
          <img
            src="../sayWhatYouFeel.webp"
            alt="say what you feel"
            className="sayWhatYouFeel"
          />
        </div>
        <div className="rightSecondContainer1">
          <h1 className="h1">Say what you feel</h1>
          <h4 className="h4">
            Express yourself without words. Use stickers and GIFs or share
            everyday moments on Status. Record a voice message for a quick hello
            or a longer story.
          </h4>
          <Link className="learnMorelINK">
            <p className="learnMorelINKp">Learn More </p>
            <FaAngleRight className="learnMorelINKIcon" />
          </Link>
        </div>
      </div>

      <div className="thirdContainer1">
        <div className="leftThirdDiv">
          <h1 className="h1">Transform your business</h1>
          <h4 className="h4">
            WhatsApp Business helps you reach your customers globally to deliver
            compelling experiences at scale. Showcase your products and
            services, increase sales, and build relationships all with WhatsApp.
          </h4>
          <Link className="learnMorelINK">
            <p className="learnMorelINKp">Learn More </p>
            <HiMiniArrowUpRight className="learnMorelINKIcon" />
          </Link>
        </div>
        <div className="rightThirdDiv">
          <img src="../catalog.webp" alt="video call" />
        </div>
      </div>
      <div className="end">
        <div className="lastContainer">
          <div className="rightLastContainer">
            <div>
              <h1 className="h10">Stay up to date</h1>
              <h4>
                Get the latest from WhatsApp: news, useful tips, and our newest
                features to help you stay connected.
              </h4>
            </div>
            <div className="bottomRightLastContainer">
              <div>
                <button className="nextBtn">
                  <FaChevronLeft className="nextIcon" />
                </button>
                <button className="nextBtn">
                  <FaChevronRight className="nextIcon" />
                </button>
              </div>
            </div>
          </div>
          <div className="leftLastContainer1Container">
            <div className="leftLastContainer1">
              <FaWhatsapp className="whatsappIcon" />
              <h2>Encrypting your WhatsApp Chat Backup Just Got Easier</h2>
              <p>
                Many of us carry years of precious memories in our WhatsApp
                chats – photos, heartfelt voice notes, and important
                conversations. That’s why protecting them if you ever lose...
              </p>
              <div className="readMoreBtnHolder1">
                <button className="readMoreBtn">Read More</button>
              </div>
            </div>
          </div>
          <div className="leftLastContainer1Container">
            <div className="leftLastContainer1">
              <FaWhatsapp className="whatsappIcon" />
              <h2>
                New Feature Roundup: Live and Motion photos, creative Meta AI
                features, and more!
              </h2>
              <p>
                Over the past few months, we’ve continued adding new features
                and updates to WhatsApp. Today’s roundup includes the ability to
                send Live and Motion photos, new ways to get...
              </p>
              <div className="readMoreBtnHolder">
                <button className="readMoreBtn">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="upperFooter">
            <div>
              <img src="whatsapp.svg" alt="whatsapp" className="whatsappImg" />
              <div className="downloadHolder">
                <button className="footerDownload">
                  <span>Download</span>
                  <RiDownloadLine />
                </button>
              </div>
            </div>
            <div className="linksHolderContainer">
              <div className="linksHolder">
                <p className="LinksP">What we do</p>
                <Link className="footerLink">Features</Link>
                <Link className="footerLink">Blog</Link>
                <Link className="footerLink">Security</Link>
                <Link className="footerLink">For Business</Link>
              </div>
              <div className="linksHolder">
                <p className="LinksP">Who we are</p>
                <Link className="footerLink">Abour us</Link>
                <Link className="footerLink">Careers</Link>
                <Link className="footerLink">Brand Center</Link>
                <Link className="footerLink">Privacy</Link>
              </div>
              <div className="linksHolder">
                <p className="LinksP">Use WhatsApp</p>
                <Link className="footerLink">Android</Link>
                <Link className="footerLink">iPhone</Link>
                <Link className="footerLink">Mac/PC</Link>
                <Link className="footerLink">WhatsApp Web</Link>
              </div>
              <div className="linksHolder">
                <p className="LinksP">Nedd help?</p>
                <Link className="footerLink">Contact Us</Link>
                <Link className="footerLink">Kelp Center</Link>
                <Link className="footerLink">Apps</Link>
                <Link className="footerLink">Security Advisors</Link>
              </div>
            </div>
          </div>
          <div className="lowerFooter">
            <div className="leftLowerFooter">
              <div className="leftLowerFooter1">
                <p className="footerP">
                  2025 <AiOutlineCopyrightCircle />
                  WhatsApp LLC
                </p>
              </div>
              <div className="leftLowerFooter2">
                <Link className="footerL">Terms & Privacy Policy</Link>
              </div>
              <div>
                <p className="footerP">Sitemap</p>
              </div>
            </div>

            <div className="rightLower">
              <div className="midLowerFooter">
                <div className="footerBtnHolder">
                  <button className="footerBtn">
                    <BsTwitterX className="footerBtnIcon" />
                  </button>
                </div>
                <div className="footerBtnHolder">
                  <button className="footerBtn">
                    <FaYoutube className="footerBtnIcon" />
                  </button>
                </div>
                <div className="footerBtnHolder">
                  <button className="footerBtn">
                    <FaInstagram className="footerBtnIcon" />
                  </button>
                </div>
                <button className="footerBtn">
                  <FaFacebookF className="footerBtnIcon" />
                </button>
              </div>
              <div>
                <button className="language">
                  English <FaAngleDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
