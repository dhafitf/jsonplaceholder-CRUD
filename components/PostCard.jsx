import React, { useState } from "react";
import Link from "next/link";
import { Modal } from "../components/Modal";

export const PostCard = ({ id, userId, title, body, onDelete, setPosts }) => {
  const [isShow, setIsShow] = useState(false);
  const [tempUserId, setTempUserId] = useState(userId);
  const [tempTitle, setTempTitle] = useState(title);
  const [tempBody, setTempBody] = useState(body);

  const handleUpdate = (id, userId, title, body) => {
    setPosts((posts) =>
      posts.map((post) => {
        if (post.id === id) {
          return { ...post, userId, title, body };
        }

        return post;
      })
    );
  };

  return (
    <>
      <div className="post-card-container">
        <div className="post-card">
          <Link href={`/${id}`}>
            <a className="post-title">
              <h1>{title}</h1>
            </a>
          </Link>
          <p>{body}</p>
        </div>
        <div className="post-card-button">
          <button onClick={() => setIsShow(true)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
      {isShow && (
        <Modal
          onSave={() => handleUpdate(id, tempUserId, tempTitle, tempBody)}
          onCancel={() => setIsShow(false)}
          userId={userId}
          title={title}
          body={body}
          setTitle={setTempTitle}
          setUserId={setTempUserId}
          setBody={setTempBody}
        />
      )}
    </>
  );
};
