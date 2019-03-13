import React from "react";
import styled from "styled-components";

import Form from "./components/Form";

const Container = styled.div`
  max-width: 90%;
  padding: 10px 0;
`;

const App = () => (
  <React.StrictMode>
    <Container className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <h2>pixiv query builder</h2>
          <p>pixiv の画像検索を良い感じにすることが出来ます。</p>

          <Form />
        </div>
      </div>
    </Container>
  </React.StrictMode>
);

export default App;
