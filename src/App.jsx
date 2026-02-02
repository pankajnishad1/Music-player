import React from 'react'
import Applayout from './component/layout/Applayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import Musicpage from './pages/Musicpage';
import Podcastpage from './pages/Podcastpage';
import All from './pages/All';
import YourLibrary from './pages/YourLibrary';
import LikedSong from './pages/LikedSong';
import LikedPodcast from './pages/LikedPodcast'
import Searchpage from './pages/Searchpage';

function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element: <Applayout />,
      errorElement:<Errorpage/>,
      children:[
        {
          path:'/',
          element:<All />
        },
        {
          path:'Music',
          element:<Musicpage />
        },
        {
          path:'Podcast',
          element:<Podcastpage />
        },
        {
          path:'Searchpage',
          element:<Searchpage />
        },
        {
          path:'YourLibrary',
          element:<YourLibrary />,
          children:[
        {
          path:'LikedSongs',
          element:<LikedSong />
        },
        {
          path:'LikedPodcast',
          element:<LikedPodcast />
        },
      ]
        }
      ]
    }
  ])
  return <RouterProvider router={Router}></RouterProvider>
}

export default App
