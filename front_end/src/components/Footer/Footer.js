import React from 'react';
import { SocialMedia, SocialIcons, FooterContainer, SocialWrapper, SocialIconLink, ProjectLogoLink, ProjectLogoIcon } from './Footer.elements';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <SocialMedia>
                    <SocialWrapper>
                        <ProjectLogoLink to='/'>
                            <ProjectLogoIcon />
                            Revac_Project
                        </ProjectLogoLink>
                        <SocialIcons>
                            <SocialIconLink href={"https://www.facebook.com"} target="_blank">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href={"https://www.youtube.com"} target="_blank">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href={"https://www.instagram.com"} target="_blank">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialWrapper>
                </SocialMedia>
            </FooterContainer>
        </>
    );
}

export default Footer;