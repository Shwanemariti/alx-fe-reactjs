import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';  // Update path if necessary

describe('TodoList Component', () => {
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the demo todos are rendered
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3); // Adjust based on your initial todos
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    
    // Simulate typing in the input and clicking the "Add Todo" button
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
    
    // Check if the new todo appears in the list
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(4); // Adjust based on your initial todos
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item completion status', () => {
    render(<TodoList />);
    
    const firstTodo = screen.getByText('First Todo'); // Replace with your actual todo name
    fireEvent.click(firstTodo); // Click to toggle completion
    
    // Check if the todo is marked as completed (style, className, etc.)
    expect(firstTodo).toHaveClass('completed'); // Adjust the class name used for completed todos
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    
    const firstTodo = screen.getByText('First Todo'); // Replace with actual todo name
    const deleteButton = screen.getByText('Delete'); // Replace with your delete button text
    
    fireEvent.click(deleteButton); // Click to delete the todo
    
    // Check if the todo is no longer in the list
    expect(firstTodo).not.toBeInTheDocument();
  });
});
const TodoList = ({ tasks, onRemove }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

