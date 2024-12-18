import React from 'react';

const Background = ({ imageUrl, children }) => {
  const styles = {
    background: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: 0,
      padding: 0,
    },
  };

  return <div style={styles.background}>{children}</div>;
};

export default Background;
