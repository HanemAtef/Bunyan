import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";

import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import DevelopersPage from "./DevelopersPage";

import TableDashboard from "../../components/Dashborad/TableDashboard/TableDashboard";
import FormDashboard from "../../components/Dashborad/FormDashboard/FormDashboard";

function Dashboard() {

  const [isDraft, setIsDraft] = useState(false);

  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">

        <Sidebar isDraft={isDraft} />

        <main className="flex-grow-1">

          <Routes>

            <Route path="/" element={<StatusPage />} />
            <Route path="/status" element={<StatusPage />} />

            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard setIsDraft={setIsDraft} />}/>
            </Route>

            <Route path="/developers" element={<DevelopersPage />}>
              <Route index element={<TableDashboard />} />

              <Route
                path="add"
                element={<FormDashboard setIsDraft={setIsDraft} />}
              />
            </Route>

            <Route path="/projects" element={<Projects />}>
              <Route index element={<TableDashboard />} />

              <Route
                path="add"
                element={<FormDashboard setIsDraft={setIsDraft} /> }
              />
            </Route>

          </Routes>

        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;