import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({ height: 0, width: 0 });

  const updateDimension = () => {
    const { innerHeight, innerWidth } = window;
    setDimension({ height: innerHeight, width: innerWidth });
  };

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return dimension;
};

export default useDimension;
