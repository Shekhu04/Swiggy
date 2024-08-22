const Shimmer = () => {
  return (
    <div className="shimmer-container p-4 bg-white dark:bg-gray-900 min-h-screen flex flex-wrap gap-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="shimmer-card bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-64 animate-pulse"></div>
      ))}
    </div>
  );
};

export default Shimmer;
