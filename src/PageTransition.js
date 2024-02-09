import { useTransition, animated } from "react-spring";

const PageTransition = ({ children }) => {
  const transitions = useTransition(children, {
    from: { opacity: 0, transform: "translate3d(0%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
  });

  return transitions((style, child) => (
    <animated.div
      style={{ ...style, position: "absolute", width: "100%", height: "100%" }}
    >
      {child}
    </animated.div>
  ));
};

export default PageTransition;
