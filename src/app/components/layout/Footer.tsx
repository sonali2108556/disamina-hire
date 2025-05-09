import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "For Employers",
      links: [
        { name: "AI JD Generator", href: "/solutions/ai-jd-generator" },
        { name: "AI Resume Screening", href: "/solutions/ai-screening" },
        { name: "Personalized Career Page", href: "/solutions/career-page" },
        { name: "Assessments", href: "/solutions/talent-assessment" },
        { name: "AI Proctoring", href: "/solutions/ai-proctoring" },
        { name: "Video Interviews", href: "/solutions/video-interview" },
        { name: "Campus Hiring", href: "/solutions/campus-hiring" },
        { name: "Psychometric Tests", href: "/assessments/psychometric" },
        { name: "Technical Tests", href: "/assessments/technical" },
        { name: "Aptitude Tests", href: "/assessments/aptitude" },
        { name: "Behavioral Tests", href: "/assessments/behavioral" },
        { name: "Communication Skills Tests", href: "/assessments/communication" },
      ],
    },
    {
      title: "For Candidates",
      links: [
        { name: "AI Resume Optimizer", href: "/solutions/ai-resume-optimizer" },
        { name: "AI Resume Builder", href: "/solutions/ai-resume-optimizer" },
        { name: "Latest Tech & IT Jobs", href: "https://jobs.disamina.ai/" },
        { name: "Latest Sales & Marketing Jobs", href: "https://jobs.disamina.ai/" },
        { name: "Latest Digital Marketing Jobs", href: "https://jobs.disamina.ai/" },
        { name: "Latest Data Science Jobs", href: "https://jobs.disamina.ai/" },
        { name: "Latest Product Manager Jobs", href: "https://jobs.disamina.ai/" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "https://jobs.disamina.ai/disamina-ai-pv34202201o" },
        { name: "Resources", href: "https://disamina.substack.com/" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/terms" },
        { name: "Delete My Data", href: "/delete-my-data" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="/images/logo.png" alt="Disamina" width="130px" />
            </Link>
            <p className="text-gray-600 mb-6 text-sm">
              AI-enabled hiring assistant portal that helps you hire faster, smarter, and better.
            </p>
            <div className="mb-6">
              <img src="/images/ms-partner.png" alt="Disamina" className="h-[140px]" />
            </div>
            <div className="flex space-x-4 align-center">
              <a target="_blank" rel="noopener noreferrer"
                href="https://www.facebook.com/disaminaAI/"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer"
                href="https://www.instagram.com/disamina.ai/"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer"
                href="https://www.youtube.com/@disamina-ai"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/company/disamina"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6 mt-1"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>

            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-gray-900 text-lg">{group.title}</h3>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center">
            © {currentYear} Disamina Corp Private Limited. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
