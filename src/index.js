import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthenticationProvider } from './contexts/AuthenticationProvider';
import { ReservatieProvider } from './contexts/ReservatieProvider';
import { MenuProvider } from './contexts/MenuProvider';
import { AdminProvider } from './contexts/AdminProvider';
import { BrasserieProvider } from './contexts/BrasserieProvider';
import { FoodtruckProvider } from './contexts/FoodtruckProvider';

import Header from "./components/Header"
import Footer from "./components/Footer"
import IsAuth from "./components/IsAuth"

import Main from './pages/Main';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden';
import AdminHome from './pages/AdminHome';
import PageNotFound from './pages/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>

            <AdminProvider>
                <AuthenticationProvider>
                    <ReservatieProvider>
                        <MenuProvider>
                            <BrasserieProvider>
                                <FoodtruckProvider>

                                    <div className="flex flex-col min-h-screen selection:bg-neutral-500 selection:text-black">
                                        <Header />
                                        <Routes>
                                            {/* general routes */}
                                            <Route path="" element={<Main />} />
                                            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />

                                            {/* admin routes */}
                                            <Route element={<IsAuth />}>
                                                <Route path="/admin" element={<AdminHome />} />
                                            </Route>

                                            {/* 404 */}
                                            <Route path="*" element={<PageNotFound />} />
                                        </Routes>
                                        <Footer />
                                    </div>

                                </FoodtruckProvider>
                            </BrasserieProvider>
                        </MenuProvider>
                    </ReservatieProvider>
                </AuthenticationProvider>
            </AdminProvider>

        </Router>
    </React.StrictMode >
);