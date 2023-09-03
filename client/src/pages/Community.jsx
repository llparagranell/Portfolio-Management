import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./community.css";
import { FaRegUserCircle } from "react-icons/fa";
import Post from "../components/Post";
import { useLocation } from "react-router-dom";
import CommunityUser from "../components/CommunityUser";

const url = "https://portfolio-mangement.onrender.com/community/getPost";
function Community() {
  const [image, setImage] = useState();
  const [ open, setOpen ] = useState(true);
  const [ post, setPost ] = useState(true);

  const location = useLocation();

  const toBase64 = (uInt8Array) => btoa(String.fromCharCode(...uInt8Array));
  useEffect(() => {
    axios.get(url).then((res) => setImage(res.data));
    
  }, [setImage]);

  const posthandler = () => {
    setOpen(true)
    setPost(false)
  }
  const userhandler = () => {
    setPost(true)
    setOpen(false);
  }
  return (
    <div>
      <header>
        <h1>Welcome to community</h1>
        <p>A platform for getting your problem solved !!!</p>
      </header>
      <div className="res">
      <p onClick={userhandler}>post's</p>
      <p onClick={posthandler}>user</p>
      </div>

      <section id="community-section">
        <div className="c-scrol">
          {post?image &&
            image.map((e) => {
              return (
                <div className="c-card">
                  <div>
                    <div>
                      {" "}
                      <FaRegUserCircle
                        style={{ fontSize: "50px", color: "lightgrey" }}
                      />
                    </div>
                    <ul>
                      <h3>{e.name}</h3>
                      <p>{moment(e.time).fromNow()}</p>
                    </ul>
                  </div>
                  <p>{e.text}</p>

                  <img
                    src={`data:image/jpeg;base64,${toBase64(e.img.data)}`}
                    alt="logo"
                  />
                </div>
              );
            }):""}
        </div>
        {open?<div>
          <CommunityUser
            name={location.state.name}
            Uniquekey={location.state.Uniquekey}
          />
          <Post
            name={location.state.name}
            uniqueKey={location.state.Uniquekey}
            token={location.state.token}
          />
        </div>:""}
      </section>
    </div>
  );
}

export default Community;
