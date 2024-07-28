import CreateTodo from "./components/CreateTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl text-center mb-4">To Do List</h1>
      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <CreateTodo />
          <ListTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
