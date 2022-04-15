export const renderView = ({ children, error, loading }) => {
  if (loading) return <p>Loading</p>;
  if (error) return <p>An error occurred when loading posts.</p>;
  return children;
};
