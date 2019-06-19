// import { Content } from "react-bulma-components/full";
import React from "react";

function TheFooter(props) {
  return (
      <div className="foot"  style={{ textAlign: "center" }}>
        <p>
          <strong>Grolist</strong> by{" "}
          <a href="https://github.com/jolbax">Jolbax</a>. The source code is
          licensed{" "}
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
  );
}

export default TheFooter;
