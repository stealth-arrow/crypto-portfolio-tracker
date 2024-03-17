import WebSocketComponent from '../components/WebSocketComponent';

const HomePage = () => {
  return (
    <div>
      <h1 className="mt-10 text-center text-4xl font-black text-green-600 dark:text-white">Crypto Portfolio Tracker</h1>
      <WebSocketComponent />
    </div>
  );
};

export default HomePage;