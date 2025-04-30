
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import ForCandidates from "./pages/ForCandidates";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Assessments from "./pages/Assessments";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AIResumeScreening from "./pages/solutions/AIResumeScreening";
import PersonalizedCareerPage from "./pages/solutions/PersonalizedCareerPage";
import TalentAssessment from "./pages/solutions/TalentAssessment";
import CodingAssessment from "./pages/solutions/CodingAssessment";
import VideoInterviews from "./pages/solutions/VideoInterviews";
import AIJDGenerator from "./pages/solutions/AIJDGenerator";
import AIResumeOptimizer from "./pages/solutions/AIResumeOptimizer";
import MockInterviews from "./pages/solutions/MockInterviews";
import CampusHiring from "./pages/solutions/CampusHiring";
import PsychometricTests from "./pages/assessments/PsychometricTests";
import TechnicalTests from "./pages/assessments/TechnicalTests";
import AptitudeTests from "./pages/assessments/AptitudeTests";
import BehavioralTests from "./pages/assessments/BehavioralTests";
import CommunicationSkillsTest from "./pages/assessments/CommunicationSkillsTest";
import ScrollToTop from "./components/layout/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/candidates" element={<ForCandidates />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/ai-screening" element={<AIResumeScreening />} />
              <Route path="/solutions/career-page" element={<PersonalizedCareerPage />} />
              <Route path="/solutions/talent-assessment" element={<TalentAssessment />} />
              <Route path="/solutions/coding-assessment" element={<CodingAssessment />} />
              <Route path="/solutions/video-interview" element={<VideoInterviews />} />
              <Route path="/solutions/ai-jd-generator" element={<AIJDGenerator />} />
              <Route path="/solutions/ai-resume-optimizer" element={<AIResumeOptimizer />} />
              <Route path="/solutions/mock-interviews" element={<MockInterviews />} />
              <Route path="/solutions/campus-hiring" element={<CampusHiring />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/assessments/psychometric" element={<PsychometricTests />} />
              <Route path="/assessments/technical" element={<TechnicalTests />} />
              <Route path="/assessments/aptitude" element={<AptitudeTests />} />
              <Route path="/assessments/behavioral" element={<BehavioralTests />} />
              <Route path="/assessments/communication" element={<CommunicationSkillsTest />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<PlaceholderPage />} />
              {/* Additional solution pages */}
              <Route path="/solutions/:solutionId" element={<PlaceholderPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
