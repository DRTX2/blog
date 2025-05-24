import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold mb-4">Welcome 👋</h1>
      <p className="text-gray-700">Start logging your dev thoughts here!</p>
    </MainLayout>
  );
};

export default Home;
