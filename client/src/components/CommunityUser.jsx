// import { useEffect, useState } from "react";
import "./communityuser.css";
// import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";

function CommunityUser(props) {
  // const url = "http://localhost:5000/community/getPost";

  // const [image, setImage] = useState();

  // const toBase64 = (uInt8Array) => btoa(String.fromCharCode(...uInt8Array));
  // useEffect(() => {
  //   axios.get(url).then((res) => setImage(res.data));
  // }, []);
  //   if (items.Uniquekey === props.Uniquekey)
  // console.log(image[0].UniqueKey );

  return (
    <div className="c-user">
      <FaRegUserCircle style={{ fontSize: "60px", color: "white" }} />
      <h1>{props.name}</h1>
    </div>
  );
}

export default CommunityUser;
// Uniquekey
