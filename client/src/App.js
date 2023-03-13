import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageIntro from "./components/Page Intro/PageIntro";
import Login from "./components/Login";
import Register from "./components/Register";
import PersonalFeed from "./components/PersonalFeed/PersonalFeed";
import NoteCreatorHub from "./components/NoteCreator/NoteCreatorHub";
import BrowsePage from "./components/BrowsePage";
import Maths from "./components/Topics/Maths";
import English from "./components/Topics/English";
import Science from "./components/Topics/Science";
import CS from "./components/Topics/CS";
import Economics from "./components/Topics/Economics";
import Business from "./components/Topics/Business";
import Pharamcy from "./components/Topics/Pharmacy";
import Law from "./components/Topics/Law";
import Psychology from "./components/Topics/Psychology";
import Accounting from "./components/Topics/Accounting";
import Notif from "./components/Notifications/Notif";
import Report from "./components/Report";
import General from "./components/Topics/General";
import All from "./components/Topics/All";
import ProfilePage from "./components/Profilepage";
import Navbar from "./components/NavBar/Navbar";
import Store from "./components/Store";
import UserForm from "./components/report-docs/UserForm";
import YourNotes from "./components/YourNotes";
import YourProfile from "./components/YourProfile";
import PurchaseHistory from "./components/PurchaseHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageIntro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personal-feed" element={<PersonalFeed />} />
          <Route path="/note-creator" element={<NoteCreatorHub />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/all" element={<All />} />
          <Route path="/general" element={<General />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/english" element={<English />} />
          <Route path="/science" element={<Science />} />
          <Route path="/cs" element={<CS />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/pharmacy" element={<Pharamcy />} />
          <Route path="/law" element={<Law />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/notifications" element={<Notif />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="your-notes" element={<YourNotes />} />
            <Route path="your-profile" element={<YourProfile />} />
            <Route path="purchase-history" element={<PurchaseHistory />} />
          </Route>
          <Route path="/report" element={<Report />} />
          <Route path="/store" element={<Store />} />
          <Route path="/report-docs" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
