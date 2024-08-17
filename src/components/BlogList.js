import React from 'react';
import BlogPost from './BlogPost';
import blogPosts from '../blogData';

function BlogList() {
  return (
    <div className="blog-list">
      {blogPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;