const Total = ({ array_of_items }) => {
  const total = array_of_items.reduce(
    (sum, item) => sum + item.exercises, 0
  )
  return (
    <div>
      <p><b>Total of exercises {total}</b></p>
    </div>
  );
};

export default Total
