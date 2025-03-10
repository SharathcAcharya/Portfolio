import { useEffect, useState } from "react";

const BLOG_URL = "https://technicaladda2002.blogspot.com";

interface Blog {
  title: string;
  brief: string;
  coverImage: string;
  slug: string;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Since Blogspot doesn't have a public API, we'll use sample blog data
        const sampleBlogs = [
          // {
          //   title: "Technical Adda - Your Tech Learning Hub",
          //   brief: "Welcome to Technical Adda, your one-stop destination for programming tutorials, tech insights, and coding tips.",
          //   coverImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvV6qj2RpQy4PqZzMw8ScLLRwwDcJR1Jj4YzZzK8J5YzZzK8J5/s1600/tech-blog.jpg",
          //   slug: ""
          // },
          {
            title: "Technical Adda - Your Tech Learning Hub",
            brief: "Welcome to Technical Adda, your one-stop destination for programming tutorials, tech insights, and coding tips.",
            coverImage: '/assets/adda.png',
            slug: ""
          },
          // {
          //   title: "Web Development Guide",
          //   brief: "Explore web development tutorials, best practices, and modern development techniques for building better websites.",
          //   coverImage: null,
          //   slug: ""
          // }
        ];

        setBlogs(sampleBlogs);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
}
