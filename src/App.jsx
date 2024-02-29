import React from "react";

import Container from "./ui/container";
import { cn } from "../utils/cn";
import Slider from "./ui/slider";

// Category:Cyberpunk 2077 Characters

export default function App() {
  // const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState();

  const [data, setData] = React.useState({
    categories: [],
    nodes: [],
  });

  const characters = data.nodes.filter((node) => {
    return node.categories.find(
      (category) => category == "Category:Cyberpunk 2077 Characters",
    );
  });

  React.useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Container>
      <Slider open={!!active} setOpen={() => setActive(null)} />

      <ul className="grid grid-cols-8 gap-4">
        {characters.map((character, i) => {
          const [first, last] = character.uid.split(" ");

          return (
            <li key={i} className={cn("flex items-center justify-center")}>
              <div
                className="flex size-24 items-center justify-center rounded-full bg-slate-100"
                onClick={() => setActive(character.uid)}
                role="button"
              >
                <h2>
                  {first[0]} {last?.[0]}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

function fetchData() {
  return fetch("http://localhost:3000/cyberpunk.json")
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}
