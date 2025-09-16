// This is a placeholder service for Firebase Analytics.
// In a real-world application, you would typically use Google Analytics Data API
// on a backend server to process and fetch this data, or use a service like
// Google Data Studio to embed reports. Fetching raw analytics on the client-side
// is not a standard practice.

export interface AnalyticsData {
  totalPageViews: number;
  uniqueVisitors: number;
  topPages: { page: string; views: number }[];
}

/**
 * Fetches mock analytics data.
 * @returns {Promise<AnalyticsData>}
 */
export const getAnalyticsData = async (): Promise<AnalyticsData> => {
  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return mock data
  return {
    totalPageViews: 1337,
    uniqueVisitors: 428,
    topPages: [
      { page: '/', views: 500 },
      { page: '/blog/deconstructing-zero-day', views: 250 },
      { page: '/projects', views: 150 },
    ],
  };
};
