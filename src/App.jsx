import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrontPage } from './pages/FrontPage'
import { LoginPage } from './pages/LoginPage'
import { MainLayout } from './layouts/MainLayout'
import { EventPage } from './pages/EventPage'
import { InfoPage } from './pages/InfoPage'
import { TicketPage } from './pages/TicketPage'
import { CampsPage } from './pages/CampsPage'
import { NewsDetailsPage } from './pages/NewsDetailsPage'
import { NoPage } from './pages/NoPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/events"} element={<EventPage />} />
            <Route path={"/camps"} element={<CampsPage />} />
            <Route path={"/tickets"} element={<TicketPage />} />
            <Route path={"/info"} element={<InfoPage />} />
            <Route path="/news/:id" element={<NewsDetailsPage />} />
            <Route path={"/*"} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
