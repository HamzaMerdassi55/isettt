import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminNavbar from './components/AdminNavbar'
import Sidebar from './components/Sidebar'
import ManageEvenment from './components/Evenment/ManageEvenment'
import AddEvenment from './components/Evenment/AddEvenment'
import Dashboard from './Pages/Dashboard'
import ManageCategory from './Pages/ManageDepartement'
import ManageInstructors from './Pages/ManageInstructors'
import ManageStudents from './Pages/ManageStudents'
import ManageAdmins from './Pages/ManageAdmins'
import ManageProfile from './Pages/ManageProfile'
import SystemSettings from './Pages/SystemSettings'
import WebsiteSettings from './Pages/WebsiteSettings'
import Update from './components/Departement/Update'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <AdminNavbar />
      <div className='row'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/WebsiteSettings'>
            <WebsiteSettings />
          </Route>
          <Route path='/SystemSettings'>
            <SystemSettings />
          </Route>
          <Route path='/ManageProfile'>
            <ManageProfile />
          </Route>
          <Route path='/ManageInstructors'>
            <ManageInstructors />
          </Route>
          <Route path='/ManageStudents'>
            <ManageStudents />
          </Route>
          <Route path='/manageadmins' element={<ManageAdmins />}>
            <ManageAdmins />
          </Route>
          <Route path='/ManageEvenment'>
            <ManageEvenment />
          </Route>
          <Route path='/AddEvenment'>
            <AddEvenment />
          </Route>
          <Route path='/managecategory' element={<ManageCategory />}>
            <ManageCategory />
          </Route>
          <Route path='/:id' element={<Update />} />
        </Switch>
      </div>
    </div>
  </Router>
   
  );
}

export default App;
