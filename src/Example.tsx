import React from 'react';
import App from './App';

const styles = {
  content: {
    width: '80%',
    margin: '0 auto',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const Example = () => {
  return (
    <div style={styles.content}>
      <App />
    </div>
  )
};

export default Example;
