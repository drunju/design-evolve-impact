
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  readTime,
}) => {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden rounded-t-lg h-52">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
          <span>{date}</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="text-teal font-medium flex items-center hover:text-teal-dark transition-colors"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
