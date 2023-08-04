import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .meal-info {
    padding-top: 2rem;
  }
  .meal p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .meal-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .img {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .meal {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .meal-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
