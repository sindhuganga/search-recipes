import styled from "styled-components";
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 2rem;
  /* :hover {
    box-shadow: var(--shadow-4);
  } */
  img {
    height: 15rem;

    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

export default Wrapper;
