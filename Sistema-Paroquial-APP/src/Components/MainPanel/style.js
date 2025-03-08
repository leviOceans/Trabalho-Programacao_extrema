import styled from "styled-components";

export const MainPanelStyle = styled.div`
  padding: 3.5rem 0;
  min-width: 60%;
  display: flex;
  justify-content: center;
  align-content: center;

  .panel {
    padding: 4.5rem;
    display: flex;
    flex-direction: column;
  }

  img {
    width: fit-content;
    height: 20rem;
    justify-self: center;
    align-self: center;
  }

  h2 {
    margin-top: 1rem;
    font-weight: 800;
  }
`;
