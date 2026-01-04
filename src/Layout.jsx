import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    // Force visibility (theme fix)
    document.body.classList.remove("de-hide");

    const wrapper = document.getElementById("wrapper");
    if (wrapper) wrapper.style.display = "block";
  }, []);

  return <div id="wrapper">{children}</div>;
};

export default Layout;
