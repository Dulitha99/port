import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  Timestamp
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const blogCollectionRef = collection(db, "blogs");

export interface BlogPost {
  id?: string;
  title: string;
  content: string; // This will be the HTML from react-quill
  tags: string[];
  createdAt: Timestamp;
}

export const getBlogPosts = async () => {
  const data = await getDocs(blogCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as BlogPost));
};

export const addBlogPost = async (post: Omit<BlogPost, 'id' | 'createdAt'>) => {
  const newPost = {
    ...post,
    createdAt: Timestamp.now(),
  }
  return await addDoc(blogCollectionRef, newPost);
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>) => {
  const postDoc = doc(db, "blogs", id);
  return await updateDoc(postDoc, post);
};

export const deleteBlogPost = async (id: string) => {
  const postDoc = doc(db, "blogs", id);
  return await deleteDoc(postDoc);
};
