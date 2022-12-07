import { WhatBTHSTech, WhatAreWe, WhoBTHSTech, ContactUs } from "./containers";

import { Brand, Navbar, Timeline } from "./components";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Brand />
      <WhatAreWe />
      <WhatBTHSTech />
      <Timeline />
      <WhoBTHSTech />
      <ContactUs />
    </div>
  );
}
