import Post from "./Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching , setIsFetching] = useState(false);

  // fetch('http://localhost:8080/posts').then(response => response.json()).then(data=>data.posts){
  //   setPosts(data.posts);
  // }; 이렇게 되면 setPosts가 컴포넌트를 계속 재실행하게되어 fetch가 계속 실행되고 무한루프 발생 ====> 그럼 어떡해? ==> useEffect 사용

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.post}>
          {posts.map((post) => (
            <Post key={Math.random()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>작성된 글이 없습니다.</h2>
          <p>글을 등록해보세요!</p>
        </div>
      )}
      {isFetching && <div style={{textAlign : "center"}}><p>Loading...</p></div>}
    </>
  );
}
 
export default PostList;
