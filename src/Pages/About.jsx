function About(){
    return (
        <section className="flex flex-col md:flex-row items-center p-8 gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
                <img src="/src/assets/logoImg.jpeg" alt="logo" className="rounded-xl shadow w-64 h-64 object-cover"/>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-3xl font-bold">About Brisit Technologies</h1>
                <p className="">
                We are a team of IT professionals dedicated to making technology easy and reliable for everyone.
                </p>
                <p className="">
                Our services include device repair, IT support, managed services, and technology consulting for homes and businesses.
                </p>
            </div>
        </section>

    );
}
export default About