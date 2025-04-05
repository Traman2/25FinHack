import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("model");
  };

  return (
    <>
    <NavBar></NavBar>
      <div
        className="relative h-[600px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/Organic-shapes-BG-Blue.svg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Taskmaster AI</h1>
          <p className="text-lg max-w-xl mx-auto">
            Your intelligent productivity assistant. Automate tasks, manage time
            efficiently, and boost productivity with AI-powered insights.
          </p>
          <button onClick={handleClick} className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg">
            Get Started
          </button>
        </div>
        
      </div>
      <div className="w-full px-4 h-[800px] bg-blue-950 bg-opacity-90">
        <h1 className="text-4xl font-bold text-white mx-auto px-2 pt-20 pb-5 max-w-[1080px]">Lorem ipsum dolor sit.</h1>
        <p className="text-white max-w-[1080px] mx-auto px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero
          est illo id molestias qui aut possimus repellat, quisquam tempora
          officiis voluptatibus minima necessitatibus ratione beatae ex culpa.
          Assumenda, saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quasi qui voluptatem quae quam? Ex saepe facilis culpa voluptates quasi, repellat a veritatis pariatur in eligendi obcaecati cumque architecto sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni architecto doloremque consequuntur quos eligendi praesentium commodi consectetur! Ullam incidunt qui sint voluptatem suscipit quam assumenda dolorum, ad a vel!
        </p>
      </div>
    </>
  );
}

export default Dashboard;
