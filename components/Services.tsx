interface ServicesProps {
  servicesData: { [key: string]: string }[];
}

export default function ServicesComp({ servicesData }: ServicesProps) {
  return (
    <div className="container mx-auto">
      <div className="grid w-full md:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            className="flex flex-col justify-center px-8 mx-6 my-6 text-center rounded-md shadow-md bg-white text-gray-800"
            key={ index }
          >
            <div className="flex-1 my-4">
              <p className="text-xl font-bold">{ service.title }</p>
              <p className="text-md text-left">{ service.description }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}