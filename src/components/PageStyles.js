import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Typography, Link } from '@mui/material';
import { Box } from '@mui/system';

// Page formatting
export const PageTitle = (props) => {
    return (
        <Typography sx={{ fontWeight: 'bold', fontSize: '1.5em' }} {...props}>
            {props.children}
        </Typography>
    );
};

export const Text = ({ isListItem, children, ...props }) => {
    const additionalStyles = isListItem ? { display: 'list-item' } : {};
    return (
      <Typography sx={{ fontSize: '0.8em', ...additionalStyles }} {...props}>
        {children}
      </Typography>
    );
};

export const LargeBreak = (props) => {
    return (
        <Box
        sx={{
            padding: '0.5em',
        }}
    >
        </Box>
    );
};

export const SmallBreak = (props) => {
    return (
        <Box
        sx={{
            padding: '0.3em',
        }}
    >
        </Box>
    );
};

// Lists

export const PageList = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Text isListItem>
              <strike>{item.strikethrough}</strike>{" "}
              {item.text && item.text}
              {item.link && 
                <Link href={item.link} target="_blank" rel="noreferrer" underline="hover">
                  {item.linkText}
                </Link>
              }
              {item.textAfter && item.textAfter}
            </Text>
            {item.subList && <PageSubList items={item.subList} />}
          </li>
        ))}
      </ul>
    );
  };  

  export const PageSubList = ({ items }) => {
    return (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        {items.map((item, index) => (
          <li key={index}>
            <Text isListItem>
              {item.textBeforeLink && item.textBeforeLink}
              {item.link && 
                <Link href={item.link} target="_blank" rel="noreferrer" underline="hover">
                  {item.linkText}
                </Link>
              }
              {item.textAfterLink && item.textAfterLink}
            </Text>
          </li>
        ))}
      </ul>
    );
  };

// Links
export const RedLink = ({ href, children }) => (
    <Link 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      underline="hover" 
      sx={{color: '#D56E61', '&:hover': {color: '#efc7c2'}}}
    >
      {children}
    </Link>
  );

export const GreenLink = ({ href, children, ...props }) => (
  <Link 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    underline="always"
    sx={{ color: '#8CB190', fontWeight: 'bold', '&:hover': {color: '#bfd3c1'} }}
    {...props}
  >
    {children}
  </Link>
);

export const InternalLink = ({ to, children }) => (
  <Link 
    component={RouterLink} 
    to={to} // react-router-dom's link prop for navigation
    underline="hover" 
    sx={{
      color: '#D56E61', 
      '&:hover': {
        color: '#efc7c2',
      },
      textDecoration: 'none'
    }}
  >
    {children}
  </Link>
);