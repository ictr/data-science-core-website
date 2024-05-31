import ServicesComp from "@/components/Services";
import { servicesData } from "@/lib/services";

export default function Home() {
  return (
    <>
      <div className="text-center pb-3">
        <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
      </div>
      <p className="text-left text-gray-800">The mission of the Data Science Core is to provide a platform for the collection, storage, analysis, and presentation of big data, including electronic health records and ‘omics data. Our team specializes in the use of HIPAA-compliant local and cloud computation solutions and machine-learning techniques to address the needs of data science research. We leverage Amazon Web Services and their downstream applications, such as SageMaker machine learning platform, Comprehend natural language processing, and Service Workbench collaborative environment, alongside customized on-premises data processing to offer secure storage, rapid analysis, and advanced outputs. The Data Science Core creates a solid foundation that is optimized for data science at every level to maximize researchers’ productivity.</p>

      <div className="text-center py-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
      </div>
      <ServicesComp servicesData={servicesData} />

      <p className="text-left text-gray-800">If your data science project would benefit from a cloud-based platform optimized for your type of project or you are thinking about starting a data science project and would like some guidance with what to do next, contact the Data Science Core for an initial consultation.</p>
    </>
  );
}
