import Part from "./Part";
import Total from "./Total";
const Content = ({ array_of_items }) => {
  return (
    <div>
      <ul>
        {array_of_items.map((item) => (
          <Part key={item.id} name={item.name} exercises={item.exercises} />))
        }
      </ul>
      <Total array_of_items={array_of_items}/>
    </div>
  );
};

export default Content
