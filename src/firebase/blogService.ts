import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebaseConfig';

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  author: string;
  publishedAt: Timestamp;
  updatedAt: Timestamp;
  featured: boolean;
  slug: string;
  coverImage?: string;
  readTime: number;
}

export interface BlogFilters {
  tag?: string;
  featured?: boolean;
  limit?: number;
  startAfter?: QueryDocumentSnapshot<DocumentData>;
}

// Blog service functions
export const blogService = {
  // Get all blog posts
  getBlogPosts: async (filters?: BlogFilters): Promise<{ posts: BlogPost[], lastDoc?: QueryDocumentSnapshot<DocumentData> }> => {
    try {
      let q = query(
        collection(db, 'blogPosts'),
        orderBy('publishedAt', 'desc')
      );

      if (filters?.tag) {
        q = query(q, where('tags', 'array-contains', filters.tag));
      }

      if (filters?.featured !== undefined) {
        q = query(q, where('featured', '==', filters.featured));
      }

      if (filters?.limit) {
        q = query(q, limit(filters.limit));
      }

      if (filters?.startAfter) {
        q = query(q, startAfter(filters.startAfter));
      }

      const querySnapshot = await getDocs(q);
      const posts: BlogPost[] = [];
      let lastDoc: QueryDocumentSnapshot<DocumentData> | undefined;

      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() } as BlogPost);
        lastDoc = doc;
      });

      return { posts, lastDoc };
    } catch (error) {
      console.error('Error getting blog posts:', error);
      throw error;
    }
  },

  // Get single blog post by ID
  getBlogPost: async (id: string): Promise<BlogPost | null> => {
    try {
      const docRef = doc(db, 'blogPosts', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as BlogPost;
      }
      return null;
    } catch (error) {
      console.error('Error getting blog post:', error);
      throw error;
    }
  },

  // Get blog post by slug
  getBlogPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    try {
      const q = query(
        collection(db, 'blogPosts'),
        where('slug', '==', slug)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() } as BlogPost;
      }
      return null;
    } catch (error) {
      console.error('Error getting blog post by slug:', error);
      throw error;
    }
  },

  // Create new blog post
  createBlogPost: async (post: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt'>): Promise<string> => {
    try {
      const now = Timestamp.now();
      const postData = {
        ...post,
        publishedAt: now,
        updatedAt: now
      };

      const docRef = await addDoc(collection(db, 'blogPosts'), postData);
      return docRef.id;
    } catch (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
  },

  // Update blog post
  updateBlogPost: async (id: string, post: Partial<Omit<BlogPost, 'id' | 'publishedAt'>>): Promise<void> => {
    try {
      const docRef = doc(db, 'blogPosts', id);
      const updateData = {
        ...post,
        updatedAt: Timestamp.now()
      };
      
      await updateDoc(docRef, updateData);
    } catch (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }
  },

  // Delete blog post
  deleteBlogPost: async (id: string): Promise<void> => {
    try {
      const docRef = doc(db, 'blogPosts', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
  },

  // Search blog posts
  searchBlogPosts: async (searchTerm: string): Promise<BlogPost[]> => {
    try {
      // Note: This is a simple implementation. For production, consider using Algolia or similar
      const { posts } = await blogService.getBlogPosts();
      return posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } catch (error) {
      console.error('Error searching blog posts:', error);
      throw error;
    }
  }
};

export default blogService;
