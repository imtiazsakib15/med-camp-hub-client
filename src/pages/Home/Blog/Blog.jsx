import { Link } from "react-router-dom";
import healthyFood from "/healthy-food.jpg";
import anxiety from "/anxiety.jpg";
import suger from "/suger.jpg";

const Blog = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-10">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center">
        Blogs
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="p-4 bg-white border rounded-lg flex flex-col justify-between">
          <img className="h-60 w-full rounded" src={healthyFood} alt="" />
          <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">
            Healthy Living: Tips for a Strong Immune System
          </h2>
          <p className="mb-3 text-gray-500">
            Explore the latest research and expert advice on how to bolster your
            immune system naturally.From dietary suggestions to lifestyle
            changes, this blog...
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 bg-white border rounded-lg flex flex-col justify-between">
          <img className="h-60 w-full rounded" src={anxiety} alt="" />
          <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">
            Understanding Anxiety: Symptoms, and Treatments
          </h2>
          <p className="mb-3 text-gray-500">
            Delve into the complexities of anxiety disorders with insights from
            mental health professionals. Gain a deeper understanding of the
            various types of anxiety, effective...
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4 bg-white border rounded-lg flex flex-col justify-between">
          <img className="h-60 w-full rounded" src={suger} alt="" />
          <h2 className="my-3 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">
            Demystifying Diabetes: Facts, Myths, and Management Tips
          </h2>
          <p className="mb-3 text-gray-500">
            Unravel the truths behind diabetes, from debunking common
            misconceptions to providing practical advice on diet, exercise, and
            medication management. Stay...
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
