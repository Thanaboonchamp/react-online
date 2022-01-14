import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = styled.button`
  background: ${props => props.Keyword==='correct' ? "palevioletred" : "white"};
  color: ${props => props.Keyword==='correct' ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
Button.propTypes = {
    Keyword: PropTypes.string
};
export default Button