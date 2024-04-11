import React from "react";
import "./post.css";

const Post = ({title, image, date, info}) => {
  return (
    <div className="post">
      {/* Displays the image based on the filename (with correct extension) passed as an argument
      All images must be stored inside src/Components/Images to be displayed properly
      Suppose the name of the image is test.jpeg, then the text in the images column in the sheet should be test.jpeg*/}
      <img className="postImg" src={require(`../Images/${image}`)} alt="Post"/>

      <div className="postInfo">
        <span className="postTitle">
          {/* Displays the title passed as an argument */}
          {title}
        </span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">
        {/* Displays the info passed as an argument */}
        {info}
      </p>
    </div>
  );
}

export default Post;