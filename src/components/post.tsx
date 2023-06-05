import React, { useState, useEffect } from "react";
import "../styles/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const GET_POST_API = "https://jsonplaceholder.typicode.com/posts";
const GET_COMMENTS_API = `https://jsonplaceholder.typicode.com/comments`;

export default function Post() {
  const [post, setPost] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    async function getPostData() {
      const response = await axios.get<Post[]>(GET_POST_API);
      setPost(response.data);
    }
    getPostData();
  }, []);
  useEffect(() => {
    async function getCommentsData() {
      try {
        const response = await axios.get<Comment[]>(GET_COMMENTS_API);
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCommentsData();
  }, []);
  return (
    <div className="carousel_styles">
      <Carousel variant="white" className="carosel_size">
        {post.map((post) => (
          <Carousel.Item key={post.id}>
            <div className="position_carosel_block">
              <div className="post_block">
                <div className="title_post">{post.title}</div>
                <div className="body_post">{post.body}</div>
              </div>
              <div className="coment_block">
                {comments
                  .filter((comment) => comment.postId === post.id)
                  .map((comment) => (
                    <div key={comment.id}>
                      <div className="name_coments">Name: {comment.name}</div>
                      <div className="email_coments">
                        Email: {comment.email}
                      </div>
                      <div className="body_coments">Body: {comment.body}</div>
                    </div>
                  ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
