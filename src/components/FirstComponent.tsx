import React, { CSSProperties } from "react";

export default function FirstComponent() {
  let styles: { [key: string]: CSSProperties } = {
    container: { width: "100%", textAlign: "center" },
    bold: { fontWeight: "bold", display: "inline" },
  };
  return (
    <div style={styles.container}>
      This is a simple <div style={styles.bold}>component</div>
    </div>
  );
}
