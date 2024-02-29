// import React from "react";

import Container from "./ui/container";
import { cn } from "../utils/cn";

export default function App() {
  return (
    <Container>
      <h1 className={cn("text-2xl text-stone-950")}>React + Tailwind + Vite</h1>
    </Container>
  );
}
