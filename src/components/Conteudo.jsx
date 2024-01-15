import styled from "styled-components";

const Conteudo = ({ children }) => {
  return <StyledConteudo>{children}</StyledConteudo>;
};

const StyledConteudo = styled.main`
  width: 50vw;
  height: 400px;
  border: solid 10px black;
  display: flex;
  /* background-color: white; */
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export default Conteudo;
