/**
 * give class names and return string
 *
 * example:
 *
 *
 * classNames('class1', 'class2', { class2:true, show:class3_module, [class4_module]:false })
 * @param props
 * @returns string
 */
export const classNames = (...props) => {
  const classes= [];
  props.forEach((item) => {
    if (typeof item === "string") {
      classes.push(item);
    } else if (typeof item === "object") {
      Object.entries(item).forEach(([key, value]) => {
        if (value === true || value === false) {
          if (value) classes.push(key);
        } else {
          classes.push(value);
        }
      });
    }
  });

  return classes.join(" ");
};
