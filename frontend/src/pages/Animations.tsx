import React from "react";
import { TypographyH1 } from "../custom-components/TypographyH1";
import Layout from "../custom-components/Layout";

const Animations = () => {
  return (
    <Layout>
      <TypographyH1>Animations</TypographyH1>

      <p className="mt-4 text-muted-foreground text-center max-w-md">
        Simple animations built with Framer Motion + TailwindCSS.
      </p>
    </Layout>
  );
};

export default Animations;
