import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import WallPaper from "../components/wallpaper-coton.png"
import { background } from '../../colors';

const Background = () => (
  <div >
    <Triangle
      color="primary"
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
    />
    <Triangle
      color="primary"
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
    <Triangle
      color="primary"
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
      invertX
    />
    <Triangle
      color="primary"
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            {/* <Heading
              textAlign="center"
              as="h1"
              color="#ffffff"
              fontSize={[6, 7]}
            >
              {`Coton.`}
            </Heading>
            <Heading
              textAlign="center"
              as="h5"
              color="#ffffff"
              fontSize={[2, 3]}
              mb={[3, 4, 5]}
            >
              {`Groupement de CTO Freelance`}
            </Heading> */}

            <img src={WallPaper} style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "75%"
            }} />

            <Heading
              as="h2"
              color="#ffffff"
              fontSize={[5, 6]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={5000}>
                {roles
                  .sort(() => deterministicBehaviour || Math.random() - 0.5)
                  .map((text) => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} color="background" />
                </Box>
              ))}
            </Flex>
            <SectionLink section="proposition">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
