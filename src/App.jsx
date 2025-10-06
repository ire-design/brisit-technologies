import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Service from './Pages/Service'
import About from './Pages/About'
import Contact from './Pages/Contact'


function App() {
   const services = [
  {
    id: 1,
    title: "Computer Hardware Repairs",
    subtitle: "Hardware repair",
    description: "We provide expert repair services for laptops, desktops, and printers. Our certified technicians diagnose and fix hardware issues like damaged screens, faulty motherboards, and power problems using high-quality parts and advanced diagnostic tools.",
    category: "Repair",
    items: ["Laptops", "Desktops", "Printers"],
    image: "https://images.unsplash.com/photo-1721333092291-1e0d5a8ab998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    id: 2,
    title: "Sales of Laptops, Desktops, Printers, and Accessories",
    subtitle: "Computer Sales",
    description: "We offer a wide range of new laptops, desktops, and printers from trusted brands, along with essential accessories such as keyboards, mice, cables, and external drives. Our experts help you choose the right products that fit your needs and budget.",
    category: "Sales",
    items: ["Laptops", "Desktops", "Printers", "Accessories"],
    image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    title: "Replacement of Computer Parts",
   subtitle: "Parts Replacement",
    description: "We replace faulty computer components like motherboards, RAM, batteries, and storage drives with genuine, high-quality parts. Our technicians ensure proper installation and compatibility to boost your device’s performance and lifespan.",
    category: "Maintenance",
    items: ["Motherboards", "Batteries", "RAM", "Storage Drives"],
    image:"https://images.unsplash.com/photo-1613483187636-c2024013d54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwcmVwYWlyfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Software Installation",
   subtitle: "Software Setup",
    description: "We handle the complete setup of operating systems, drivers, productivity tools, and antivirus software. Whether it’s Windows, macOS, or Linux, we ensure your system runs smoothly and securely with all essential updates installed.",
    category: "Software",
    items: ["Operating Systems", "Drivers", "Office Tools", "Antivirus"],
    image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    title: "Printer Servicing and Maintenance",
   subtitle: "Printer Service",
    description: "Our printer servicing includes cleaning, maintenance, and part replacement for inkjet and laser printers. Regular servicing helps maintain print quality, extend printer life, and reduce costly breakdowns for homes and offices.",
    category: "Maintenance",
    items: ["Inkjet Printers", "Laser Printers", "Cleaning", "Part Replacement"],
    image:"https://images.unsplash.com/photo-1721830834983-f111ad63dbf4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
      id: 6,
      title: "Network Setup & Troubleshooting",
      subtitle: "Network Solutions",
      description:"From Wi-Fi setup to advanced business networking, we install, configure, and troubleshoot wired and wireless networks for stable, high-speed connectivity in homes and offices.",
      category: "Networking",
      items: ["Wi-Fi Setup", "Business Networking", "Troubleshooting"],
      image:"https://plus.unsplash.com/premium_photo-1661657612465-15dca8fa8775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
    },
    {
      id: 7,
      title: "Data Backup & Recovery",
      subtitle: "Data Security",
      description:"We set up secure backup solutions and can recover lost or corrupted files from hard drives, SSDs, and external devices, helping you prevent data loss before it happens.",
      category: "Data",
      items: ["Backup Solutions", "Data Recovery", "Cloud Backup"],
      image:"https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Virus & Malware Removal",
      subtitle: "Security & Cleanup",
      description:"We remove viruses, malware, and spyware from your devices and install robust security software to keep you protected against future threats.",
      category: "Security",
      items: ["Virus Removal", "Malware Removal", "Security Software"],
      image:"https://plus.unsplash.com/premium_photo-1733317302666-82fb00a68109?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      title: "IT Consultation for Businesses",
      subtitle: "Business IT Advice",
      description:"Get expert advice on technology upgrades, digital transformation, and IT planning to improve productivity and security for your business.",
      category: "Consultation",
      items: ["IT Planning", "Tech Upgrades", "Security Audits"],
      image:"https://plus.unsplash.com/premium_photo-1661558491483-0371d9fdd456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    },
    {
      id: 10,
      title: "Remote Tech Support",
      subtitle: "Remote Assistance",
      description:"Our technicians can assist you remotely to resolve software issues, set up applications, or provide troubleshooting without an on-site visit.",
      category: "Support",
      items: ["Remote Troubleshooting", "Software Setup", "Tech Guidance"],
      image:"https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "Custom PC Building",
      subtitle: "Custom Computers",
      description:"We build custom PCs tailored for gaming, design, or business needs, sourcing quality components and ensuring professional assembly.",
      category: "Builds",
      items: ["Gaming PCs", "Workstations", "Custom Orders"],
      image:"https://images.unsplash.com/photo-1583418855574-dcb771a0c46b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 12,
      title: "Smart Home Device Setup",
      subtitle: "Home Automation",
      description:"We install and configure smart home devices—like security cameras, smart locks, assistants, and thermostats—for seamless automation.",
      category: "Smart Home",
      items: ["Smart Cameras", "Voice Assistants", "Thermostats"],
      image:"https://images.unsplash.com/photo-1736410223296-4537159eefe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjBob21lJTIwZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 13,
      title: "Mobile Device Repairs",
      subtitle: "Phones & Tablets",
      description:"We fix broken screens, replace batteries, and solve hardware/software issues for all major mobile phone and tablet brands.",
      category: "Mobile",
      items: ["Screen Replacement", "Battery Replacement", "Software Issues"],
      image:"https://images.unsplash.com/photo-1746005847012-d89286605db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 14,
      title: "On-site Technical Support",
      subtitle: "Local Visits",
      description:"Need urgent help? Our technicians come to your location to resolve problems that can't be solved remotely.",
      category: "On-site",
      items: ["Urgent Visits", "Business Sites", "Home Support"],
      image:"https://plus.unsplash.com/premium_photo-1683134018612-560033455e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2FsJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 15,
      title: "IT Security Audits",
      subtitle: "Security Review",
      description:
        "We evaluate your systems, networks, and devices for vulnerabilities and help you strengthen your security posture.",
      category: "Security",
      items: ["Vulnerability Assessment", "Security Recommendations", "Compliance"],
      image:"https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVkaXR8ZW58MHx8MHx8fDA%3D",
    },
   ];
 
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Service services= {services}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact/" element={<Contact />}/>
        <Route path="/contact/:id" element={<Contact services= {services}/>}/>
      </Routes>
      <Footer/>
    </Router> 
  
  );
}

export default App
