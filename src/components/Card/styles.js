import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 203, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: bold;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${(propos) =>
    propos.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 5;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(propos) => propos.color};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  button{
    height: 24px;
    padding: 0 5px;
    cursor: pointer;
    background: none;
    color: #03c6fc;
    border-radius: 5px;
    border: none;
  }
  button:hover{
    text-decoration: underline;
  }
`;
