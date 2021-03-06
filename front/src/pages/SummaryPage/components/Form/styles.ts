import styled, { css } from "styled-components";

import { theme } from "assets/theme";

const { media } = theme;

const btn = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn("#4f93ce", "#285f8f");

export default styled.div`
  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    ${media.sm} {
      padding: 0;
    }
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;

      line-height: 2em;
      margin: 5px;
      > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        ${media.sm} {
          font-size: 0.9em;
        }
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type="checkbox"] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 25px;

      ${media.sm} {
        flex-direction: column;
      }

      & > .buttonContainer {
        display: flex;
        justify-content: center;
      }
    }
    button {
      margin: 0 10px;
      ${btnPrimary};
      ${media.sm} {
        margin: 10px;
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`;
