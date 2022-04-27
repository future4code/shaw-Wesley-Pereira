import React from 'react'
import Home from '../page/Home'
import LoginPage from '../page/LoginPage'
import ApplicationFormPage from '../page/ApplicationFormPage'
import ListTripPage from '../page/ListTripPage'
import AdminHomePage from '../page/AdminHomePage'
import TripDetailPage from '../page/TripDetailPage'
import CreateTripPage from '../page/CreateTripPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/applicationForm" element={<ApplicationFormPage />} />
        <Route path="/listTrip" element={<ListTripPage />} />
        <Route path="/adminHome" element={<AdminHomePage />} />
        <Route path="/tripDetail" element={<TripDetailPage />} />
        <Route path="/createTrip" element={<CreateTripPage />} />
      </Routes>
    </BrowserRouter>
  )
}
