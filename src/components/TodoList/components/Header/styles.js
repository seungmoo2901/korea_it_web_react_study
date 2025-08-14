import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
`;

export const searchInput = css`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px 15px;
`;

export const searchButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 5px 12px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2 ease;

  //&는 현재 선택한것 -> searchButton
  &:hover {
    background-color: #dbdbdb;
  }
`;

export const filterContainer = css`
  padding: 10px 0px;
`;
