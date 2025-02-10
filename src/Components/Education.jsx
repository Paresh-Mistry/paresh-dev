// src/Components/MyEducation.jsx
import React from 'react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">My Education Journey</h1>
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-15"></div>
        {/* Education Section */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">University</h2>
          <p className="text-xl text-center mb-4">Bachelor's in Electronics & Telecommunications Engineering</p>
          <p className="text-center text-lg text-gray-700">K.J. Somaiya College of Engineering</p>
          <p className="text-center text-lg text-gray-700">{new Date().getFullYear() > 2026 ? "Under Graduated" : new Date().getFullYear() + " - Present"}</p>
          <p className="text-center text-lg text-gray-700">CGPA : 8.09</p>
        </div>

        {/* Course Section */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Relevant Courses</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Data Structures & Algorithms</li>
            <li>Digital Circuits & Microprocessors</li>
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Operating System</li>
            <li>Computer Networks</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Skills Acquired</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["JavaScript Frameworks", "HTML & CSS", "Embedded Programming", "Python Frameworks", "SQL/NoSQL Database"].map((languages) => (
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-full">{languages}</div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Certifications</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Certified React Developer - Simplilearn</li>
            <li>Java for Beginner - Coursera</li>
            <li>Python - Spoken Tutorial</li>
            <li>Cloud Computing Fundamentals - Simplilearn</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Education;
