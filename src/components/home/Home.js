import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Style from './Home.module.scss';
import me from '../../img/avatar.png';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { info } from '../../info/Info';

export default function Home() {
  /* eslint-disable no-unused-vars */
  return (
    <Box
      component="main"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 175px)"
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt="image of developer"
        style={{ background: info.gradient }}
        component="img"
        src={me}
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        borderRadius="50%"
        p="0.75rem"
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I&apos;m
          <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>
          I&apos;m
          {info.position}
          .
        </h2>

        <Box component="ul" p="0.8rem">
          {info.miniBio.map((bio, index) => (
            // ...

            <Box key={uuidv4()} component="ul" p="0.8rem">
              {info.miniBio.map((bio) => (
                <EmojiBullet key={uuidv4()} emoji={bio.emoji} text={bio.text} />
              ))}
            </Box>
          ))}
        </Box>
        <Box display="flex" gap="1.5rem" justifyContent="center" fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {info.socials.map((social, index) => (
            <SocialIcon key={uuidv4()} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
