import React from "react";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "../components/counter";
import Counters from "../components/counters";
import Navbar from "../components/navbar";
import { action } from "@storybook/addon-actions";

export default {
  title: "App"
};
const c = { id: 1, value: 4 };
export const CounterStories = () => (
  <Counter
    key={c.id}
    item={c}
    increment={action("Increment clicked from counter")}
    onDelete={action("Delete clicked from counter")}
    onDecrement={action("Decrement clicked from counter")}
  />
);
export const CountersStories = () => (
  <Counters
    counters={[
      { id: 1, value: 4 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]}
    increment={action("Increment clicked from counters")}
    onDelete={action("Delete clicked from counters")}
    onDecrement={action("Decrement clicked from counter")}
  />
);
export const NavbarStories = () => <Navbar />;
export const AppStories = () => <App />;
