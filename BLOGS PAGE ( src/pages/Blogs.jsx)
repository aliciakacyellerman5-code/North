import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const snap = await getDocs(collection(db, "blogs"));
      setBlogs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0A08] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>

      <div className="space-y-6">
        {blogs.map(b => (
          <div key={b.id} className="bg-[#15120F] p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">{b.title}</h2>
            <p className="text-gray-400 whitespace-pre-line">{b.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
