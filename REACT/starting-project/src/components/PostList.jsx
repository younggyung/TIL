import Post from "./Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.post}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
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
