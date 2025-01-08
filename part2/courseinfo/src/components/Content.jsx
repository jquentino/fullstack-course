import Part from "./Part";

const Content = ({ array_of_items }) => {
  return (
    <div>
      <ul>
        {array_of_items.map((item) => (
          <Part key={item.id} name={item.name} exercises={item.exercises} />))
        }
      </ul>
    </div>
  );
};

export default Content
