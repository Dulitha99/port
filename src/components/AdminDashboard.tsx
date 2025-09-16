import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '~/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost, BlogPost } from '~/firebase/blogService';
import { getAnalyticsData, AnalyticsData } from '~/firebase/analyticsService';
import { Timestamp } from 'firebase/firestore';

// Declare netlifyIdentity
declare const netlifyIdentity: any;

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost> | null>(null);

  // Fetch data on component mount
  const fetchData = async () => {
    setIsLoading(true);
    const [fetchedPosts, fetchedAnalytics] = await Promise.all([
      getBlogPosts(),
      getAnalyticsData(),
    ]);
    fetchedPosts.sort((a, b) => (b.createdAt.seconds - a.createdAt.seconds));
    setPosts(fetchedPosts);
    setAnalytics(fetchedAnalytics);
    setIsLoading(false);
  };

  useEffect(() => {
    setUser(netlifyIdentity.currentUser());
    fetchData();
  }, []);

  const handleLogout = () => {
    netlifyIdentity.logout();
    window.location.href = '/';
  };

  const handleOpenDialog = (post: Partial<BlogPost> | null = null) => {
    setCurrentPost(post || { title: '', content: '', tags: [] });
    setIsDialogOpen(true);
  };

  const handleSavePost = async () => {
    if (!currentPost) return;

    if (currentPost.id) {
      const { id, ...postData } = currentPost;
      await updateBlogPost(id, postData);
    } else {
      const newPost: Omit<BlogPost, 'id' | 'createdAt'> = {
        title: currentPost.title || '',
        content: currentPost.content || '',
        tags: currentPost.tags || [],
      };
      await addBlogPost(newPost);
    }
    await fetchData(); // Refresh all data
    setIsDialogOpen(false);
    setCurrentPost(null);
  };

  const handleDeletePost = async (id: string) => {
    await deleteBlogPost(id);
    await fetchData(); // Refresh all data
  };

  return (
    <div className="container mx-auto px-4 py-20 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-heading">Admin Dashboard</h1>
          {user && <p className="text-muted-foreground">Welcome, {user.email}</p>}
        </div>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      {/* Analytics Section */}
      <div>
        <h2 className="text-2xl font-heading mb-4">Site Analytics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader><CardTitle>Total Page Views</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">{analytics?.totalPageViews || '...'}</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Unique Visitors</CardTitle></CardHeader>
            <CardContent><p className="text-2xl font-bold">{analytics?.uniqueVisitors || '...'}</p></CardContent>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground mt-2">* Analytics data is currently placeholder and will be live upon deployment.</p>
      </div>

      {/* Blog Posts Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Manage Blog Posts</CardTitle>
          <Button onClick={() => handleOpenDialog()}>Create New Post</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={3} className="text-center">Loading...</TableCell></TableRow>
              ) : (
                posts.map(post => (
                  <TableRow key={post.id}>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{new Date(post.createdAt.seconds * 1000).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleOpenDialog(post)}>Edit</Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild><Button variant="destructive" size="sm">Delete</Button></AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This action is irreversible.</AlertDialogDescription></AlertDialogHeader>
                          <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => handleDeletePost(post.id!)}>Delete</AlertDialogAction></AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader><DialogTitle>{currentPost?.id ? 'Edit Post' : 'Create New Post'}</DialogTitle></DialogHeader>
          <div className="grid gap-4 py-4">
            <div><Label htmlFor="title">Title</Label><Input id="title" value={currentPost?.title || ''} onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })} /></div>
            <div><Label htmlFor="tags">Tags (comma-separated)</Label><Input id="tags" value={Array.isArray(currentPost?.tags) ? currentPost.tags.join(', ') : ''} onChange={(e) => setCurrentPost({ ...currentPost, tags: e.target.value.split(',').map(t => t.trim()) })} /></div>
            <div><Label>Content</Label><ReactQuill theme="snow" value={currentPost?.content || ''} onChange={(content) => setCurrentPost({ ...currentPost, content })} className="bg-background text-foreground" /></div>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button><Button onClick={handleSavePost}>Save Post</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
