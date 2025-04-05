import NavBar from "../components/navbar";

function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl ml-10">
        <h1 className="text-2xl font-bold mt-4 ml">
          Welcome to the Dashboard Page
        </h1>
      </div>
    </>
  );
}

export default Dashboard;
