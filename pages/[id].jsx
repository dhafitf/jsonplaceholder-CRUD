import React from "react";
import Header from "../components/Header";

const PostDetail = ({ post }) => {
  return (
    <>
      <Header />
      <div className="post-container">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostDetail;

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const POST_DETAIL_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const fetchPost = async () => {
    const getData = await fetch(POST_DETAIL_URL);
    const json = await getData.json();
    return json;
  };

  const post = await fetchPost();

  return {
    props: { post },
  };
}
