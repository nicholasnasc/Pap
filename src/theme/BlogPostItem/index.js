import React from 'react';
import clsx from 'clsx';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import styles from './styles.module.css';

export default function BlogPostItem({children, className}) {
  return (
    <article className={clsx(styles.papBlogPost, className)}>
      <BlogPostItemContainer>
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </BlogPostItemContainer>
    </article>
  );
}
