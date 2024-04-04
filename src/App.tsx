import type { Component } from "solid-js";
import NeutralinoLogo from "./assets/neutralino.gif";
import SolidLogo from "./assets/solidjs.svg";
const App: Component = () => {
  return (
    <>
      <p class="text-4xl text-center py-20">
        Hello <span class="text-blue-500">SolidJS</span> +{" "}
        <span class="text-yellow-700">Neutralino</span>!
      </p>
      <div class="inline-flex gap-x-4 w-full justify-center items-center h-fit">
        <img src={NeutralinoLogo} width="256" alt="Neutralino Logo" />
        <span class="bold text-7xl h-full">+</span>
        <img src={SolidLogo} width="256" alt="Solid Logo" />
      </div>
    </>
  );
};

export default App;
