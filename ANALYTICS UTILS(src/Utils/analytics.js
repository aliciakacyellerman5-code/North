import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const trackVisit = async (page) => {
  try {
    await addDoc(collection(db, "analytics", "visits", "log"), {
      page,
      timestamp: new Date()
    });
  } catch (e) {
    console.log("Analytics error", e);
  }
};

export const trackClick = async (itemId) => {
  try {
    await addDoc(collection(db, "analytics", "clicks", "log"), {
      itemId,
      timestamp: new Date()
    });
  } catch (e) {
    console.log("Analytics error", e);
  }
};

export const trackBlogRead = async (blogId) => {
  try {
    await addDoc(collection(db, "analytics", "blogReads", "log"), {
      blogId,
      timestamp: new Date()
    });
  } catch (e) {
    console.log("Analytics error", e);
  }
};
