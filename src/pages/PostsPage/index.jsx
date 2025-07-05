import axios from "axios";
import { QueryClient, useQuery } from "@tanstack/react-query";
import styles from "./PostsPage.module.scss";
import { Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await axios.get("http://localhost:3000/api/v1/posts");
  return res.data;
};
const PostsPage = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await axios.post("http://localhost:3000/api/v1/posts", data);
      console.log(res);

      queryClient.invalidateQueries(["posts"]);
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`container ${styles.postsPage}`}>
      <div>
        <div className={styles.tilePosts}>
          {data.data.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>,<h2>{post.content}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.postsMain}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" id="" placeholder="title" />
          <input type="text" name="content" id="" placeholder="content" />
          <input type="text" name="slug" id="" placeholder="slug" />
          <input type="text" name="topic_id" id="" placeholder="topic_id" />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default PostsPage;
