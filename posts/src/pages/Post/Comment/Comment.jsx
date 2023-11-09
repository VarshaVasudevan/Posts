import React from 'react';
import Reply from './Reply/Reply';

// Child Component
function Comment({ username, text, replies }) {
    const commentStyles = {
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ddd',
        backgroundColor: '#f0f0f0',
      };
    
      const strongStyles = {
        fontWeight: 'bold',
      };
    
      const ulStyles = {
        listStyle: 'none',
      };
    
      const liStyles = {
        margin: '10px 0',
      };
  return (
    <div style={commentStyles}>
      <strong style={strongStyles}>{username}:</strong> {text}
      {replies && (
        <ul style={ulStyles}>
          {replies.map((reply, index) => (
            <li key={index} style={liStyles}>
            {/* Child Component-Comment passes argument-username and text to
            Subchild Component-Reply */}
              <Reply username={reply.username} text={reply.text} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Comment;
