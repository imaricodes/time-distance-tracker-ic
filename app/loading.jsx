export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-lg font-semibold">Loading...</h2>
        <div className="w-10 h-10 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
