import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch, 
    isFetching, 
    isPreviousData 
  } = useQuery('posts', fetchPosts, {
    // Cache settings
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60 * 1, // Mark data as fresh for 1 minute
    refetchOnWindowFocus: false, // Prevent refetch when window regains focus
    keepPreviousData: true, // Keep previous data while new data is being fetched
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {isPreviousData && <p>Previous data being loaded...</p>}
    </div>
  );
}

export default PostsComponent;
