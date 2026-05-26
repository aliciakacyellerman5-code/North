import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [productTitle, setProductTitle] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  // FETCH DATA
  const fetchData = async () => {
    const productSnap = await getDocs(collection(db, "products"));
    setProducts(productSnap.docs.map(d => ({ id: d.id, ...d.data() })));

    const blogSnap = await getDocs(collection(db, "blogs"));
    setBlogs(blogSnap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ADD PRODUCT
  const addProduct = async () => {
    if (!productTitle) return;

    await addDoc(collection(db, "products"), {
      title: productTitle,
      description: productDesc,
      createdAt: new Date()
    });

    setProductTitle("");
    setProductDesc("");
    fetchData();
  };

  // ADD BLOG
  const addBlog = async () => {
    if (!blogTitle) return;

    await addDoc(collection(db, "blogs"), {
      title: blogTitle,
      content: blogContent,
      createdAt: new Date()
    });

    setBlogTitle("");
    setBlogContent("");
    fetchData();
  };

  // DELETE ITEM
  const deleteItem = async (type, id) => {
    await deleteDoc(doc(db, type, id));
    fetchData();
  };

  return (
    <div className="min-h-screen bg-[#0B0A08] text-white p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">NORTH Admin CMS</h1>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="mb-12">
        <h2 className="text-2xl mb-4">Products</h2>

        <input
          placeholder="Product Title"
          className="p-2 mr-2 text-black"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          className="p-2 mr-2 text-black"
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
        />

        <button onClick={addProduct} className="bg-orange-600 px-4 py-2">
          Add Product
        </button>

        <ul className="mt-4">
          {products.map(p => (
            <li key={p.id} className="flex justify-between border-b py-2">
              <span>{p.title}</span>
              <button onClick={() => deleteItem("products", p.id)} className="text-red-400">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* BLOGS */}
      <div>
        <h2 className="text-2xl mb-4">Blogs</h2>

        <input
          placeholder="Blog Title"
          className="p-2 mr-2 text-black"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />

        <input
          placeholder="Content"
          className="p-2 mr-2 text-black"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />

        <button onClick={addBlog} className="bg-orange-600 px-4 py-2">
          Add Blog
        </button>

        <ul className="mt-4">
          {blogs.map(b => (
            <li key={b.id} className="flex justify-between border-b py-2">
              <span>{b.title}</span>
              <button onClick={() => deleteItem("blogs", b.id)} className="text-red-400">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
