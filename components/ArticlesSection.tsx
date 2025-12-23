"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

// Article type definition
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

const ArticlesSection = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);

  // Sample articles data
  const articles: Article[] = [
    {
      id: "1",
      title: "The simplest example is kafka + golang",
      excerpt: "This article presents a simple way to implement a microservice architecture using Kafka, Golang and Docker.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Backend",
      link: "#"
    },
    {
      id: "2",
      title: "The simplest example is kafka + golang",
      excerpt: "This article presents a simple way to implement a microservice architecture using Kafka, Golang and Docker.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "DevOps",
      link: "#"
    },
    {
      id: "3",
      title: "The simplest example is kafka + golang",
      excerpt: "This article presents a simple way to implement a microservice architecture using Kafka, Golang and Docker.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Frontend",
      link: "#"
    },
    {
      id: "4",
      title: "The simplest example is kafka + golang",
      excerpt: "This article presents a simple way to implement a microservice architecture using Kafka, Golang and Docker.",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "Architecture",
      link: "#"
    },
    {
      id: "5",
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for building large-scale React applications with TypeScript and modern tooling.",
      date: "Nov 20, 2024",
      readTime: "10 min read",
      category: "Frontend",
      link: "#"
    },
    {
      id: "6",
      title: "PostgreSQL Performance Optimization",
      excerpt: "Deep dive into PostgreSQL query optimization, indexing strategies, and performance monitoring techniques.",
      date: "Nov 15, 2024",
      readTime: "12 min read",
      category: "Database",
      link: "#"
    }
  ];

  const loadMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 3, articles.length));
  };

  return (
    <section id="articles" className="min-h-screen py-20 px-4 bg-dark-primary">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-sm font-fira text-light-secondary mb-4 tracking-widest">
              ... /Articles ...
            </h2>
          </div>

          {/* Featured Stats or Intro */}
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-light-secondary">
              <BookOpen className="h-5 w-5" />
              <span className="font-sans text-sm">{articles.length} Articles</span>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              index={index}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleArticles < articles.length && (
          <div className="text-center">
            <Button
              onClick={loadMoreArticles}
              size="lg"
              variant="outline"
              className="group border-light-primary/20 hover:border-light-primary hover:bg-light-primary/10 text-light-primary rounded-full px-8"
            >
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <button 
            className="w-8 h-8 rounded-full bg-light-primary flex items-center justify-center text-dark-primary font-sans text-sm font-semibold"
          >
            1
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-dark-secondary hover:bg-dark-secondary/70 flex items-center justify-center text-light-secondary hover:text-light-primary font-sans text-sm transition-colors"
          >
            2
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-dark-secondary hover:bg-dark-secondary/70 flex items-center justify-center text-light-secondary hover:text-light-primary font-sans text-sm transition-colors"
          >
            3
          </button>
        </div>
      </div>
    </section>
  );
};

// Article Card Component
const ArticleCard = ({ 
  article, 
  index 
}: { 
  article: Article; 
  index: number;
}) => {
  return (
    <article 
      className="group animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <a href={article.link} className="block h-full">
        <div className="bg-dark-secondary/30 border border-dark-secondary rounded-2xl p-6 hover:border-light-secondary/30 hover:bg-dark-secondary/50 transition-all duration-300 h-full flex flex-col">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-dark-primary border border-dark-secondary rounded-full text-light-primary font-fira text-xs">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-fira font-semibold text-light-primary mb-3 group-hover:text-light-primary/90 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-light-secondary font-sans text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-light-secondary text-xs font-sans pt-4 border-t border-dark-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-4">
            <Button
              variant="ghost"
              size="sm"
              className="group/btn w-full justify-between text-light-primary hover:bg-dark-primary/50 rounded-full px-4"
            >
              <span className="font-sans text-sm">Read more</span>
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticlesSection;