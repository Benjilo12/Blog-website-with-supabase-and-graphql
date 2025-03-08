import { useEffect } from "react";

function Helmet({ title, children }) {
  useEffect(() => {
    // Update the document title
    document.title = `Wild Blog - | ${title}`;
  }, [title]); // Run the effect whenever the title changes

  return <div>{children}</div>;
}

export default Helmet;
