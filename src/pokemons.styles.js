import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 10px;
  margin: 1rem auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnlayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

export { Container, Title, TwoColumnlayout };
