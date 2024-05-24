import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handlesignup(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);
      alert("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  }

  return (
    <section className="max_padd_container flexCenter flex-col pt-12">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3>Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input
            type="text"
            placeholder="your name"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn_dark_rounded my-4 w-full rounded-md"
          onClick={handlesignup}
        >
          Continue
        </button>
        <p className="text-black font-bold">
          Already have an Acccount?
          <Link to={"/login"}>
            <span className="text-secondary underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing an account, you agree to the{" "}
            <span>Terms of Service</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
