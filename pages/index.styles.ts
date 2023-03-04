import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    flex-basis: 100%;
  }

  > :first-child {
    order: 1;
    margin-bottom: 20px;
  }

  > :last-child {
    order: 2;
    margin-left: 20px;
    flex-basis: calc(50% - 20px);
  }

  @media screen and (min-width: 900px) {
    justify-content: flex-start;

    > * {
      flex-basis: auto;
      margin: 0;
    }

    > :first-child {
      order: 1;
      flex-basis: 45%;
      margin-right: 20px;
    }

    > :last-child {
      order: 2;
      flex-basis: 50%;
    }
  }
`;
