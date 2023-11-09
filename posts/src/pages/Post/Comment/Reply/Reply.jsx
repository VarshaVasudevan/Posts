import React from 'react';

// Subchild Component
function Reply({ username, text }) {
    const replyStyles = {
        margin: '10px 0',
        padding: '5px',
        border: '1px solid #eee',
        backgroundColor: '#fafafa',
      };
    
      const strongStyles = {
        fontWeight: 'bold',
      };
  return (
    <div style={replyStyles}>
      <strong style={strongStyles}>{username}:</strong> {text}
    </div>
  );
}

export default Reply;
