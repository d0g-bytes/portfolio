import React from "react";
import { TypographyH1 } from "../custom-components/TypographyH1";
import Layout from "../custom-components/Layout";
import CardGrid from "../custom-components/cards-grid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "../components/ui/breadcrumb";
const blogs = [
  {
    id: 1,
    title: "Exploring the Unknown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "exploring-the-unknown",
    tags: ["Adventure", "Travel", "Inspiration"],
  },
  {
    id: 2,
    title: "Designing for the Future",
    description:
      "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    image:
      "https://images.unsplash.com/photo-1683802175712-7348bc779858?q=80&w=2613&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "designing-for-the-future",
    tags: ["Design", "UI/UX"],
  },
  {
    id: 3,
    title: "A Minimalist Lifestyle",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet.",
    image:
      "https://images.unsplash.com/photo-1695153557029-d8d7b8c7617b?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "minimalist-lifestyle",
    tags: ["Lifestyle", "Minimalism", "Wellness"],
  },
];

const Blogging = () => {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Shitpost</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog/shitpost">Shitpost</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TypographyH1>My shitposts</TypographyH1>

      <p className="mt-4 text-muted-foreground text-center max-w-md">
        A place for me to shitpost
      </p>

      <CardGrid blogs={blogs}></CardGrid>
    </Layout>
  );
};

export default Blogging;
