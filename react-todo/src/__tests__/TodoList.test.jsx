import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter a new todo')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Enter a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(screen.getByText('Delete'));
    expect(todoItem).not.toBeInTheDocument();
  });
});
