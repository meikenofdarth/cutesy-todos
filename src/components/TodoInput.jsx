/* eslint-disable react/prop-types */

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        placeholder="Enter your task..."
        className=""
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        className=""
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add Todo
      </button>
    </header>
  );
};

export default TodoInput;
