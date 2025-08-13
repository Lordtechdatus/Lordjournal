// API route: /api/search
// Methods: GET, POST
// Response: JSON with search results for research articles

// Mock research articles data
const articles = [
  {
    id: 1,
    title: 'Machine Learning Applications in Healthcare',
    authors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez'],
    abstract: 'This paper explores the latest developments in machine learning applications for medical diagnosis and treatment planning.',
    journal: 'Journal of Medical AI',
    year: 2024,
    doi: '10.1234/jmai.2024.001',
    keywords: ['machine learning', 'healthcare', 'AI', 'medical diagnosis'],
    citations: 45
  },
  {
    id: 2,
    title: 'Sustainable Energy Solutions for Urban Development',
    authors: ['Dr. Emily Watson', 'Dr. James Kim'],
    abstract: 'A comprehensive study of renewable energy integration in modern urban planning and development strategies.',
    journal: 'Urban Sustainability Review',
    year: 2024,
    doi: '10.1234/usr.2024.002',
    keywords: ['sustainable energy', 'urban development', 'renewable energy', 'city planning'],
    citations: 32
  },
  {
    id: 3,
    title: 'Quantum Computing in Cryptography',
    authors: ['Prof. David Thompson', 'Dr. Lisa Park'],
    abstract: 'Analysis of quantum computing implications for current cryptographic systems and future security protocols.',
    journal: 'Computational Security',
    year: 2023,
    doi: '10.1234/csec.2023.003',
    keywords: ['quantum computing', 'cryptography', 'security', 'encryption'],
    citations: 78
  }
];

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Handle search query parameters
      const { q, journal, year, author, limit = 10 } = req.query;
      
      let results = [...articles];
      
      // Apply search filters
      if (q) {
        const query = q.toLowerCase();
        results = results.filter(article => 
          article.title.toLowerCase().includes(query) ||
          article.abstract.toLowerCase().includes(query) ||
          article.keywords.some(keyword => keyword.toLowerCase().includes(query))
        );
      }
      
      if (journal) {
        const journalQuery = journal.toLowerCase();
        results = results.filter(article => 
          article.journal.toLowerCase().includes(journalQuery)
        );
      }
      
      if (year) {
        const yearNum = parseInt(year);
        if (!isNaN(yearNum)) {
          results = results.filter(article => article.year === yearNum);
        }
      }
      
      if (author) {
        const authorQuery = author.toLowerCase();
        results = results.filter(article => 
          article.authors.some(author => author.toLowerCase().includes(authorQuery))
        );
      }
      
      // Apply limit
      results = results.slice(0, parseInt(limit));
      
      return res.status(200).json({
        query: { q, journal, year, author, limit },
        totalResults: results.length,
        results,
        searchTime: new Date().toISOString()
      });
      
    } else if (req.method === 'POST') {
      // Handle advanced search with body parameters
      const { query, filters = {}, sortBy = 'relevance', page = 1, limit = 10 } = req.body;
      
      if (!query && Object.keys(filters).length === 0) {
        return res.status(400).json({ 
          error: 'Search query or filters required' 
        });
      }
      
      let results = [...articles];
      
      // Apply text search
      if (query) {
        const searchQuery = query.toLowerCase();
        results = results.filter(article => 
          article.title.toLowerCase().includes(searchQuery) ||
          article.abstract.toLowerCase().includes(searchQuery) ||
          article.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery))
        );
      }
      
      // Apply filters
      if (filters.journal) {
        results = results.filter(article => 
          article.journal.toLowerCase().includes(filters.journal.toLowerCase())
        );
      }
      
      if (filters.year) {
        results = results.filter(article => article.year === filters.year);
      }
      
      if (filters.author) {
        results = results.filter(article => 
          article.authors.some(author => 
            author.toLowerCase().includes(filters.author.toLowerCase())
          )
        );
      }
      
      // Apply sorting
      if (sortBy === 'citations') {
        results.sort((a, b) => b.citations - a.citations);
      } else if (sortBy === 'year') {
        results.sort((a, b) => b.year - a.year);
      } else if (sortBy === 'title') {
        results.sort((a, b) => a.title.localeCompare(b.title));
      }
      
      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + parseInt(limit);
      const paginatedResults = results.slice(startIndex, endIndex);
      
      return res.status(200).json({
        query: { query, filters, sortBy, page, limit },
        totalResults: results.length,
        totalPages: Math.ceil(results.length / limit),
        currentPage: page,
        results: paginatedResults,
        searchTime: new Date().toISOString()
      });
      
    } else {
      return res.status(405).json({ 
        error: 'Method not allowed',
        allowedMethods: ['GET', 'POST']
      });
    }
  } catch (error) {
    console.error('Search API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Search operation failed'
    });
  }
}
