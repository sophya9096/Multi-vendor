import React, { Suspense, lazy } from "react";
import HomeScreen from "../screens/HomeScreen";
import Header from "../screens/Header";
import Footer from "../screens/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Hire = lazy(() => import("../screens/Hire"));
const Work = lazy(() => import("../screens/Work"));
const Pricing = lazy(() => import("../screens/Pricing"));
const Info = lazy(() => import("../screens/Info"));
const Profile = lazy(() => import("../screens/Profile"));
const Applicants = lazy(() => import("../screens/Applicants"));
const Job = lazy(() => import("../screens/Job"));
const Dashboard = lazy(() => import("../screens/DashboardScreen"));
const DataGrid = lazy(() => import("../components/DataGrid"));
const Contracts = lazy(() => import("../screens/Contracts"));
const Proposals = lazy(() => import("../screens/Proposals"));
const Company = lazy(() => import("../screens/Company"));
const Offers = lazy(() => import("../screens/Offers"));
const Messages = lazy(() => import("../screens/Messages"));
const Wallet = lazy(() => import("../screens/Wallet"));
const Payment = lazy(() => import("../screens/Payment"));
const Membership = lazy(() => import("../screens/Membership"));
const FeatureJob = lazy(() => import("../screens/FeatureJob"));
const FeatureProfile = lazy(() => import("../screens/FeatureProfile"));
const FeatureCompany = lazy(() => import("../screens/FeatureCompany"));
const EditProfile = lazy(() => import("../screens/EditProfile"));
const WorkRoom = lazy(() => import("../screens/WorkRoom"));

function Layout() {
    return (
        <div className="layout">
            <Router>
                <Header />
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/hire">
                        <Hire />
                    </Route>
                    <Route exact path="/work">
                        <Work />
                    </Route>
                    <Route exact path="/pricing">
                        <Pricing />
                    </Route>
                    <Route exact path="/info">
                        <Info />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/applicants">
                        <Applicants />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/addjob">
                        <Job addJob />
                    </Route>
                    <Route exact path="/jobposted">
                        <Job />
                    </Route>
                    <Route exact path="/data">
                        <DataGrid />
                    </Route>
                    <Route exact path="/contracts">
                        <Contracts />
                    </Route>
                    <Route exact path="/yourproposals">
                        <Proposals yourProposals />
                    </Route>
                    <Route exact path="/otherproposals">
                        <Proposals />
                    </Route>
                    <Route exact path="/offers">
                        <Offers />
                    </Route>
                    <Route exact path="/addCompany">
                        <Company addCompany />
                    </Route>
                    <Route exact path="/companylist">
                        <Company />
                    </Route>
                    <Route exact path="/messages">
                        <Messages />
                    </Route>
                    <Route exact path="/deposits">
                        <Wallet deposits />
                    </Route>
                    <Route exact path="/withdrawals">
                        <Wallet />
                    </Route>
                    <Route exact path="/payment">
                        <Payment />
                    </Route>
                    <Route exact path="/membership">
                        <Membership />
                    </Route>
                    <Route exact path="/joblist">
                        <FeatureJob jobList />
                    </Route>
                    <Route exact path="/featurejob">
                        <FeatureJob />
                    </Route>
                    <Route exact path="/profilelist">
                        <FeatureProfile profileList />
                    </Route>
                    <Route exact path="/featureprofile">
                        <FeatureProfile />
                    </Route>
                    <Route exact path="/companieslist">
                        <FeatureCompany companiesList />
                    </Route>
                    <Route exact path="/featurecompany">
                        <FeatureCompany />
                    </Route>
                    <Route exact path="/editprofile">
                        <EditProfile />
                    </Route>
                    <Route exact path="/workroom">
                        <WorkRoom />
                    </Route>
                </Suspense>
                <Footer />
            </Router>
        </div>
    );
}

export default Layout;
