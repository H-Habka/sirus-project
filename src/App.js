import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import CNavbar from './components/CNavbar/CNavbar.component';
import Menu from './components/Menu/Menu.component';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home/Home.page';
import Auth from './pages/Auth/Auth.page';
import Results from './pages/Results/Results.page';
import ProfileTab from './components/TabsContent/ProfileTab/ProfileTab.component';
import { useLocation } from 'react-router-dom';
import "./App.scss"
import './assets/css/video-react.css';
import Profile from './pages/Profile/Profile.page';
import ExpertiseTab from './components/TabsContent/ExpertiseTab/ExpertiseTab.component';
import ToolsTap from './components/TabsContent/ToolsTab/ToolsTab.component';
import ReviewsTab from './components/TabsContent/ReviewsTab/ReviewsTab.component';
import AnswersTab from './components/TabsContent/AnswersTab/AnswersTab.component';
import Account from './pages/Account/Account.page';
import AnswersPage from './pages/Answers/Answers.page';
import ProfileForm from './components/Form/Profile.component';
import InboxTable from './components/Tables/InboxTable.component';
import Favorites from './components/Favorite/Favorites.component';
import MeetingForm from './components/Form/Meeting.component';
import Categories from './pages/Categories/Categories.page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Answer from './pages/Answers/Answer.page';
import Entrepreneurs from './pages/Entrepreneurs/Entrepreneurs.page';
import Mentor from './pages/Mentor/Mentor.component';
import AskQuestion from './components/Form/AskQuestion.component';
import Templates from './pages/Templates/Templates.page';
import Terms from './pages/Terms/Terms.page';
import ActiveMeetingsTable from './components/Tables/DownloadedTemplatesTable.component';
import DownloadedTemplatesTable from './components/Tables/DownloadedTemplatesTable.component';
import Interview from './components/Interviews/Interview.page';

const App = ({ user }) => {
    const location = useLocation();
    return (

        <>
            {/* <CNavbar /> */}
            {location.pathname === '/auth' ? null : <Menu></Menu>}

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth></Auth>} />
                <Route path="/categories" element={<Categories></Categories>} />     
                

                <Route path="/results/:query" element={<Results></Results>} />
                <Route path="/results/" element={<Results queryNone=""></Results>} />
                <Route path="/account">
                    <Route exact path="" element={<Account> <ProfileForm></ProfileForm> </Account>}> </Route>
                    <Route path="templates" element={<Account> <DownloadedTemplatesTable></DownloadedTemplatesTable> </Account>}></Route>
                    <Route path="inbox" element={<Account> <InboxTable></InboxTable>  </Account>}></Route>
                    <Route path="favorites" element={<Account>  <Favorites></Favorites> </Account>}></Route>
                </Route>
                <Route path="/terms-of-use" element={<Terms />}></Route>
                <Route path="/template/:templateId" element={<Templates />}></Route>
                <Route path="/interview" element={<Interview />}></Route>

                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
            {location.pathname === '/auth' ? null : <Footer></Footer>}




        </>

    )

};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps)(App);
