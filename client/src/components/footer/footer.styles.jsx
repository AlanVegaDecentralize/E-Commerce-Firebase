import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const footerStyles = css`
  background-color: #3b414f;
  color: white;
  border: none;
`;

export const FooterContainer = styled.div`
  width: 100%;
  align-items: center;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  ${footerStyles}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const IconAnchor = styled.a`
  @media {
    width: 50px;
    padding: 0;
  }
`;

export const styledIcon = css`
  color: white;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const FooterSecret = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Libre Barcode 39 Text', cursive;
  font-size: 2.5em;
`;

export const CustomLinkedIn = styled(AiFillLinkedin)`
  ${styledIcon}
`;
export const CustomTwitter = styled(AiFillTwitterSquare)`
  ${styledIcon}
`;
export const CustomGitHUb = styled(FaGithubSquare)`
  ${styledIcon}
`;
