import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"; // adjust import path to your project
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface BlogCardData {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  slug?: string;
  tags?: string[];
}

interface CardGridProps {
  blogs: BlogCardData[];
  columns?: string;
  cardHref?: (blog: BlogCardData) => string;
}

const CardGrid: React.FC<CardGridProps> = ({
  blogs = [],
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  cardHref,
}) => {
  const getHref = (blog: BlogCardData) => {
    if (typeof cardHref === "function") return cardHref(blog);
    return blog?.slug ? `/blog/${blog.slug}` : `#`;
  };

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return <div>No posts to show.</div>;
  }

  return (
    <div className={`grid ${columns} gap-6`}>
      {blogs.map((blog) => (
        <article key={blog.id} className="flex">
          <Card className="flex flex-col flex-1">
            {blog.image && (
              <div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              </div>
            )}

            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              {blog.description && (
                <CardDescription>{blog.description}</CardDescription>
              )}
            </CardHeader>

            <CardContent className="flex-1">
              {blog.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((t) => (
                    <Badge variant="outline" key={t}>
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardContent>

            <CardFooter>
              <a href={getHref(blog)}>
                <Button className="w-full">Read post</Button>
              </a>
            </CardFooter>
          </Card>
        </article>
      ))}
    </div>
  );
};

export default CardGrid;
