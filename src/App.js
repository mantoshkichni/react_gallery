import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import DownloadLink from "react-download-link";

export default function App() {
  const [photos, setphotos] = useState();
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(Math.floor(Math.random() * 1000));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=model&client_id=yCbGXqZc75nV4H1HPLsI0qUTLO3CzjlHFDS4CVgdReM`
        );
        setphotos((photos) => data.data.results);
        console.log(photos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="App">
      {photos?.map((items) => (
        <img
          style={{ height: "500px" }}
          className=" mx-3  shadow p-3 mb-1 bg-white rounded mt-3 "
          src={items.urls.small_s3}
          alt="..."
        ></img>
      ))}

      {/* {(page) => window.location.reload(false)} */}
      <div className="container mb-5">
        <button
          onClick={(page) => window.location.reload(false)}
          style={{
            fontFamily: "cursive",
            fontSize: "30px",
            marginLeft: "20px"
          }}
          className="btn border mx-5"
        >
          Previous
        </button>
        <span></span>
        <button
          onClick={(page) => window.location.reload(false)}
          style={{
            fontFamily: "cursive",
            fontSize: "30px",
            marginRight: "20px"
          }}
          className="btn border mx-5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
