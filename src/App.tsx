import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import UsersList from './Pages/Users/UsersList';
import AddUser from './Pages/Users/AddUser';
import UserRoles from './Pages/Users/UserRoles';
import ViolationList from './Pages/Violations/ViolationList';
import AddViolation from './Pages/Violations/AddViolation';
import ACCList from './Pages/ACC/ACCList';
import AddACC from './Pages/ACC/AddACC';
import VotingList from './Pages/Voting/VotingList';
import AddVoting from './Pages/Voting/AddVoting';
import LostAndFoundList from './Pages/LostAndFound/LostAndFoundList';
import AddLostAndFound from './Pages/LostAndFound/AddLostAndFound';
import EventsList from './Pages/Events/EventsList';
import AddEvent from './Pages/Events/AddEvent';
import PetList from './Pages/Pet/PetList';
import AddPet from './Pages/Pet/AddPet';
import TicketList from './Pages/Ticket/TicketList';
import AddTicket from './Pages/Ticket/AddTicket';
import VehicleList from './Pages/Vehicle/VehicleList';
import AddVehicle from './Pages/Vehicle/AddVehicle';
import CommitteesList from './Pages/Committees/CommitteesList';
import AddCommittees from './Pages/Committees/AddCommittees';
import AmenititesList from './Pages/Amenitites/AmenititesList';
import AddAmenitites from './Pages/Amenitites/AddAmenitites';
import ReservationsList from './Pages/Reservations/ReservationsList';
import AddReservations from './Pages/Reservations/AddReservations';
import DocumentList from './Pages/Documents/DocumentList';
import AddDocument from './Pages/Documents/AddDocument';
import FAQList from './Pages/FAQ/FAQList';
import AddFAQ from './Pages/FAQ/AddFAQ';
import ImportantLinksList from './Pages/ImportantLinks/ImportantLinksList';
import AddImportantLinks from './Pages/ImportantLinks/AddImportantLinks';
import ClassifiedsList from './Pages/Classifieds/ClassifiedsList';
import AddClassifieds from './Pages/Classifieds/AddClassifieds';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Router>                             
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/users/list' element={<UsersList />} />
              <Route path='/users/add' element={<AddUser />} />
              <Route path='/users/roles' element={<UserRoles />} />
              <Route path='/violation/list' element={<ViolationList />} />
              <Route path='/violation/add' element={<AddViolation />} />
              <Route path='/acc/list' element={<ACCList />} />
              <Route path='/acc/add' element={<AddACC />} />
              <Route path='/voting/list' element={<VotingList />} />
              <Route path='/voting/add' element={<AddVoting />} />
              <Route path='/lost-and-found/list' element={<LostAndFoundList />} />
              <Route path='/lost-and-found/add' element={<AddLostAndFound />} />
              <Route path='/events/list' element={<EventsList />} />
              <Route path='/events/add' element={<AddEvent />} />
              <Route path='/pet/list' element={<PetList />} />
              <Route path='/pet/add' element={<AddPet />} />
              <Route path='/ticket/list' element={<TicketList />} />
              <Route path='/ticket/add' element={<AddTicket />} />
              <Route path='/vehicle/list' element={<VehicleList />} />
              <Route path='/vehicle/add' element={<AddVehicle />} />
              <Route path='/committees/list' element={<CommitteesList />} />
              <Route path='/committees/add' element={<AddCommittees />} />
              <Route path='/amenities/list' element={<AmenititesList />} />
              <Route path='/amenities/add' element={<AddAmenitites />} />
              <Route path='/reservations/list' element={<ReservationsList />} />
              <Route path='/reservations/add' element={<AddReservations />} />
              <Route path='/documents/list' element={<DocumentList />} />
              <Route path='/documents/add' element={<AddDocument />} />
              <Route path='/faq/list' element={<FAQList />} />
              <Route path='/faq/add' element={<AddFAQ />} />
              <Route path='/important_links/list' element={<ImportantLinksList />} />
              <Route path='/important_links/add' element={<AddImportantLinks />} />
              <Route path='/classifieds/list' element={<ClassifiedsList />} />
              <Route path='/classifieds/add' element={<AddClassifieds />} />
          </Routes>
      </Router>


    </div>
  );
}

export default App;
