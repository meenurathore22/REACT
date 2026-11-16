import React, { useState, useEffect } from "react";

function OnlineOffline() {
  const [online, setOnline] = useState(
    navigator.onLine
  );

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener(
      "online",
      goOnline
    );

    window.addEventListener(
      "offline",
      goOffline
    );

    return () => {
      window.removeEventListener(
        "online",
        goOnline
      );

      window.removeEventListener(
        "offline",
        goOffline
      );
    };
  }, []);

  return (
    <h2>
      {online
        ? "🟢 Online"
        : "🔴 Offline"}
    </h2>
  );
}

export default OnlineOffline;