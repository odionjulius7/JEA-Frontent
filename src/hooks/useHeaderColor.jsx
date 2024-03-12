import { useEffect, useState } from "react";

const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState(false);
  const [textColor, setTextColor] = useState(false);
  //to handle shadow of header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 8) {
        setHeaderColor("#000000");
        setTextColor("#ffffff");
      } else {
        setHeaderColor("none");
        setTextColor(false); // Replace 'default-color' with your default text color
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { headerColor, textColor };
};

export default useHeaderColor;
