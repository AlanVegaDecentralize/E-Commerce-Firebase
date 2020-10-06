import React from 'react';
import { connect } from 'react-redux';
import {
  FooterContainer,
  IconContainer,
  IconAnchor,
  CustomTwitter,
  CustomLinkedIn,
  CustomGitHUb,
  FooterSecret
} from './footer.styles.jsx';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSecret>Contact me:</FooterSecret>
      <IconContainer>
        <IconAnchor
          href={'https://github.com/AlanVegaDecentralize'}
          target={'_blank'}
          referrerPolicy="noreferrer noopener"
          title={'Connect to my code here!'}
        >
          <CustomGitHUb size={'3em'} />
        </IconAnchor>
        <IconAnchor
          href={'https://www.linkedin.com/in/alan-vega/'}
          target={'_blank'}
          referrerPolicy="noreferrer noopener"
          title={'Connect to my professional profile'}
        >
          <CustomLinkedIn size={'3em'} />
        </IconAnchor>
        <IconAnchor
          href={'https://twitter.com/BankzAkuma'}
          target={'_blank'}
          referrerPolicy="noreferrer noopener"
          title={'Connect to the less professional me :D'}
        >
          <CustomTwitter size={'3em'} />
        </IconAnchor>
      </IconContainer>
    </FooterContainer>
  );
};

const mapStatehrefProps = (state) => ({});

const mapDispatchhrefProps = {};

export default connect(mapStatehrefProps, mapDispatchhrefProps)(Footer);
