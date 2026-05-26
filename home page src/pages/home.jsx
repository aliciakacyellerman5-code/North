import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0B0A08] text-white min-h-screen">
      <Navbar />

      <header className="text-center py-32">
        <img src="/logo.png" className="mx-auto w-32 mb-6" />
        <h1 className="text-5xl font-bold">NORTH</h1>
        <p className="text-gray-400 mt-4">Work with North</p>

        <div className="mt-8">
          <a className="bg-orange-600 px-6 py-3 rounded-xl mr-4">Products</a>
          <a className="border border-orange-500 px-6 py-3 rounded-xl">Blogs</a>
        </div>
      </header>

      <Footer />
    </div>
  );
}
