import React from 'react';
import styled from "styled-components";
import { Body, Chrome, Content, Footer, FooterItem as ChromeFooterItem, Header, HeaderItemWrapper } from "@zendeskgarden/react-chrome";
import { ThemeProvider } from "@zendeskgarden/react-theming";

import '@zendeskgarden/react-chrome/dist/styles.css';

const FooterItem = styled(ChromeFooterItem)`
  color: #6c757d;
  font-size: 80%;
`;

const App = () => (
  <ThemeProvider>
    <Chrome>
      <Body hasFooter>
        <Header standalone>
          <HeaderItemWrapper logo>
            P
          </HeaderItemWrapper>
          <HeaderItemWrapper maxX>
            <span>Pixiv Query Builder</span>
          </HeaderItemWrapper>
        </Header>
        <Content />
        <Footer>
          <FooterItem>
            Licensed under the <a href="https://github.com/mika-sandbox/react-practice/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>
          </FooterItem>
          <FooterItem>
            &copy; {new Date().getFullYear()} mika-f
          </FooterItem>
        </Footer>
      </Body>
    </Chrome>
  </ThemeProvider>
);

export default App;
