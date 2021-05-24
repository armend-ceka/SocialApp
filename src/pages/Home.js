import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Post from "../components/post";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://dummyapi.io/data/api/post?limit=10", {
        headers: {
          "app-id": "60a7f2bc666edca6952a6311",
        },
      })
        .then((res) => {
          if (res.status === 429) {
            console.log("Reached request daily limit");
          }
          return res.json();
        })
        .then(
          (res) => {
            setPosts(res.data);
            setLoading(false);
          },
          (error) => {
            console.log(error)
            setLoading(false);
          }
        );
    }
    fetchData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
