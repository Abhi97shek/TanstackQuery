import { useState } from 'react'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'

// import the React Router 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './page/Home';
import {TanStack} from './page/TanStack';
import { SinglePost } from './page/SinglePost';

function App() {
  
const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tanstack" element={<TanStack />} />
              <Route path="/tanstack/:id" element={<SinglePost />} /> 
          </Routes>

        </BrowserRouter>
        
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
