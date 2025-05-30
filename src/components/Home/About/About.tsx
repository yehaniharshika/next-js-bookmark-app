"use client";

import { lilitaOne, nunito } from "@/app/fonts/fonts";
import React from "react";
import { TbBookmarkPlus, TbFolders, TbWorldCheck } from "react-icons/tb";

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 py-12 px-6 sm:px-10 md:px-20">
      {/* Header & Description */}
      <div className="text-center mb-12">
        <h4
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-pink-800 ${lilitaOne.className}`}
          style={{ fontWeight: "bold" }}
        >
          About Our Bookmark App
        </h4>
        <p
          className={`mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto ${nunito.className}`}
          style={{ fontWeight: "800" }}
        >
          Our app helps you effortlessly save and organize your favorite
          websites, articles, videos, and other online resources. With a sleek,
          user-friendly interface and powerful organization tools, you can
          quickly categorize, tag, and access your saved content anytime,
          anywhere - making your digital life more efficient and stress-free.
        </p>
      </div>

      {/* Feature Cards */}
      <div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto"
        style={{ maxWidth: "70%" }}
      >
        {/* Card 1 */}
        <div className="bg-pink-200 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center border-2 border-pink-600">
          <TbBookmarkPlus className="text-5xl text-pink-600 mx-auto mb-3" />
          <h2
            className={`text-xl font-bold text-rose-900 mb-2 ${nunito.className}`}
          >
            Easy Bookmarking
          </h2>
          <p className={`text-gray-700 ${nunito.className}`}>
            Quickly save links with one click and organize them into categories
            and folders.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-200 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center border-2 border-pink-600">
          <TbFolders className="text-5xl text-pink-600 mx-auto mb-3" />
          <h2
            className={`text-xl font-bold text-rose-900 mb-2 ${nunito.className}`}
          >
            Organized Collections
          </h2>
          <p className={`text-gray-700 ${nunito.className}`}>
            Sort your favorite websites with folders, tags, and labels for easy
            access anytime.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-pink-200 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center border-2 border-pink-600border-2 border-pink-600">
          <TbWorldCheck className="text-5xl text-pink-600 mx-auto mb-3" />
          <h2
            className={`text-xl font-bold text-rose-900 mb-2 ${nunito.className}`}
          >
            Access Anywhere
          </h2>
          <p className={`text-gray-700 ${nunito.className}`}>
            Access bookmarks from any device with secure cloud syncing across
            your browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
