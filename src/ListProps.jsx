
import PropTypes from "prop-types";
function ListProps(props) {
    const category = props.category;
    const itemsList = props.items;
  const listItems= itemsList.map((item) => <li key={item.id}>
      {item.name}: &nbsp;
                                        <b>{item.calories}</b>
  </li>);

  return (
      <>
          <h3 className="list-category">{category}</h3>
          <ol className="list-items">{listItems}</ol>
      </>

  );
}
ListProps.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
ListProps.defaultProps = {
    category: "Category",
    items: []
}
export default ListProps;