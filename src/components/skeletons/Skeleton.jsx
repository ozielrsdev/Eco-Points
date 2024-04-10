import "./Skeleton.css";

// eslint-disable-next-line react/prop-types
const Skeleton = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};

export default Skeleton;
