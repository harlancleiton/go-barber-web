import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body,
  input,
  button {
    font: 14px 'Roboto', sans-serif;
  }

  button: {
    cursor: pointer;
  }
`}`;