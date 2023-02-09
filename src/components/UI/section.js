import classes from "./section.module.css";

const Section = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
