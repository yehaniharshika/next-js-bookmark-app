"use client";

import { bookmarkData } from "@/data/data";
import React from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";


const BookMark: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Bookmarks</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Save, edit, and manage your favorite learning resources in one organized space.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarkData.map((bookmark) => (
          <div
            key={bookmark.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={bookmark.image}
              alt={bookmark.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {bookmark.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                {bookmark.description}
              </p>
              <a
                href={bookmark.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline mb-2 inline-block"
              >
                Visit Link
              </a>
              <p className="text-xs text-gray-500">
                Created: {bookmark.createdAt}
              </p>
              <p className="text-xs text-gray-500">
                Updated: {bookmark.updatedAt}
              </p>
              <div className="flex justify-end gap-4 mt-4 text-gray-600">
                <button className="hover:text-yellow-500" aria-label="Favorite">
                  <FaStar size={18} />
                </button>
                <button className="hover:text-blue-500" aria-label="Edit">
                  <FaEdit size={18} />
                </button>
                <button className="hover:text-red-500" aria-label="Delete">
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMark;
