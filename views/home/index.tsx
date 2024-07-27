import { Public } from "@/layouts/Public";

import CTA from "./islands/CTA";
import Features from "./islands/Features";
import Hero from "./islands/Hero";

const Home = () => (
  <Public>
    <Hero />
    <Features />
    <CTA />
  </Public>
);

export { Home };
