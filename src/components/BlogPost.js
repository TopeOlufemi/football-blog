import React from 'react';

function BlogPost({ post }) {
  return (
    <article className="blog-post">
      <img src={post.image} alt={post.title} className="post-image" />
      <h2 style={{ color: '#ffcc00' }}>{post.title}</h2>
      <p className="date" style={{ color: '#666', fontSize: '0.9em', marginBottom: '10px' }}>{post.date}</p>
      <p style={{ color: '#333', lineHeight: '1.5' }}>{post.content}</p>
    </article>
  );
}

export default BlogPost;