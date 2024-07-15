import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    try {
      console.log("Home Page"); 
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="home">
      <h2>𝓗𝓸𝓶𝓮 𝓟𝓪𝓰𝓮</h2>
      <img src="http://localhost:3000/IMG_2413.JPG" alt="AUTISM" />
    </div>
  );
};

export default Home;
