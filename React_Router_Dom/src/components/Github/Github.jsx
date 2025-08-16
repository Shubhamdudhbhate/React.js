// import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
//     const data = useLoaderData()
//     // const [data, setData] = useState([])
//     // useEffect(() => {
//     //  fetch('https://api.github.com/users/hiteshchoudhary')
//     //  .then(response => response.json())
//     //  .then(data => {
//     //     console.log(data);
//     //     setData(data)
//     //  })
//     // }, [])
    
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git picture" width={300} />
//     </div>
//   )
// }

// export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/shubhamdudhbhate')
//     return response.json()
// }


// // count = current state (read-only)
// // setCount = function to update state (write)
// // useState(0) = initializes the state to 0




// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
//     const data = useLoaderData()

//     return (
//         <div className="max-w-xl mx-auto bg-gray-800 text-white p-6 rounded-lg mt-6 shadow-lg">
//             <div className="text-center mb-4">
//                 <img 
//                     src={data.avatar_url} 
//                     alt={`${data.login} avatar`} 
//                     className="rounded-full w-32 h-32 mx-auto"
//                 />
//                 <h1 className="text-2xl font-bold mt-2">{data.name}</h1>
//                 <p className="text-gray-300">@{data.login}</p>
//             </div>

//             <p className="mb-2"><strong>Bio:</strong> {data.bio || 'N/A'}</p>
//             <p className="mb-2"><strong>Company:</strong> {data.company || 'N/A'}</p>
//             <p className="mb-2"><strong>Location:</strong> {data.location || 'N/A'}</p>
//             <p className="mb-2"><strong>Blog:</strong> <a href={data.blog} target="_blank" rel="noreferrer" className="underline">{data.blog || 'N/A'}</a></p>
            
//             <div className="flex justify-around mt-4">
//                 <div>
//                     <strong>Followers:</strong>
//                     <p>{data.followers}</p>
//                 </div>
//                 <div>
//                     <strong>Following:</strong>
//                     <p>{data.following}</p>
//                 </div>
//                 <div>
//                     <strong>Public Repos:</strong>
//                     <p>{data.public_repos}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/shubhamdudhbhate')
//     return response.json()
// }


import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const userData = useLoaderData()
  const [repos, setRepos] = useState([])
  const [totalStars, setTotalStars] = useState(0)
  const [languages, setLanguages] = useState({})

  useEffect(() => {
    fetch(`https://api.github.com/users/${userData.login}/repos?per_page=100`)
      .then(res => res.json())
      .then(data => {
        setRepos(data)

        let stars = 0
        const langs = {}
        data.forEach(repo => {
          stars += repo.stargazers_count
          if (repo.language) {
            langs[repo.language] = langs[repo.language] ? langs[repo.language] + 1 : 1
          }
        })
        setTotalStars(stars)
        setLanguages(langs)
      })
  }, [userData.login])

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-900 text-gray-100 min-h-screen">
      {/* Profile Overview */}
      <div className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-lg p-6 mb-6">
        <img src={userData.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-gray-600"/>
        <div>
          <h1 className="text-3xl font-bold">{userData.name}</h1>
          <p className="text-gray-300">{userData.bio}</p>
          <p className="mt-2 text-sm text-gray-400">{userData.location} | Joined: {new Date(userData.created_at).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
        <div className="bg-gray-700 rounded-lg p-4 font-semibold">Followers<br/>{userData.followers}</div>
        <div className="bg-gray-700 rounded-lg p-4 font-semibold">Following<br/>{userData.following}</div>
        <div className="bg-gray-700 rounded-lg p-4 font-semibold">Repos<br/>{userData.public_repos}</div>
        <div className="bg-gray-700 rounded-lg p-4 font-semibold">Stars<br/>{totalStars}</div>
      </div>

      {/* Language / Topics */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Languages Used</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(languages).map(([lang, count]) => (
            <span key={lang} className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">
              {lang} ({count})
            </span>
          ))}
        </div>
      </div>

      {/* Repository List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Repositories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map(repo => (
            <div key={repo.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-orange-500">
                {repo.name}
              </a>
              <p className="text-gray-300 mt-1">{repo.description}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>{repo.language}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/shubhamdudhbhate')
  return response.json()
}
