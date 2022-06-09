import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { posts } from "./db.json";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        let printdata = data.results;
        console.log(printdata);
        // setUsers(printdata);
        setPosts(printdata);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  //   useEffect(() => {
  //     fetch();
  //   }, []);
  return (
    <>
      <div className="conatainer">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((el, pos) => (
                // <article key={el.id}>
                <tr key={pos} className = "fonts">
                  <th scope="row">{el.id.name}</th>
                  <td class="text-decoration-none">
                    <Link class="text-decoration-none"
                      to={`/post/ ph.no = ${el.phone}     dob = ${el.dob.date}`}
                    >
                      {el.name.title + " " + el.name.first + " " + el.name.last} 
                    </Link>
                  </td>

                  <td>{el.gender}</td>
                  <td>{el.location.city}</td>
                  <td>{el.location.state}</td>
                  <td>{el.location.country}</td>
                </tr>
                // </article>
              ))}

              {/* {posts.map((data, pos) => (

            ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
