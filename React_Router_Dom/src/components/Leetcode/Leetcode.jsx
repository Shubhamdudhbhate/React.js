// // src/components/LeetCode/LeetCode.jsx
// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// function LeetCode() {
//   const data = useLoaderData();

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
//         {/* Header */}
//         <div className="flex items-center space-x-6 mb-6">
//           <img
//             src={data.avatar}
//             alt="User Avatar"
//             className="w-24 h-24 rounded-full border-2 border-orange-500"
//           />
//           <div>
//             <h1 className="text-3xl font-bold text-orange-500">{data.username}</h1>
//             <p className="text-gray-300">Ranking: #{data.ranking || 'N/A'}</p>
//           </div>
//         </div>

//         {/* Problem Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           <div className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 transform transition">
//             <h2 className="text-xl font-semibold text-orange-500">Solved</h2>
//             <p className="text-gray-300 text-2xl">{data.totalSolved}</p>
//           </div>
//           <div className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 transform transition">
//             <h2 className="text-xl font-semibold text-orange-500">Easy</h2>
//             <p className="text-gray-300 text-2xl">{data.easySolved}</p>
//           </div>
//           <div className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 transform transition">
//             <h2 className="text-xl font-semibold text-orange-500">Medium</h2>
//             <p className="text-gray-300 text-2xl">{data.mediumSolved}</p>
//           </div>
//           <div className="bg-gray-700 p-4 rounded-lg text-center hover:scale-105 transform transition">
//             <h2 className="text-xl font-semibold text-orange-500">Hard</h2>
//             <p className="text-gray-300 text-2xl">{data.hardSolved}</p>
//           </div>
//         </div>

//         {/* Progress / Topics */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-orange-500 mb-2">Top Topics</h2>
//           <div className="flex flex-wrap gap-2">
//             {data.topics?.map((topic, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full hover:bg-orange-600 transition"
//               >
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-orange-500 mb-2">Progress</h2>
//           <div className="bg-gray-700 rounded-full h-6 w-full overflow-hidden">
//             <div
//               className="bg-orange-500 h-6"
//               style={{ width: `${data.progressPercentage || 0}%` }}
//             ></div>
//           </div>
//           <p className="text-gray-300 mt-1">{data.progressPercentage || 0}% completed</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeetCode;

// // Loader
// export const leetcodeLoader = async () => {
//   const response = await fetch(
//     'https://leetcode-stats-api.herokuapp.com/ganeshgadhave'
//   );
//   const result = await response.json();

//   return {
//     username: result.userName,
//     avatar: result.avatar,
//     ranking: result.ranking,
//     totalSolved: result.totalSolved,
//     easySolved: result.easySolved,
//     mediumSolved: result.mediumSolved,
//     hardSolved: result.hardSolved,
//     topics: result.topics || [],
//     progressPercentage: result.progressPercentage || 0,
//   };
// };

// src/components/LeetCode/LeetCode.jsx






// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// function LeetCode() {
//   const data = useLoaderData();

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
//       <div className="max-w-5xl mx-auto space-y-8">

//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
//           <img
//             src={data.avatar}
//             alt="User Avatar"
//             className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg"
//           />
//           <div className="text-center sm:text-left">
//             <h1 className="text-4xl font-bold text-orange-500">{data.username}</h1>
//             <p className="text-gray-300 text-lg mt-2">Ranking: #{data.ranking || 'N/A'}</p>
//             <p className="text-gray-300 text-lg mt-1">Total Problems Solved: {data.totalSolved}</p>
//           </div>
//         </div>

//         {/* Problem Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
//           {['totalSolved', 'easySolved', 'mediumSolved', 'hardSolved'].map((key, index) => {
//             const titles = ['Solved', 'Easy', 'Medium', 'Hard'];
//             return (
//               <div
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center"
//               >
//                 <h2 className="text-xl font-semibold text-orange-500 mb-2">{titles[index]}</h2>
//                 <p className="text-gray-300 text-2xl">{data[key]}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Progress Bar */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
//           <h2 className="text-2xl font-semibold text-orange-500 mb-2">Progress</h2>
//           <div className="bg-gray-700 rounded-full h-6 w-full overflow-hidden">
//             <div
//               className="bg-orange-500 h-6 transition-all duration-1000"
//               style={{ width: `${data.progressPercentage || 0}%` }}
//             ></div>
//           </div>
//           <p className="text-gray-300 mt-2">{data.progressPercentage || 0}% completed</p>
//         </div>

//         {/* Topics */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
//           <h2 className="text-2xl font-semibold text-orange-500 mb-4">Top Topics</h2>
//           <div className="flex flex-wrap gap-3">
//             {data.topics?.map((topic, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-700 text-gray-100 px-4 py-2 rounded-full hover:bg-orange-600 cursor-pointer transition duration-300 transform hover:scale-105"
//               >
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Call-to-Action */}
//         <div className="text-center">
//           <a
//             href="https://leetcode.com"
//             target="_blank"
//             className="inline-block bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300"
//           >
//             Go to LeetCode
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeetCode;

// // Loader
// export const leetcodeLoader = async () => {
//   const response = await fetch('https://leetcode-stats-api.herokuapp.com/');
//   const result = await response.json();

//   return {
//     username: result.userName,
//     avatar: result.avatar,
//     ranking: result.ranking,
//     totalSolved: result.totalSolved,
//     easySolved: result.easySolved,
//     mediumSolved: result.mediumSolved,
//     hardSolved: result.hardSolved,
//     topics: result.topics || [],
//     progressPercentage: result.progressPercentage || 0,
//   };
// };









// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// function LeetCode() {
//   const data = useLoaderData();

//   // If topics are just names, assign random solved counts for display
//   const topicsWithCounts = data.topics?.map((topic) => ({
//     name: topic,
//     solved: Math.floor(Math.random() * 50), // random solved
//     total: 50, // assume 50 problems per topic
//   }));

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
//       <div className="max-w-5xl mx-auto space-y-8">

//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
//           <img
//             src={data.avatar}
//             alt="User Avatar"
//             className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg"
//           />
//           <div className="text-center sm:text-left">
//             <h1 className="text-4xl font-bold text-orange-500">{data.username}</h1>
//             <p className="text-gray-300 text-lg mt-2">Ranking: #{data.ranking || 'N/A'}</p>
//             <p className="text-gray-300 text-lg mt-1">Total Problems Solved: {data.totalSolved}</p>
//           </div>
//         </div>

//         {/* Problem Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
//           {['totalSolved', 'easySolved', 'mediumSolved', 'hardSolved'].map((key, index) => {
//             const titles = ['Solved', 'Easy', 'Medium', 'Hard'];
//             return (
//               <div
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center"
//               >
//                 <h2 className="text-xl font-semibold text-orange-500 mb-2">{titles[index]}</h2>
//                 <p className="text-gray-300 text-2xl">{data[key]}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Overall Progress */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
//           <h2 className="text-2xl font-semibold text-orange-500 mb-2">Overall Progress</h2>
//           <div className="bg-gray-700 rounded-full h-6 w-full overflow-hidden">
//             <div
//               className="bg-orange-500 h-6 transition-all duration-1000"
//               style={{ width: `${data.progressPercentage || 0}%` }}
//             ></div>
//           </div>
//           <p className="text-gray-300 mt-2">{data.progressPercentage || 0}% completed</p>
//         </div>

//         {/* Topics with solved counts */}
//         {topicsWithCounts && topicsWithCounts.length > 0 && (
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
//             <h2 className="text-2xl font-semibold text-orange-500 mb-4">Topics Solved</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {topicsWithCounts.map((topic, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-700 p-4 rounded-lg hover:bg-orange-600 transition transform hover:scale-105"
//                 >
//                   <h3 className="text-lg font-semibold text-gray-100">{topic.name}</h3>
//                   <p className="text-gray-300">
//                     Solved: {topic.solved} / {topic.total}
//                   </p>
//                   <div className="bg-gray-600 rounded-full h-3 w-full mt-2 overflow-hidden">
//                     <div
//                       className="bg-orange-500 h-3 transition-all duration-1000"
//                       style={{ width: `${(topic.solved / topic.total) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Go to LeetCode */}
//         <div className="text-center">
//           <a
//             href="https://leetcode.com"
//             target="_blank"
//             className="inline-block bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300"
//           >
//             Go to LeetCode
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeetCode;

// // Loader
// export const leetcodeLoader = async () => {
//   const response = await fetch('https://leetcode-stats-api.herokuapp.com/shubhamdudhbhate');
//   const result = await response.json();

//   return {
//     username: result.userName,
//     avatar: result.avatar,
//     ranking: result.ranking,
//     totalSolved: result.totalSolved,
//     easySolved: result.easySolved,
//     mediumSolved: result.mediumSolved,
//     hardSolved: result.hardSolved,
//     topics: result.topics || [], // API only provides names, counts added dynamically above
//     progressPercentage: result.progressPercentage || 0,
//   };
// };














import React from 'react';
import { useLoaderData } from 'react-router-dom';

function LeetCode() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
<img
  src={data.avatar || 'G.png'} // default avatar
  alt="User Avatar"
  className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg"
/>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-orange-500">{data.username || 'Shubham Dudhbhate'}</h1>
            <p className="text-gray-300 text-lg mt-2">Ranking: #{data.ranking || 'N/A'}</p>
            <p className="text-gray-300 text-lg mt-1">Total Problems Solved: {data.totalSolved || 0}</p>
          </div>
        </div>

        {/* Problem Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {['totalSolved', 'easySolved', 'mediumSolved', 'hardSolved'].map((key, index) => {
            const titles = ['Solved', 'Easy', 'Medium', 'Hard'];
            return (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center"
              >
                <h2 className="text-xl font-semibold text-orange-500 mb-2">{titles[index]}</h2>
                <p className="text-gray-300 text-2xl">{data[key] || 0}</p>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">Progress</h2>
          <div className="bg-gray-700 rounded-full h-6 w-full overflow-hidden">
            <div
              className="bg-orange-500 h-6 transition-all duration-1000"
              style={{ width: `${data.progressPercentage || 0}%` }}
            ></div>
          </div>
          <p className="text-gray-300 mt-2">{data.progressPercentage || 0}% completed</p>
        </div>

        {/* Topics */}
        {data.topics && data.topics.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Top Topics</h2>
            <div className="flex flex-wrap gap-3">
              {data.topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-100 px-4 py-2 rounded-full hover:bg-orange-600 cursor-pointer transition duration-300 transform hover:scale-105"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Solved Problems */}
        {data.solvedProblems && data.solvedProblems.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Solved Problems</h2>
            <div className="space-y-4">
              {data.solvedProblems.map((problem, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-500">{problem.title || 'N/A'}</h3>
                  <p className="text-gray-300">Difficulty: {problem.difficulty || 'N/A'}</p>
                  <p className="text-gray-300">
                    Topics: {problem.topics ? problem.topics.join(', ') : 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call-to-Action */}
        <div className="text-center">
          <a
            href="https://leetcode.com"
            target="_blank"
            className="inline-block bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300"
          >
            Go to LeetCode
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeetCode;





export const leetcodeLoader = async () => {
  const response = await fetch('https://leetcode-stats-api.herokuapp.com/ganeshygadhave');
  const result = await response.json();

  // Return all data as is from API
  return {
    username: result.userName,           // Real username
    avatar: result.avatar,               // Real avatar
    ranking: result.ranking,             // Real global ranking
    totalSolved: result.totalSolved,     // Real total solved
    easySolved: result.easySolved,
    mediumSolved: result.mediumSolved,
    hardSolved: result.hardSolved,
    topics: result.topics || [],         // List of topics from API
    progressPercentage: result.progressPercentage || 0,
  };
};