import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SeoHead from "@/components/shared/SeoHead";
import { Link } from "react-router-dom";

const DeleteMyDataPage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <SeoHead
        title="Request to Delete Your Data | Disamina AI"
        description="Learn how to request deletion of your personal data from Disamina AI in accordance with privacy regulations."
      />

      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">
              Delete My Data
            </h1>
            <div>
              <p className="mb-4 ">
                At Disamina AI, we respect your privacy and are committed to ensuring you have control over your personal data. If you wish to request the deletion of your data from our systems, please carefully follow the instructions below.
              </p>

              <h2 className="text-lg font-semibold text-gray-800 mb-2">How to Submit a Data Deletion Request</h2>
              <ol className="list-disc ml-6 mb-4 ">
                <li>
                  <strong>Identify Yourself:</strong> Please clearly state your full name and any other identifying information you may have provided us (e.g., email address, account ID). This will help us locate your data accurately.
                </li>
                <li>
                  <strong>Specify the Data:</strong> If you have specific data you wish to be deleted, please describe it in detail. Otherwise, we will process a request for the deletion of all personal data associated with your identified information.
                </li>
                <li>
                  <strong>Verification Process:</strong> For security reasons and to prevent unauthorized requests, we may need to verify your identity before processing your deletion request. This may involve asking you to provide additional information or confirming details we already have on file. We appreciate your cooperation in this process.
                </li>
                <li>
                  <strong>Submit Your Request:</strong> You can submit your data deletion request through one of the following methods:
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <strong>Email:</strong> Send an email to <a href="mailto:support@disamina.ai" className="text-indigo-600 hover:underline">support@disamina.ai</a> with the subject line "Data Deletion Request".
                    </li>
                    <li>
                      <strong>Contact Form:</strong> Visit our <Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link> page and use the contact form provided for data deletion requests.
                    </li>
                    {/* Add other methods if applicable, e.g., postal address */}
                  </ul>
                </li>
                <li>
                  <strong>Processing Time:</strong> We will acknowledge your request within [Number] business days and aim to complete the data deletion process within [Number] days, unless a longer period is required by law. We will keep you informed of the progress.
                </li>
              </ol>

              <h2 className="text-lg font-semibold text-gray-800 mb-2">Important Considerations</h2>
              <ul className="list-disc ml-6 mb-4 ">
                <li>
                  Please note that the deletion of your data may impact your access to our services.
                </li>
                <li>
                  In some cases, we may be legally required to retain certain information for compliance purposes (e.g., tax records). We will inform you if this applies to your request.
                </li>
                <li>
                  Once your data is deleted, it may not be recoverable.
                </li>
              </ul>

              <p className="">
                If you have any questions or require further clarification regarding our data deletion process, please do not hesitate to contact us at <a href="mailto:support@disamina.ai" className="text-indigo-600 hover:underline">support@disamina.ai</a>.
              </p>
            </div>
            <div className="bg-gray-50 py-3 px-4 sm:px-6 flex justify-end">
              <Link to="/privacy" className="text-indigo-600 hover:underline">Read our full Privacy Policy</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>

  );
};

export default DeleteMyDataPage;