import { useEffect, useState } from "react";
import Weather from "./Weather";
const WebsiteBanner = () => {
  return (
    <div className="banner">
      <h2 className="website-brand">GNA</h2>
      <Weather />
    </div>
  );
};
export default WebsiteBanner;
