import Footer from '@/app/components/layout/Footer';
import Navbar from '@/app/components/layout/Navbar';
import SeoHead from '@/app/components/shared/SeoHead';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">
              This Privacy Policy governs the manner in which Disamina collects, uses, maintains, and discloses information collected from users (each, a “User”) of the
              <a href="https://disamina.ai" className="text-primary hover:underline ml-1">https://disamina.ai</a> website (“Site”).
            </p>
            <p className="mb-4">
              Disamina.ai is a software solution provided by Disamina Corp Pvt. Ltd. [hereinafter “Disamina” or “Company”].
            </p>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h2>
              <p className="mb-2">
                We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register, place an order, fill out a form, or engage in other activities. Users may be asked for details such as name, email address, mailing address, and phone number. Users can visit the site anonymously and may refuse to supply personal information, but this may limit certain activities.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Non-Personal Information</h2>
              <p className="mb-2">
                We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Sites, such as the operating system and the Internet service providers utilized and other similar information.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Cookies</h2>
              <p className="mb-2">
                Our Site may use “cookies” to enhance User experience. User’s web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. The user may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Use of Collected Information</h2>
              <p className="mb-2">
                Disamina may collect and use Users personal information for the following purposes:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>To run and operate our Site</li>
                <li>We may need your information to display content on the Site correctly.</li>
                <li>To improve customer service</li>
                <li>The information you provide helps us respond to your customer service requests and support needs more efficiently.
                </li>
                <li>To personalize user experience</li>
                <li>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                <li>To improve our Site
                </li>
                <li>We may use feedback you provide to improve our products and services.</li>
                <li>To run a promotion, contest, survey or other Site feature
                </li>
                <li>To send Users information they agreed to receive about topics we think will be of interest to them.</li>
                <li>To send periodic emails</li>
                <li>We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Protecting Your Information</h2>
              <p className="mb-2">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Information Sharing</h2>
              <p className="mb-2">
                We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Links to Third-Party Websites</h2>
              <p className="mb-2">
                Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Changes to This Privacy Policy</h2>
              <p className="mb-2">
                Disamina has the discretion to update this privacy policy at any time. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
              <p className="mb-2">
                By using this Site, you signify your acceptance of this policy. If you do not agree with this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.


              </p>

            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Acceptance of This Policy</h2>
              <p className="mb-2">
                By using this Site, you accept this policy. If you do not agree, please do not use the Site. Continued use following changes to this policy will signify acceptance.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-1">
                <strong>Email:</strong>{' '}
                <a href="mailto:support@disamina.ai" className="text-primary hover:underline">
                  support@disamina.ai
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+919448408016" className="text-primary hover:underline">
                  +91 9448408016
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Last updated on March 12, 2025</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
