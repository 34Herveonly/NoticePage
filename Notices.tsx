import { useState } from "react";

const Notices = () => {
  
  const [addPost,setAddPost]=useState("");
  const handlePost = () => {
    addPost
  }
  return (
    <div className="Notice-page">
      {/* Title Section */}
      <div className="notice-title">
        <h1>Anything important you want to share ?</h1>
        <h2>Post it below.</h2>
      </div>

      {/* Form Section */}

      <div className="notice-form">
        <label htmlFor="lecturer-name">Lecturer's Full Name</label>
        <input type="text" id="lecturer-name" placeholder="Enter full name" />

        <label htmlFor="department">Department</label>
        <input type="text" id="department" placeholder="Enter department" />

        <label htmlFor="message">Message/Notice</label>
        <textarea
          id="message"
          name="Notice"
          placeholder="Use this space to share/post a notice"
        ></textarea>

        <button type="submit" onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default Notices;
