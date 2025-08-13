import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%", background: "#222", color: "#fff", padding: "1em", textAlign: "center", zIndex: 1000 }}>
      This site uses cookies to improve your experience.{" "}
      <button onClick={acceptCookies} style={{ marginLeft: "1em" }}>Accept</button>
    </div>
  );
};

export default CookieConsent;