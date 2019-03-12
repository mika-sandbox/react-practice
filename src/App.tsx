import React from "react";
import styled from "styled-components";


const Root = styled.div`
  padding: 10px 0;
`;

const App = () => (
  <React.StrictMode>
    <Root className="container">
      <h2>pixiv query builder</h2>
      <p>pixiv の画像検索を良い感じにすることが出来ます。</p>

    </Root>
  </React.StrictMode>
);

export default App;
