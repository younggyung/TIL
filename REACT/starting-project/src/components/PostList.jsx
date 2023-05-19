import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ isPosting, onStopPosting }) {
  fetch('http://localhost:8080/posts').then(response => response.json()).then(data=>data.posts);

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts'),{
      method: 'POST',
      body : JSON.stringify(postData),
      headers : {
        'Content-Type' : 'application/json'
      }
    };

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.post}>
          {posts.map((post) => 
              <Post key={Math.random()} author={post.author} body=
              {post.body} />
            )
          }
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>작성된 글이 없습니다.</h2>
          <p>글을 등록해보세요!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
