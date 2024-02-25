// controllers/searchController.js

// Example: Search for blog post titles based on the entered letter
const searchBlogTitles = async (letter) => {
    try {
      const regex = new RegExp(`^${letter}`, 'i');
      return await BlogModel.find({ title: { $regex: regex } });
    } catch (error) {
      throw error;
    }
  };
  
  // Implement other search functionalities similarly
  