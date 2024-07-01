"use client";

import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import PosterDetails from "../../components/Poster - Banner Details/poster-details";
import AddJobInternship from "../../components/Post Details/add-job-internship";
import JobInternshipDetails from "../../components/Post Details/job-internship-details";
import LoginForm from "../../components/Organization Admin/LoginForm";
import Registration from "../../components/Organization Admin/registration";
import OrgForgotPasswordForm from "../../components/Organization Admin/OrgForgotPasswordForm";
import Address from "../../components/Organization Details/Address";
import BasicDetails from "../../components/Organization Details/BasicDetails";
import WebsiteAbout from "../../components/Organization Details/WebsiteAbout";
import BasicDetailsForm from "../../components/Post Details/Poster-BasicDetailsForm";
import MainContent from "../../components/Post Details/MainContent";
import InternshipForm from "../../components/Post Details/InterShipForm";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-grow p-4">
        <div>
          <h1>Organization Admin</h1>
          <LoginForm/>
          <Registration />
          <OrgForgotPasswordForm />
        </div>
        <div> 
          <h1>Dashboard</h1>
          <Dashboard />
        </div>
        <div>
          <h1>Organization Details</h1>
          <BasicDetails />
          <Address />
          <WebsiteAbout />
        </div>
        <div>
          <h1>Post Details</h1>
          <JobInternshipDetails />
          <BasicDetailsForm/>
          <MainContent/>
          <InternshipForm/>
          <AddJobInternship />
        </div>
        <div>
          <h1>Post/Banner Details</h1>
          <PosterDetails />
          <AddJobInternship />
        </div>
        <div>
          <h1>Update Location Details</h1>
        </div>
        <div>
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}
