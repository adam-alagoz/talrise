import React, { lazy } from 'react'
import Header from '../components/GeneralComponents/Header'
import { Routes, Route } from 'react-router-dom'
import JobsPage from '../pages/GeneralPages/JobsPage/JobsPage'
import PrivateRoutes from './PrivateRoutes'
import Loading from '../pages/LoadingPage'
import DownloadCvPage from '../pages/GeneralPages/DownloadCvPage'
import AppliedJobsPage from '../pages/GeneralDashboardPages/AppliedJobsPage'
import DownloadContractPage from '../pages/ClientPages/DownloadContractPage'
import ClientProfile from '../pages/AdminPages/CreateClient/ClientProfile'
import ClientListTablePage from '../pages/AdminPages/CreateClient/ClientListTablePage'
import ClientJobTablePage from '../pages/AdminPages/CreateClient/ClientJobTablePage'
import CreateJobsList from '../pages/AdminPages/Activity/CreateJobs/JobsList'
import CreateJobs from '../pages/AdminPages/Activity/CreateJobs/Jobs'
import ReferralTerms from '../pages/GeneralPages/TermsAndConPage/ReferralTerms/ReferralTerms'
import ReferralPage from '../pages/ReferralPage/index.js'
import ContactInfo from '../pages/AdminPages/CreateClient/ContactInfo'
import CompanyDetails from '../pages/AdminPages/CreateClient/CompanyDetails'
import CompanyDetailsExtra from '../pages/AdminPages/CreateClient/CompanyProfile/index'

const AdminDashboardPage = lazy(() => import('../pages/AdminPages/DashboardPage/index'))
const ApplicantsList = lazy(() => import('../pages/AdminPages/Candidates/ApplicantsList'))
const ApplicantsListTablePage = lazy(() => import('../pages/GeneralPages/ApplicantsListTablePage'))
const BasicsInfoPage = lazy(() => import('../pages/AdminPages/CreateJob/BasicInfoPage/index'))
const Benefits = lazy(() => import('../pages/AdminPages/CreateJob/Benefits'))
const JobsCreate = lazy(() => import('../pages/ClientPages/JobsPage/index'))
const CandidateJobDetailsPage = lazy(() => import('../pages/GeneralDashboardPages/CandidateJobDetailsPage/index'))
const CandidateProcessPage = lazy(() => import('../pages/AdminPages/Activity/CandidateProcess'))
const ChooseRolePage = lazy(() => import('../pages/GeneralPages/ChooseRolePage'))
const ClientContactInformationPage = lazy(() => import('../pages/ClientPages/ContactInformationPage'))
const ClientDashboardLogout = lazy(() => import('../pages/GeneralDashboardPages/DashBoardLogout/index'))
const ClientPositionPage = lazy(() => import('../pages/ClientPages/PositionPage'))
const CompanyDetailsPage = lazy(() => import('../pages/ClientPages/CompanyDetailsPage'))
const CompletedPage = lazy(() => import('../pages/GeneralPages/CompletedPage/Completed'))
const CreateClient = lazy(() => import('../pages/AdminPages/CreateClient'))
const CreateJobTablePage = lazy(() => import('../pages/AdminPages/CreateJob/JobSummary'))
const DashboardLayout = lazy(() => import('../components/DashboardComponents/DashboardLayout/index'))
const DashboardPage = lazy(() => import('../pages/GeneralDashboardPages/DashboardPage/index'))
const DetailsPage = lazy(() => import('../pages/AdminPages/CreateJob/DetailsPage'))
const EducationPage = lazy(() => import('../pages/CandidatesPages/EducationPage'))
const ExperiencePage = lazy(() => import('../pages/CandidatesPages/ExperiencePage'))
const FirstVerifyPage = lazy(() => import('../pages/GeneralPages/VerifyRegistrationPage/FirstVerifyPage'))
const ForgotPasswordPage = lazy(() => import('../pages/GeneralPages/ForgotPasswordPage'))
const IndustryPage = lazy(() => import('../pages/CandidatesPages/IndustryPage'))
const InterviewProcessPage = lazy(() => import('../pages/AdminPages/CreateJob/InterviewProcess'))
const JobDetailsPage = lazy(() => import('../pages/GeneralDashboardPages/JobDetailsPage/index'))
const LanguagePage = lazy(() => import('../pages/CandidatesPages/LanguagePage'))
const Layout = lazy(() => import('../components/GeneralComponents/layout/index'))
const Login = lazy(() => import('../components/GeneralComponents/Login/Login'))
const LoginVerifyEmailFailed = lazy(() => import('../pages/GeneralPages/VerifyRegistrationPage/LoginVerifyEmailFailed'))
const Notifications = lazy(() => import('../pages/CandidatesPages/NotificationsPage'))
const Page404 = lazy(() => import('../pages/GeneralPages/Page404/index'))
const PersonalPage = lazy(() => import('../pages/CandidatesPages/PersonalInfoPage'))
const PositionPage = lazy(() => import('../pages/CandidatesPages/PositionPage'))
const PreferencesPage = lazy(() => import('../pages/CandidatesPages/PrefencesPage'))
const PrivacyPage = lazy(() => import('../pages/GeneralPages/PrivacyPage/index'))
const ProfilePage = lazy(() => import('../pages/GeneralDashboardPages/ProfilePage/index'))
const ReferalNoData = lazy(() => import('../pages/GeneralDashboardPages/ReferalNoDataPage'))
const ReferCandidatePage = lazy(() => import('../pages/CandidatesPages/ReferCandidatePage'))
const RegisteredCandidates = lazy(() => import('../pages/AdminPages/Candidates/RegisteredCandidates/index'))
const RegisterPage = lazy(() => import('../pages/GeneralPages/RegisterPage'))
const ResetPasswordPage = lazy(() => import('../pages/GeneralPages/ResetPasswordPage'))
const ResultPage = lazy(() => import('../pages/RegisterResult'))
const SavedJobsPage = lazy(() => import('../pages/GeneralDashboardPages/SavedJobsPage'))
const SkillSetPage = lazy(() => import('../pages/CandidatesPages/SkillSetPage'))
const TermsAndConPage = lazy(() => import('../pages/GeneralPages/TermsAndConPage/index'))
const UnderConstructionPage = lazy(() => import('../pages/UnderConstructionPage/UnderConstruction.js'))
const UploadCvPage = lazy(() => import('../pages/CandidatesPages/UploadCvPage'))
const VerifyEmail = lazy(() => import('../pages/GeneralPages/VerifyRegistrationPage/VerifyEmail'))
const WelcomePage = lazy(() => import('../pages/WelcomePage/index'))
const CandidateCVPrev = lazy(() => import('../pages/AdminPages/Candidates/CandidateCVPrev'))
const SettingsPage = lazy(() => import('../pages/SettingsPage/index'))
const UpdateLookupPage = lazy(() => import('../pages/SettingsPage/UpdateLookupPage'))
//! Client Pages
const ClientDashboardActivities = lazy(() => import('../pages/ClientPages/DashboardActivitiesPage/index'))
const ClientDashboardPage = lazy(() => import('../pages/ClientPages/DashBoardPage/index'))
const ClientCandidateProcessPage = lazy(() => import('../pages/ClientPages/CandidateProcess/index'))
const CompanyProfilePage = lazy(() => import('../pages/ClientPages/CompanyProfilePage/index'))
const ReferredCandidateDetailsPage = lazy(() => import('../pages/AdminPages/ReferredCandidateDetailsPage/index'))
const RoleResponsibilityPage = lazy(() => import('../pages/AdminPages/CreateJob/RoleResponsibilityPage'))
const ClientShortListPage = lazy(() => import('../pages/ClientPages/ShortListTablePage/index'))
const ClientCandidateProfile = lazy(() => import('../pages/ClientPages/CandidateProfilePage/index'))

const MainRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route exact path="/" element={<PrivateRoutes isMainPath={true}>{<Login />}</PrivateRoutes>} />
        <Route exact path="/register" element={<PrivateRoutes isRegister={true}>{<RegisterPage />}</PrivateRoutes>} />
        <Route exact path="/layout" element={<Layout />} />
        <Route exact path="/list" element={<ApplicantsListTablePage />} />
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/privacy" element={<PrivacyPage />} />
        <Route exact path="/terms" element={<TermsAndConPage />} />
        <Route exact path="/referral-terms" element={<ReferralTerms />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route exact path="/reset-password" element={<ResetPasswordPage />} />
        <Route exact path="/verify-email" element={<VerifyEmail />} />
        <Route exact path="/signup-successful" element={<FirstVerifyPage />} />
        <Route exact path="/login-verify-email-failed" element={<LoginVerifyEmailFailed />} />
        <Route exact path="/chooseRole" element={<PrivateRoutes isChooseRole={true}>{<ChooseRolePage />} </PrivateRoutes>} />

        {/* Dashboard layout pages   */}
        <Route element={<PrivateRoutes>{<DashboardLayout />} </PrivateRoutes>}>
          <Route exact path="/job/:jobId" element={<JobDetailsPage />} />
          <Route exact path="candidate/job/:jobId" element={<CandidateJobDetailsPage />} />
          <Route exact path="/candidate/dashboard" element={<DashboardPage />} />
          <Route exact path="/logout" element={<ClientDashboardLogout />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/referalnodata" element={<ReferalNoData />} />
          <Route exact path="/activity/jobs" element={<JobsPage />} />
          <Route exact path="/activity/appliedjobs" element={<AppliedJobsPage />} />
          <Route exact path="/activity/savedjobs" element={<SavedJobsPage />} />
          <Route exact path="/notifications" element={<PrivateRoutes>{<Notifications />}</PrivateRoutes>} />

          {/* Client Dashboard pages */}
          <Route exact path="/client/shortlist" element={<ClientShortListPage />} />
          <Route exact path="/client/candidateProcess" element={<ClientCandidateProcessPage />} />
          <Route exact path="/client/candidate-profile" element={<ClientCandidateProfile />} />
          <Route exact path="/client/dashboard" element={<ClientDashboardPage />} />
          <Route exact path="/client/company-profile" element={<CompanyProfilePage />} />
          <Route exact path="/client/activity" element={<div>Client Activity</div>} />
          <Route exact path="/client/jobs/create-jobs" element={<JobsCreate />} />
          <Route exact path="/client/jobs/create-jobs/jobs" element={<CreateJobs />} />
          <Route exact path="/client/jobs/create-jobs/jobs-list" element={<CreateJobsList />} />
          <Route exact path="/candidate/referrals/refercandidate" element={<ReferCandidatePage />} />

          {/* Admin Dashboard pages */}
          <Route exact path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route exact path="/admin/candidates/registered-candidates" element={<RegisteredCandidates />} />
          <Route exact path="/admin/candidates/applicants-list" element={<ApplicantsList />} />
          <Route exact path="/admin/candidates/referrals/referred-candidates" element={<UnderConstructionPage />} />
          <Route exact path="/admin/candidates/referrals/referred-clients" element={<UnderConstructionPage />} />
          <Route exact path="/admin/clients" element={<UnderConstructionPage />} />
          <Route exact path="/admin/partners" element={<UnderConstructionPage />} />
          <Route exact path="/admin/jobs/clients/create-a-client" element={<CreateClient />} />
          <Route exact path="/admin/jobs/clients/create-a-client/contacts" element={<ContactInfo />} />
          <Route exact path="/admin/jobs/clients/create-a-client/company-details" element={<CompanyDetails />} />
          <Route exact path="/admin/jobs/clients/create-a-client/company-profile" element={<CompanyDetailsExtra />} />
          <Route exact path="/admin/jobs/clients/create-list" element={<ClientListTablePage />} />
          <Route exact path="/admin/jobs/create-jobs/jobs" element={<CreateJobs />} />
          <Route exact path="/admin/jobs/create-jobs/jobs-list" element={<CreateJobsList />} />
          <Route exact path="/admin/activity/candidate-process" element={<CandidateProcessPage />} />
          <Route exact path="/admin/notifications" element={<UnderConstructionPage />} />
          <Route exact path="/admin/client-profile/:clientId" element={<ClientProfile />} />
          <Route exact path="/admin/client-jobs/:clientId" element={<ClientJobTablePage />} />
          <Route exact path="/referrals/refer-client" element={<UnderConstructionPage />} />
          <Route exact path="/admin/jobs/create-jobs/create-a-job/basics" element={<BasicsInfoPage />} />
          <Route exact path="/admin/jobs/create-jobs/create-a-job/details" element={<DetailsPage />} />
          <Route exact path="/admin/jobs/create-jobs/create-a-job/role-responsibility" element={<RoleResponsibilityPage />} />
          <Route exact path="/admin/jobs/create-jobs/create-a-job/interview-process" element={<InterviewProcessPage />} />
          <Route exact path="/admin/jobs/create-jobs/create-a-job/benefits" element={<Benefits />} />
          <Route exact path="/admin/jobs/create-jobs/create-a-job/job-summary" element={<CreateJobTablePage />} />
          <Route exact path="/admin/candidate/:candidateID" element={<CandidateCVPrev />} />
          <Route
            exact
            path="/settings"
            element={
              <PrivateRoutes>
                <SettingsPage />
              </PrivateRoutes>
            }
          />
          <Route exact path="/updatelookuppage" element={<UpdateLookupPage />} />

          {/* unfinished pages are temporarily showing as under construction */}
          <Route exact path="/activity" element={<UnderConstructionPage />} />
          <Route exact path="/referrals" element={<ReferralPage />} />

          {/*change with Ongoing, Wenn Ongoing finished  <OngoingProcessPage /> */}
          <Route exact path="/ongoing" element={<UnderConstructionPage />} />
          <Route exact path="/candidatedetails" element={<ReferredCandidateDetailsPage />} />
        </Route>
        <Route exact path="/result/:result" element={<PrivateRoutes>{<ResultPage />}</PrivateRoutes>} />
        <Route exact path="/result/:result" element={<PrivateRoutes>{<ResultPage />}</PrivateRoutes>} />

        {/* Candidate Pages */}
        <Route exact path="/candidate/personal-info" element={<PrivateRoutes>{<PersonalPage />}</PrivateRoutes>} />
        <Route exact path="/candidate/upload-cv" element={<PrivateRoutes>{<UploadCvPage />}</PrivateRoutes>} />
        <Route exact path="/candidate/position" element={<PrivateRoutes>{<PositionPage />}</PrivateRoutes>} />
        <Route exact path="/candidate/skill-set" element={<PrivateRoutes>{<SkillSetPage />}</PrivateRoutes>} />
        <Route exact path="/candidate/industry" element={<PrivateRoutes>{<IndustryPage />}</PrivateRoutes>} />
        <Route exact path="/candidate/language" element={<PrivateRoutes>{<LanguagePage />}</PrivateRoutes>} />
        <Route exact path="/candidate/experience" element={<PrivateRoutes>{<ExperiencePage />}</PrivateRoutes>} />
        <Route exact path="/candidate/education" element={<PrivateRoutes>{<EducationPage />}</PrivateRoutes>} />
        <Route exact path="/candidate/preference" element={<PrivateRoutes>{<PreferencesPage />}</PrivateRoutes>} />

        {/*** Client Pages*/}
        <Route exact path="/client/contact" element={<PrivateRoutes>{<ClientContactInformationPage />}</PrivateRoutes>} />
        <Route exact path="/client/activities" element={<PrivateRoutes>{<ClientDashboardActivities />}</PrivateRoutes>} />
        <Route exact path="/client/position" element={<PrivateRoutes>{<ClientPositionPage />}</PrivateRoutes>} />
        <Route exact path="/client/company" element={<PrivateRoutes>{<CompanyDetailsPage />}</PrivateRoutes>} />
        <Route exact path="/completed" element={<PrivateRoutes>{<CompletedPage />}</PrivateRoutes>} />
        <Route exact path="/preview-cv" element={<PrivateRoutes>{<DownloadCvPage />}</PrivateRoutes>} />
        <Route exact path="/preview-contract" element={<PrivateRoutes>{<DownloadContractPage />}</PrivateRoutes>} />
        <Route exact path="/under-construction" element={<UnderConstructionPage />} />
        <Route exact path="/welcome" element={<WelcomePage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </React.Suspense>
  )
}
export default MainRoutes
