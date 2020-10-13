import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import API from "../utils/API";
// import styled from "styled-components";
import { MDBContainer } from "mdbreact";
import VideoBg from "reactjs-videobg";
// import ogg from "./Neon.ogg";
// import webm from "./Neon.webm";
import mp4 from "../assets/backgroundvideo.mp4";
import poster from "../assets/poster.jpg";

// const Page = styled.div`
//   height: 100vh;
//   background: radial-gradient(circle at 70%, #bdbdbd -60%, #283593 100%);
//   overflow: hidden;
//   animation: up 3s 4s cubic-bezier(0.76, 0, 0.24, 1) forwards;
// `;

function Detail(props) {
  console.log("Detail");
  const [movie, setMovie] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/movies/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getMovie(id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    // <Page>
    <MDBContainer>
      <VideoBg poster={poster}>
        {/* <VideoBg.Source src={ogg} type="video/ogg" />
        <VideoBg.Source src={webm} type="video/webm" /> */}
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      <Row>
        <Col size="md-12">
          <br />
          <div w-50>
            <div
              style={{
                padding: "1%",
                backgroundColor: "#DCDCDC15",
                borderWidth: 1,
                borderColor: "black",
                color: "white",
                // opacity: "50%",
              }}
            >
              <h1>
                <strong>Title:</strong> {movie.title}
              </h1>
              <br />
              <p>
                <strong>Plot:</strong> {movie.plot}
              </p>
              <p>
                <strong>Poster:</strong> {movie.poster}
              </p>
              <p>
                <strong>Director:</strong> {movie.director}
              </p>
              <p>
                <strong>Rating:</strong> {movie.rating}/100
              </p>
              <p>
                <strong>Link:</strong> {movie.link}
              </p>
              <p>
                <strong>Released:</strong> {movie.released}
              </p>
              <p>
                <strong>Genre:</strong> {movie.genre}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <br />
          <Link to="/dashboard">← Back to Dashboard</Link>
        </Col>
      </Row>
    </MDBContainer>
    // </Page>
  );
}

export default Detail;
