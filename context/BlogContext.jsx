'use client';

import React, { createContext } from 'react';
import All_blog_posts from '@/public/db';

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={All_blog_posts}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;