import styles from "./Container.module.css";

const Container = ({ children }) => {
  const { container } = styles;
  return <div className={container}>{children}</div>;
};

export default Container;
