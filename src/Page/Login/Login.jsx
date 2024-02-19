import { useForm } from "react-hook-form";
import Banner from "../Home/Home/Banner";
import LoginPageBanner from "../LoginPageBanner/LoginPageBanner";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import useAuth from "../../Hooks/useAuth";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import AboutUsBanner from "../Services/AboutUsBanner";
import Footer from "../Footer/Footer";

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  

  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const { createUser } = useAuth();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const role = document.getElementById("role").innerText;
    console.log(role);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(from,{replace:true});
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <section className="">
    <AboutUsBanner></AboutUsBanner>

      <div
        data-aos="zoom-in"
        className="mx-auto  w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
      >
        <div className="mt-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-roboto text-gray-400 font-bold md:text-5xl">
              Sign Up
            </h2>
            <h3 className="font-roboto text-2xl text-gray-400 font-semibold mt-3">
              Please Sign Up To Continue
            </h3>
            <p className="mx-auto mb-12 font-roboto mt-4 max-w-xl text-gray-400 mb-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-4 text-left sm:px-4 md:px-20"
            name="wf-form-name"
            method="get"
          >
            <motion.div className="float-right -mt-20 rounded-t-2xl     mb-5 bg-gray-200">
              <div role="tablist" className="tabs tabs-boxed">
                {["Patient", "Doctor", "Admin"].map((tabIndex) => (
                  <a
                    id="role"
                    key={tabIndex}
                    role="tab"
                    className={`tab ${
                      activeTab === tabIndex
                        ? "tab-active font-roboto font-semibold text-white "
                        : "font-roboto font-semibold"
                    }`}
                    onClick={() => handleTabClick(tabIndex)}
                  >
                    {tabIndex}
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="mb-4 grid grid-cols-2 gap-6">
              <div data-aos="fade-right">
                <input
                  type="text"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#333333]"
                  placeholder="First Name"
                  required=""
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                {errors.firstName && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-left">
                <input
                  type="text"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#333333]"
                  placeholder="Last Name"
                  required=""
                  {...register("lastName", { required: true, maxLength: 20 })}
                />
                {errors.lastName && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-right">
                <input
                  type="email"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#333333]"
                  placeholder="Email"
                  required=""
                  {...register("email", { required: true, maxLength: 20 })}
                />
                {errors.email && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-left">
                <input
                  type="text"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#333333]"
                  placeholder="Mobile Number"
                  required=""
                  {...register("mobileNumber", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.mobileNumber && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-right">
                <input
                  type="text"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#333333]"
                  placeholder="NIC"
                  required=""
                  {...register("nic", { required: true, maxLength: 20 })}
                />
              </div>

              <div data-aos="fade-left">
                <input
                  type="text"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#333333]"
                  placeholder="Date of Brith"
                  required=""
                  {...register("dateofBrith", {
                    required: true,
                    maxLength: 20,
                  })}
                />

                {errors.dateofBrith && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-6">
              <div data-aos="fade-right">
             
                <input
                  type=""
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#333333]"
                  placeholder="Gender"
                  required=""
                  {...register("Gender", { required: true, maxLength: 6 })}
                />
                {errors.Gender && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="zoom-in">
                <input
                  type="password"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#333333]"
                  placeholder="Password"
                  required=""
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.password && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-left">
                <input
                  type="password"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#333333]"
                  placeholder="Confrim Pasword"
                  required=""
                  {...register("confrimPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.confrimPassword && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>
            </div>

            <label className="mb-1 flex pb-4 font-medium">
              <input type="checkbox" name="checkbox-3" />
              <span
                className="ml-4 inline-block cursor-pointer text-sm"
                for="checkbox-3"
              >
                I agree with the{" "}
                <a href="#" className="font-bold text-[#0b0b1f]">
                  Terms &amp; Conditions
                </a>
              </span>
            </label>
            <motion.input
              whileHover={{
                scale: 1.1,

                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              data-aos="zoom-in"
              type="Submit"
              className="px-6 w-56 flex justify-center mx-auto ease-in duration-300 py-2 bg-[#9083D5] text-xl font-roboto font-semibold text-white rounded-xl mt-5"
            ></motion.input>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Login;
