import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const listContainer = css`
  flex-grow: 1;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow-y: auto;

  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 424px;
    overflow-y: auto;

    & > li {
      box-sizing: border-box;
      padding: 5px 15px;
      border-bottom: 1px solid #dbdbdb;
      display: flex;
      align-items: center;

      & > input[type="checkbox"] {
        display: none;

        & + label {
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          border: 1px solid #ddbdbd;
          box-sizing: border-box;
        }

        &:checked + label::after {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #0b4f8f;
        }
      }
    }
  }
`;

export const todoInputContainer = css`
  margin-top: 10px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  height: 40px;

  & > input {
    border: none;
    outline: none;
    padding: 5px 15px;
    width: 100%;
    height: 100%;
  }
`;

export const hiddenTrashBox = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 46px;
  height: 46px;
  overflow: hidden;
  cursor: pointer;

  &:hover > idv {
    right: 0;
  }
`;

export const trashBox = css`
  transition: all 0.2 ease;
  position: absolute;
  top: 0;
  right: -46px;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea0808;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
