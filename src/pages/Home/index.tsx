import React, { useState, useEffect } from "react";
import HomeCSS from "./Home.module.css";
import { ITasks } from "./models";
import Header from "./../../components/Header";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import api from "../../services/api";

interface Props {
  userName: { value: string };
}

const Home: React.FC<Props> = ({ userName }) => {
  const [posts, setPosts] = useState<ITasks[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await api.get("/");
    setPosts(res.data);
    setLoading(false);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setcurrentPage(pageNumber);

  return (
    <>
      <Header userName={userName} />
      <div className={HomeCSS.container}>
        <Card posts={currentPosts} loading={loading} />
        <Pagination
          postPerPage={postPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
