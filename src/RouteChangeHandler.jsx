import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Re-run theme JS safely
    if (window.load_owl) window.load_owl();
    if (window.load_magnificPopup) window.load_magnificPopup();

  }, [location.pathname]);

  return null;
};

export default RouteChangeHandler;
