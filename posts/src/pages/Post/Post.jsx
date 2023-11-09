import React from 'react';
import Comment from './Comment/Comment';

// Parent Component
function Post() {
    const postStyles = {
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#f9f9f9',
      };
    
      const h2Styles = {
        fontSize: '1.5rem',
        marginBottom: '10px',
      };
    
      const pStyles = {
        fontSize: '1rem',
      };
  return (
    <div style={postStyles}>
      <h2 style={h2Styles}>Post Title</h2>
      <p style={pStyles}>Post content goes here.</p>
      {/* Child component-Comment pass argument-username,text,replies */}
      <Comment
        username="User1"
        text="This is a comment on the post."
        replies={[
          { username: "User2", text: "Reply 1 to the comment." },
          { username: "User3", text: "Reply 2 to the comment." },
        ]}
      />
    </div>
  );
}

export default Post;
