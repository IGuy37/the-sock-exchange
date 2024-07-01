import React, { useState, useEffect } from 'react'
import promo_data from "./assets/promo.json";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from "./components/Home";
import About from "./components/About";
import Featured from "./components/Featured";
import AddSock from "./components/AddSock";
import RequireAuth from './components/RequireAuth';
import AuthProvider from './hooks/AuthContext';
import LoginForm from './components/LoginForm';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const socksPerPage = 10;
  const handleDelete = async (sockId) => {
    try {
        // Make an API request to delete the sock with the given sockId
        const response = await fetch(`${import.meta.env.VITE_SOCKS_API_URL}/${sockId}`, {
        method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Sock could not be deleted!');
        }
        // Update the state or fetch the updated data from the server
        const updatedData = data.filter(sock => sock._id !== sockId); // Remove the deleted sock from the data array
        setData(updatedData); // Update the state with the updated data
      } catch (error) {
          console.error('Error deleting sock:', error);
      }
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const url =`${import.meta.env.VITE_SOCKS_API_URL}/${page}/${socksPerPage}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            setData(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching socks:', error);
        }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TSE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                    About
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/add-sock">
                  Add a Sock
                </Link>
              </li>
            </ul>
            <Search setData = {setData}/>
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">

        <div className="container-fluid">
          <div className="row">
            Both socks and space rockets 🚀 will take you to new heights, but only one will get cold feet!
            <Featured promo_data = {promo_data}/>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<Home data={data} handleDelete={handleDelete} page={page} setPage={setPage}/> }/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add-sock" element={
                  <RequireAuth>
                    <AddSock setData={setData}/>      
                  </RequireAuth>
                  }/>
                <Route path="/login" element={<LoginForm />} />
              </Routes>
            </AuthProvider>
            <Footer environment={import.meta.env.VITE_ENVIRONMENT}/>
          </div>
        </div>
      </main>
    </Router>
  );
}
