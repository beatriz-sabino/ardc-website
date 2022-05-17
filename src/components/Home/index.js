import React from "react";

// Components
import Button from "../Button";
import Events from "./components/EventsSection";
import Articles from "./components/ArticlesSection";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>

      <div className="gradient">
        <Button btnClass="button-primary">Primary</Button>
        <Button btnClass="button-primary" disabled>
          Primary disabled
        </Button>
        <Button btnClass="button-secondary">Secondary</Button>
        <Button btnClass="button-secondary" disabled>
          Secondary disabled
        </Button>
        <Button btnClass="button-tertiary">Tertiary</Button>
        <Button btnClass="button-tertiary" disabled>
          Tertiary disabled
        </Button>
      </div>

      <div className="zig-zag">
        <Events />
      </div>

      <div className="gradient">
        <h2>Conhece os nossos mentores. -- to be done</h2>
      </div>

      <div className="zig-zag">
        <Articles />
      </div>

      <div className="bg-pink">
        <h2>Ajuda o projecto a crescer -- to be done</h2>
      </div>
    </div>
  );
}

export default Home;
