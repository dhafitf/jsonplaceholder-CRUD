import { useEffect, useState } from "react";
import Header from "../components/Header";
import { PostCard } from "../components/PostCard";

export default function Home() {
  const ALL_POST_URL = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchAllArticle = async () => {
    const getData = await fetch(ALL_POST_URL);
    const json = await getData.json();
    setPosts(json);
  };

  useEffect(() => {
    fetchAllArticle();
  }, []);

  const handleAdd = async () => {
    try {
      const postData = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          id: posts.length + 1,
          userId,
          title,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await postData.json();
      setPosts((posts) => [...posts, json]);
      alert("Success");
      setUserId("");
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });

      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="add-post">
        <div className="add-post-input">
          <div>
            <label htmlFor="userId">User Id: </label>
            <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <textarea name="body" id="body" value={body} cols="30" rows="10" onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
        </div>
        <button onClick={handleAdd}>Unggah</button>
      </div>
      <div className="container">
        {posts.map((post) => {
          return <PostCard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} onDelete={handleDelete} setPosts={setPosts} />;
        })}
      </div>
    </>
  );
}
