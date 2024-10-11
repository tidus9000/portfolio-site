import React from "react";

interface BlogProps {
  className?: string;
}
const Blog: React.FC<BlogProps> = ({ className }) => {
  return <div className={className}>Blog</div>;
};

export default Blog;
