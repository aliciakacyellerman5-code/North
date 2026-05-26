import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snap = await getDocs(collection(db, "products"));
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0A08] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-[#15120F] p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-bold mb-2">{p.title}</h2>
            <p className="text-gray-400">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
