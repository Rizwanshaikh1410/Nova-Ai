// categories.js - Complete Categories Page Functionality with Real Tool Counts

document.addEventListener('DOMContentLoaded', function() {
    // Initialize categories page
    initCategoriesPage();
    
    // Initialize particles background
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('Particles loaded for categories page');
        });
    }
    
    // Initialize animated background
    initAnimatedBackground();
});

function initCategoriesPage() {
    // DOM Elements
    const categoriesGrid = document.getElementById('categoriesGrid');
    const categoryPagination = document.getElementById('categoryPagination');
    const categoryPageInfo = document.getElementById('categoryPageInfo');
    const categorySearchInput = document.getElementById('categorySearchInput');
    const clearCategorySearch = document.getElementById('clearCategorySearch');
    const sortFilter = document.getElementById('sortFilter');
    const categoryResultsCount = document.getElementById('categoryResultsCount');
    const categoryLoadingIndicator = document.getElementById('categoryLoadingIndicator');
    
    // Variables
    let allCategories = [];
    let currentPage = 1;
    const itemsPerPage = 9;
    let currentSearchTerm = '';
    let currentSort = 'name-asc';
    let totalPages = 1;
    
    // Initialize categories from tools data
    function extractCategoriesFromTools() {
        // Show loading indicator
        if (categoryLoadingIndicator) {
            categoryLoadingIndicator.style.display = 'block';
        }
        
        // Check if tools data exists (from tools.js)
        if (typeof allTools !== 'undefined' && allTools.length > 0) {
            console.log(`Found ${allTools.length} tools in tools.js`);
            
            // Extract unique categories and count tools in each
            const categoryMap = new Map();
            
            // First pass: Initialize all categories from sample data
            const sampleCategories = getSampleCategories();
            sampleCategories.forEach(sampleCat => {
                categoryMap.set(sampleCat.name, {
                    name: sampleCat.name,
                    toolCount: 0,
                    freeTools: 0,
                    paidTools: 0,
                    freemiumTools: 0
                });
            });
            
            // Second pass: Count actual tools from allTools
            allTools.forEach(tool => {
                if (tool.category) {
                    // Clean up category name (remove extra spaces, trim)
                    const cleanCategory = tool.category.trim();
                    
                    if (!categoryMap.has(cleanCategory)) {
                        // If we encounter a new category not in sample data, add it
                        categoryMap.set(cleanCategory, {
                            name: cleanCategory,
                            toolCount: 0,
                            freeTools: 0,
                            paidTools: 0,
                            freemiumTools: 0
                        });
                    }
                    
                    const category = categoryMap.get(cleanCategory);
                    category.toolCount++;
                    
                    // Count by pricing type
                    if (tool.pricing === 'free') {
                        category.freeTools++;
                    } else if (tool.pricing === 'paid') {
                        category.paidTools++;
                    } else if (tool.pricing === 'freemium') {
                        category.freemiumTools++;
                    }
                }
            });
            
            // Convert map to array
            allCategories = Array.from(categoryMap.values());
            
            console.log(`Extracted ${allCategories.length} categories from tools data`);
            
            // Sort alphabetically by default
            allCategories.sort((a, b) => a.name.localeCompare(b.name));
            
            updateCategoryStats();
            renderCategories();
        } else {
            // Fallback: Use sample data if tools.js isn't loaded
            console.log('Tools data not found, using sample categories');
            
            allCategories = getSampleCategories();
            
            updateCategoryStats();
            renderCategories();
        }
    }
    
    // Get sample categories data (fallback)
    function getSampleCategories() {
        return [
            { name: 'Video Creation', toolCount: 150, freeTools: 45, paidTools: 105, freemiumTools: 30 },
            { name: 'Audio Tools', toolCount: 80, freeTools: 25, paidTools: 55, freemiumTools: 20 },
            { name: 'Security', toolCount: 45, freeTools: 10, paidTools: 35, freemiumTools: 15 },
            { name: 'Social Media', toolCount: 120, freeTools: 40, paidTools: 80, freemiumTools: 35 },
            { name: 'Finance', toolCount: 65, freeTools: 15, paidTools: 50, freemiumTools: 25 },
            { name: 'E-commerce', toolCount: 90, freeTools: 30, paidTools: 60, freemiumTools: 20 },
            { name: 'Gaming AI', toolCount: 70, freeTools: 20, paidTools: 50, freemiumTools: 15 },
            { name: 'Content Creation', toolCount: 200, freeTools: 80, paidTools: 120, freemiumTools: 50 },
            { name: 'Image Editing & Generation AI', toolCount: 180, freeTools: 60, paidTools: 120, freemiumTools: 40 },
            { name: 'Cyber Security AI', toolCount: 55, freeTools: 12, paidTools: 43, freemiumTools: 10 },
            { name: 'Coding & Development', toolCount: 140, freeTools: 50, paidTools: 90, freemiumTools: 30 },
            { name: 'AI Agents', toolCount: 85, freeTools: 25, paidTools: 60, freemiumTools: 20 },
            { name: 'Chat & Assistants', toolCount: 160, freeTools: 70, paidTools: 90, freemiumTools: 45 },
            { name: 'Business & Productivity', toolCount: 175, freeTools: 65, paidTools: 110, freemiumTools: 40 },
            { name: 'Ad & Creative', toolCount: 95, freeTools: 30, paidTools: 65, freemiumTools: 25 },
            { name: 'Project Management AI', toolCount: 110, freeTools: 35, paidTools: 75, freemiumTools: 20 },
            { name: 'Avatar & Characters', toolCount: 60, freeTools: 20, paidTools: 40, freemiumTools: 15 },
            { name: 'Healthcare AI', toolCount: 75, freeTools: 15, paidTools: 60, freemiumTools: 10 },
            { name: 'Education AI', toolCount: 85, freeTools: 40, paidTools: 45, freemiumTools: 20 },
            { name: 'Marketing AI', toolCount: 145, freeTools: 55, paidTools: 90, freemiumTools: 35 }
        ];
    }
    
    // Update category statistics in the stats section
    function updateCategoryStats() {
        const totalCategories = allCategories.length;
        const totalTools = allCategories.reduce((sum, cat) => sum + cat.toolCount, 0);
        const freeTools = allCategories.reduce((sum, cat) => sum + cat.freeTools, 0);
        
        if (document.getElementById('totalCategories')) {
            document.getElementById('totalCategories').textContent = totalCategories + '+';
        }
        if (document.getElementById('totalTools')) {
            document.getElementById('totalTools').textContent = totalTools + '+';
        }
        if (document.getElementById('freeTools')) {
            document.getElementById('freeTools').textContent = freeTools + '+';
        }
        
        // Update the featured categories count
        updateFeaturedCategoriesCount();
    }
    
    // Update featured categories with real counts
    function updateFeaturedCategoriesCount() {
        // Update featured categories in the footer or other sections
        const featuredCategories = ['Video Creation', 'Audio Tools', 'Security', 'Social Media', 'Finance', 'E-commerce'];
        
        featuredCategories.forEach(categoryName => {
            const category = allCategories.find(cat => cat.name === categoryName);
            if (category) {
                // Update any elements showing this category count
                const elements = document.querySelectorAll(`[data-category="${categoryName}"] .tool-count`);
                elements.forEach(element => {
                    element.textContent = category.toolCount + '+';
                });
            }
        });
    }
    
    // Render categories to the grid
    function renderCategories() {
        // Hide loading indicator
        if (categoryLoadingIndicator) {
            categoryLoadingIndicator.style.display = 'none';
        }
        
        // Filter and sort categories
        let filteredCategories = filterCategories(allCategories);
        filteredCategories = sortCategories(filteredCategories);
        
        // Calculate pagination
        totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageCategories = filteredCategories.slice(startIndex, endIndex);
        
        // Clear grid
        categoriesGrid.innerHTML = '';
        
        // Render category cards
        pageCategories.forEach((category, index) => {
            const categoryCard = createCategoryCard(category);
            categoriesGrid.appendChild(categoryCard);
        });
        
        // Update results count
        if (categoryResultsCount) {
            categoryResultsCount.textContent = `Showing ${pageCategories.length} of ${filteredCategories.length} categories`;
        }
        
        // Update pagination
        updateCategoryPagination(filteredCategories.length);
        
        // Update page info
        if (categoryPageInfo) {
            categoryPageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        }
    }
    
    // Filter categories based on search term
    function filterCategories(categories) {
        if (!currentSearchTerm) return categories;
        
        const searchLower = currentSearchTerm.toLowerCase();
        return categories.filter(category => 
            category.name.toLowerCase().includes(searchLower)
        );
    }
    
    // Sort categories based on selected sort option
    function sortCategories(categories) {
        switch(currentSort) {
            case 'name-asc':
                return categories.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return categories.sort((a, b) => b.name.localeCompare(a.name));
            case 'tools-desc':
                return categories.sort((a, b) => b.toolCount - a.toolCount);
            case 'tools-asc':
                return categories.sort((a, b) => a.toolCount - b.toolCount);
            default:
                return categories;
        }
    }
    
    // ====================================================================
    // UPDATED: Create a category card element with REAL tool counts
    // ====================================================================
    function createCategoryCard(category) {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6';
        
        const card = document.createElement('div');
        card.className = 'category-card';
        
        // Use helper functions for the image-style layout
        const nameParts = splitCategoryName(category.name);
        const description = getCategoryDescription(category.name);
        const features = getCategoryFeatures(category.name);
        
        // HTML structure that matches your CSS with REAL tool counts
        card.innerHTML = `
            <div class="category-card-header">
                <h3 class="category-title">
                    <span class="category-title-main">${nameParts[0]}</span>
                    <span class="category-title-sub">${nameParts[1]}</span>
                </h3>
                <!-- Tool Count Display -->
                <div class="tool-count-display">
                    <span class="total-tools">${category.toolCount}+ Tools</span>
                    <div class="pricing-breakdown">
                        <span class="free-tools" title="Free Tools">${category.freeTools} Free</span>
                        <span class="paid-tools" title="Paid Tools">${category.paidTools} Paid</span>
                        <span class="freemium-tools" title="Freemium Tools">${category.freemiumTools} Freemium</span>
                    </div>
                </div>
            </div>
            <div class="category-card-body">
                <p class="category-description">
                    <span class="category-description-title">${description.title}</span>
                    ${description.text}
                </p>
                <div class="category-features">
                    <ul class="category-feature-list">
                        ${features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="category-card-footer">
                <a href="tools.html?category=${encodeURIComponent(category.name)}" class="btn-explore-category" data-category="${category.name}">
                    <i class="fas fa-rocket me-2"></i>Explore ${category.toolCount}+ Tools
                </a>
            </div>
        `;
        
        col.appendChild(card);
        return col;
    }
    
    // ====================================================================
    // HELPER FUNCTIONS for Image-Style Layout
    // ====================================================================
    
    // Splits a category name into two parts for the two-line title
    function splitCategoryName(categoryName) {
        // Try to split by '&' or 'and' for a natural break
        if (categoryName.includes(' & ')) {
            const parts = categoryName.split(' & ');
            return [parts[0] + ' &', parts[1]];
        } else if (categoryName.includes(' and ')) {
            const parts = categoryName.split(' and ');
            return [parts[0] + ' and', parts[1]];
        } else if (categoryName.includes(' AI')) {
            const main = categoryName.replace(' AI', '');
            return [main, 'AI'];
        } else if (categoryName.length > 20) {
            // Split by last space if the name is long
            const lastSpace = categoryName.lastIndexOf(' ');
            if (lastSpace > 0) {
                return [
                    categoryName.substring(0, lastSpace),
                    categoryName.substring(lastSpace + 1)
                ];
            }
        }
        
        // Default: first word on first line, rest on second
        const words = categoryName.split(' ');
        if (words.length > 1) {
            return [words[0], words.slice(1).join(' ')];
        }
        
        // If it's a single word, put it on the first line
        return [categoryName, ''];
    }
    
    // Returns a descriptive title and text for a category
    function getCategoryDescription(categoryName) {
        // Map for all categories with descriptions
        const descriptionMap = {
            'Image Editing & Generation AI': {
                title: 'AI-powered tools that enhance, retouch, and transform images with precision.',
                text: 'Create stunning visuals, edit photos automatically, and generate entirely new images with advanced generative AI models.'
            },
            'Video Creation': {
                title: 'AI tools for creating and editing videos automatically.',
                text: 'Generate videos from text, automate editing, add effects, and create professional content with AI assistance.'
            },
            'Audio Tools': {
                title: 'AI-powered audio processing and generation tools.',
                text: 'Create music, modify voices, remove background noise, and generate audio content with advanced AI algorithms.'
            },
            'Security': {
                title: 'AI-driven security and threat detection systems.',
                text: 'Protect your data, detect threats in real-time, and automate security responses with intelligent AI solutions.'
            },
            'Social Media': {
                title: 'AI-powered social media management and content creation.',
                text: 'Automate posting, generate content, analyze performance, and grow your social presence with AI assistance.'
            },
            'Finance': {
                title: 'AI tools for financial analysis and personal finance.',
                text: 'Analyze markets, automate trading, manage investments, and optimize your finances with intelligent AI algorithms.'
            },
            'E-commerce': {
                title: 'AI solutions for e-commerce optimization.',
                text: 'Enhance product recommendations, automate customer service, optimize pricing, and boost sales with AI.'
            },
            'Gaming AI': {
                title: 'AI for game development and interactive experiences.',
                text: 'Create intelligent NPCs, generate game content, enhance graphics, and build immersive gaming worlds with AI.'
            },
            'Content Creation': {
                title: 'AI tools for writing and content generation.',
                text: 'Generate articles, blogs, scripts, and marketing content with advanced natural language processing AI.'
            },
            'Cyber Security AI': {
                title: 'Advanced AI for cybersecurity protection.',
                text: 'Detect threats, prevent attacks, analyze vulnerabilities, and secure networks with cutting-edge AI security.'
            },
            'Coding & Development': {
                title: 'AI-powered coding assistants and development tools.',
                text: 'Write code faster, debug efficiently, generate documentation, and automate testing with intelligent AI coding tools.'
            },
            'AI Agents': {
                title: 'Autonomous AI agents and intelligent assistants.',
                text: 'Deploy AI agents that can perform tasks, make decisions, and automate workflows independently.'
            },
            'Chat & Assistants': {
                title: 'AI chatbots and virtual assistant platforms.',
                text: 'Create intelligent chatbots, virtual assistants, and conversational AI for customer support and engagement.'
            },
            'Business & Productivity': {
                title: 'AI for business automation and productivity enhancement.',
                text: 'Streamline workflows, automate tasks, optimize processes, and boost team productivity with AI solutions.'
            },
            'Ad & Creative': {
                title: 'AI for advertising and creative campaign optimization.',
                text: 'Generate ad copy, optimize campaigns, create visuals, and analyze performance with AI-powered marketing tools.'
            },
            'Project Management AI': {
                title: 'AI tools for project planning and team collaboration.',
                text: 'Plan projects, allocate resources, track progress, and enhance team collaboration with intelligent AI management.'
            },
            'Avatar & Characters': {
                title: 'AI for avatar creation and character design.',
                text: 'Generate realistic avatars, create 3D characters, animate faces, and build virtual personas with AI technology.'
            },
            'Healthcare AI': {
                title: 'AI applications in healthcare and medical diagnosis.',
                text: 'Analyze medical images, assist in diagnosis, predict outcomes, and personalize treatment with healthcare AI.'
            },
            'Education AI': {
                title: 'AI tools for personalized learning and education.',
                text: 'Create personalized learning paths, automate grading, generate educational content, and enhance teaching with AI.'
            },
            'Marketing AI': {
                title: 'AI for marketing automation and analytics.',
                text: 'Automate marketing campaigns, analyze customer data, personalize experiences, and optimize ROI with marketing AI.'
            },
            // Default for any category not in the list
            'Default': {
                title: `Discover the best ${categoryName} tools.`,
                text: 'Browse our curated collection of AI-powered solutions designed to streamline your workflow and boost productivity.'
            }
        };
        
        return descriptionMap[categoryName] || descriptionMap['Default'];
    }
    
    // Returns an array of feature bullet points for a category
    function getCategoryFeatures(categoryName) {
        // Map for all categories with feature lists
        const featureMap = {
            'Image Editing & Generation AI': [
                'Automated background removal',
                'Style transfer and filters',
                'Text-to-image generation',
                'AI-powered upscaling',
                'Face restoration and enhancement',
                'Object removal and inpainting'
            ],
            'Video Creation': [
                'Text-to-video synthesis',
                'Automated editing and cuts',
                'AI voiceovers and subtitles',
                'Special effects generation',
                'Motion tracking',
                'Color grading automation'
            ],
            'Audio Tools': [
                'Music composition AI',
                'Voice cloning and synthesis',
                'Noise cancellation',
                'Audio mastering and enhancement',
                'Podcast editing automation',
                'Sound effect generation'
            ],
            'Security': [
                'Threat detection and prevention',
                'Anomaly detection algorithms',
                'Behavioral analysis',
                'Automated security audits',
                'Real-time monitoring',
                'Incident response automation'
            ],
            'Social Media': [
                'Content scheduling automation',
                'Hashtag optimization',
                'Audience analysis',
                'Trend prediction',
                'Engagement analytics',
                'Influencer identification'
            ],
            'Finance': [
                'Market trend analysis',
                'Automated trading algorithms',
                'Risk assessment models',
                'Fraud detection systems',
                'Investment recommendations',
                'Budget optimization'
            ],
            'E-commerce': [
                'Personalized recommendations',
                'Price optimization algorithms',
                'Inventory management',
                'Customer sentiment analysis',
                'Chatbot customer service',
                'Visual search technology'
            ],
            'Gaming AI': [
                'Procedural content generation',
                'Intelligent NPC behavior',
                'Dynamic difficulty adjustment',
                'Player behavior prediction',
                'Game testing automation',
                'Real-time rendering optimization'
            ],
            'Content Creation': [
                'SEO-optimized writing',
                'Content idea generation',
                'Grammar and style checking',
                'Plagiarism detection',
                'Content summarization',
                'Multilingual translation'
            ],
            'Cyber Security AI': [
                'Advanced threat intelligence',
                'Zero-day vulnerability detection',
                'Network traffic analysis',
                'Endpoint protection',
                'Cloud security monitoring',
                'Compliance automation'
            ],
            'Coding & Development': [
                'Code completion and suggestions',
                'Bug detection and fixing',
                'Code refactoring automation',
                'Documentation generation',
                'Test case generation',
                'Performance optimization'
            ],
            'AI Agents': [
                'Task automation workflows',
                'Decision-making algorithms',
                'Multi-agent coordination',
                'Learning and adaptation',
                'Natural language understanding',
                'Context-aware actions'
            ],
            'Chat & Assistants': [
                '24/7 customer support',
                'Multi-language capability',
                'Contextual understanding',
                'Sentiment analysis',
                'Conversation analytics',
                'Integration with business systems'
            ],
            'Business & Productivity': [
                'Workflow automation',
                'Meeting summarization',
                'Email management',
                'Document processing',
                'Data analysis and reporting',
                'Team collaboration enhancement'
            ],
            'Ad & Creative': [
                'Ad copy generation',
                'Creative asset creation',
                'Campaign optimization',
                'Audience segmentation',
                'Performance prediction',
                'ROI analysis and reporting'
            ],
            'Project Management AI': [
                'Task prioritization',
                'Resource allocation optimization',
                'Timeline prediction',
                'Risk assessment',
                'Team workload balancing',
                'Progress tracking automation'
            ],
            'Avatar & Characters': [
                'Realistic facial animation',
                'Voice synchronization',
                'Emotion recognition',
                'Custom character creation',
                'Motion capture enhancement',
                '3D model generation'
            ],
            'Healthcare AI': [
                'Medical image analysis',
                'Patient risk prediction',
                'Drug discovery assistance',
                'Treatment recommendation',
                'Clinical trial optimization',
                'Remote patient monitoring'
            ],
            'Education AI': [
                'Personalized learning paths',
                'Automated assessment',
                'Adaptive difficulty',
                'Learning gap identification',
                'Interactive content creation',
                'Student progress tracking'
            ],
            'Marketing AI': [
                'Customer segmentation',
                'Campaign personalization',
                'Lead scoring automation',
                'Customer journey mapping',
                'Marketing attribution',
                'Predictive analytics'
            ],
            // Default for any category not in the list
            'Default': [
                'Curated quality tools',
                'Regular updates',
                'User reviews & ratings',
                'Free and paid options',
                'Detailed comparisons',
                'Easy filtering and search'
            ]
        };
        
        // Return 4 features maximum to fit the card design
        const features = featureMap[categoryName] || featureMap['Default'];
        return features.slice(0, 4);
    }
    
    // Update pagination controls
    function updateCategoryPagination(totalItems) {
        if (!categoryPagination) return;
        
        categoryPagination.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        // Previous button
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevLi.innerHTML = `
            <a class="page-link" href="#" aria-label="Previous" data-page="${currentPage - 1}">
                <span aria-hidden="true">&laquo;</span>
            </a>
        `;
        categoryPagination.appendChild(prevLi);
        
        // Page numbers
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageLi = document.createElement('li');
            pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageLi.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            categoryPagination.appendChild(pageLi);
        }
        
        // Next button
        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextLi.innerHTML = `
            <a class="page-link" href="#" aria-label="Next" data-page="${currentPage + 1}">
                <span aria-hidden="true">&raquo;</span>
            </a>
        `;
        categoryPagination.appendChild(nextLi);
        
        // Add click event listeners
        categoryPagination.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = parseInt(this.getAttribute('data-page'));
                if (page && page !== currentPage) {
                    currentPage = page;
                    renderCategories();
                    // Scroll to categories section
                    const categoriesSection = document.getElementById('categories-section');
                    if (categoriesSection) {
                        window.scrollTo({ 
                            top: categoriesSection.offsetTop - 100, 
                            behavior: 'smooth' 
                        });
                    }
                }
            });
        });
    }
    
    // Initialize animated background
    function initAnimatedBackground() {
        const bgAnimation = document.getElementById('bg-animation');
        if (!bgAnimation) return;
        
        // Clear existing animation
        bgAnimation.innerHTML = '';
        
        // Create stars
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            bgAnimation.appendChild(star);
        }
        
        // Create shooting stars
        for (let i = 0; i < 3; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.left = `${Math.random() * 100}%`;
            shootingStar.style.top = `${Math.random() * 100}%`;
            shootingStar.style.animationDelay = `${Math.random() * 8}s`;
            bgAnimation.appendChild(shootingStar);
        }
    }
    
    // Event Listeners
    if (categorySearchInput) {
        categorySearchInput.addEventListener('input', function() {
            currentSearchTerm = this.value.trim();
            currentPage = 1;
            renderCategories();
        });
    }
    
    if (clearCategorySearch) {
        clearCategorySearch.addEventListener('click', function() {
            categorySearchInput.value = '';
            currentSearchTerm = '';
            currentPage = 1;
            renderCategories();
        });
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            currentSort = this.value;
            currentPage = 1;
            renderCategories();
        });
    }
    
    // URL parameter handling for direct category filtering
    function handleUrlParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam) {
            // If category parameter exists, redirect to tools page with filter
            window.location.href = `tools.html?category=${encodeURIComponent(categoryParam)}`;
        }
    }
    
    // Refresh categories data periodically (every 5 minutes)
    function setupAutoRefresh() {
        // Refresh every 5 minutes (300000 milliseconds)
        setInterval(() => {
            console.log('Auto-refreshing categories data...');
            extractCategoriesFromTools();
        }, 300000);
    }
    
    // Initialize
    extractCategoriesFromTools();
    handleUrlParameters();
    setupAutoRefresh();
}