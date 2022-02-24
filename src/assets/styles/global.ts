import { createGlobalStyle } from 'styled-components';

export const globalColors = {
  background: '#F0F2F5',
  shape: '#FFF',
  textTitle: '#363F5F',
  textBody: '#969CB3',
  textButton: '#FFF',
  inputBackground: '#E7E9EE',
  inputBorder: '#D7D7D7',
  blue: '#5429CC',
  blueLight: '#6933FF',
  green: '#33CC95',
  red: '#E62E4D',
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${globalColors.background};
    --shape: ${globalColors.shape};

    --text-title: ${globalColors.textTitle};
    --text-body: ${globalColors.textBody};
    --text-button: ${globalColors.textButton};
    
    --input-background: ${globalColors.inputBackground};
    --input-border: ${globalColors.inputBorder};

    --blue: ${globalColors.blue};
    --blue-light: ${globalColors.blueLight};
    --green: ${globalColors.green};
    --red: ${globalColors.red};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 728px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`
