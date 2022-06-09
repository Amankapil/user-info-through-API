import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Post = (id) => {
  const { email } = useParams();
  const { gender } = useParams();

  const { push } = useHistory();
  const [post, SetPost] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://randomuser.me/api/?results=10/post/${gender} `
        );
        // SetPost(data);
        let printdata = data.results;
        SetPost(printdata);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  function nextBirthday(birthDate) {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let nextBirthday = new Date(
      today.getFullYear(),
      birthDateObj.getMonth(),
      birthDateObj.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    console.log(nextBirthday.toString());
    return nextBirthday;
  }

  nextBirthday("1998-05-16T00:00:00.000Z");
  console.log(nextBirthday);
  return (
    <>
      <div className="container">
        <h1>{gender}</h1>
        <h1>{post.picture}</h1>
      </div>
      <br />
      <button onClick={() => push("/")}>Go back</button>
    </>
  );
};

export default Post;
