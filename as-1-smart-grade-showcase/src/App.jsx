import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import StudentsTable from './components/StudentsTable';

function App() {
  return (
    <body className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Hero />
      <StudentsTable />
      <Footer />
    </body>
  );
}

export default App;
