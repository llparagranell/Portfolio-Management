import { useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Post(props) {
  const [text, setText] = useState("");
  const [img, setImg] = useState()
  const navigate = useNavigate();

  const formData = new FormData();
    formData.append('name',props.name)
    formData.append('text',text)
    formData.append('img',img)
    formData.append('UniqueKey',props.uniqueKey)


    // const style = {
    
    // }

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio-mangement.onrender.com/community/uploads", formData)
      .then((res) => alert(res.data));
  };

  // console.log(props.token);
  return (
    <>
    <div className="form">
      <h2>Post Something</h2>

      <form onSubmit={handlesubmit}>
        <label>Enter Description</label>
        <input
          type="text"
          name="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Description..."
          required
        />
        <input
        style={{border:"none"}}
          type="file"
          name="img"
          accept="image/*"
          className="file"
          onChange={(e) => setImg(e.target.files[0])}
          required
        />
        <button className="form-btn">Submit</button>
      </form>
    </div>
    <div className="comunity">
    <h2>Explore DashBoard</h2>
    <p>Let's connect together.</p>
    <button className="comunity-navigator" onClick={()=>navigate('/',{state:{name:props.name,Uniquekey:props.Uniquekey,tokenKey:props.token}})}>Learn More</button>
  </div></>
  );
}

export default Post;
