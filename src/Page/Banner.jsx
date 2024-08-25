import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#7281ff] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Left Section */}
      <div className="text-[#f8e4e5] md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Walk your child with coding!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join us now and learn your child with modern javascript programme. <br />
          So  why waiting? Let's start now...
        </p>
        <Link to={"/enroll_form"}>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full">
            Enroll now
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <img
          src="/online-school-design.png" // Replace this with the actual path to your image
          alt="Child Hero Illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
