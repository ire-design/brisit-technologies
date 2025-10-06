import ServiceCards from "../components/ServiceCards";

function Service({services}){
   


    return ( 
    <section className="min-h-screen w-full md:w-4/5 mx-auto py-8 px-4 md:px-12 flex flex-col gap-8">
        {services.map((service, index) => (
            <ServiceCards key={service.id} service={service} reverse={index % 2 !== 0} />
        ))}
    </section>



    );
}
export default Service