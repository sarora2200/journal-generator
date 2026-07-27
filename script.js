// ============================================
// DATA: Ultimate Journal Content
// ============================================

const DATA = {
    // 15 Cover Designs
    covers: [
        { name: 'Cute Flower', icon: '🌸', color: '#ffb7c5', gradient: 'linear-gradient(135deg, #ffb7c5, #ff8a9b)' },
        { name: 'Plant Lover', icon: '🌿', color: '#8fbc8f', gradient: 'linear-gradient(135deg, #8fbc8f, #5a9e6a)' },
        { name: 'Polaroid', icon: '📷', color: '#d4c5a9', gradient: 'linear-gradient(135deg, #d4c5a9, #b8a68b)' },
        { name: 'Elegant Floral', icon: '🌹', color: '#d4a0a0', gradient: 'linear-gradient(135deg, #d4a0a0, #c47a7a)' },
        { name: 'Groovy Disco', icon: '🪩', color: '#b19cd9', gradient: 'linear-gradient(135deg, #b19cd9, #8a70b8)' },
        { name: 'Minimalist', icon: '◼️', color: '#333', gradient: 'linear-gradient(135deg, #555, #222)' },
        { name: 'Watercolor', icon: '🎨', color: '#a8d8ea', gradient: 'linear-gradient(135deg, #a8d8ea, #6bb4cc)' },
        { name: 'Bohemian', icon: '🌺', color: '#e8a87c', gradient: 'linear-gradient(135deg, #e8a87c, #d4845a)' },
        { name: 'Vintage', icon: '📜', color: '#d4a574', gradient: 'linear-gradient(135deg, #d4a574, #b8834a)' },
        { name: 'Modern', icon: '✦', color: '#2c3e50', gradient: 'linear-gradient(135deg, #34495e, #2c3e50)' },
        { name: 'Galaxy', icon: '🌌', color: '#5b2c6f', gradient: 'linear-gradient(135deg, #5b2c6f, #2c1a3b)' },
        { name: 'Tropical', icon: '🏝️', color: '#f39c12', gradient: 'linear-gradient(135deg, #f1c40f, #e67e22)' },
        { name: 'Pastel Dream', icon: '🌈', color: '#f5b7b1', gradient: 'linear-gradient(135deg, #f5b7b1, #d4e6f1)' },
        { name: 'Dark Academia', icon: '📚', color: '#6c3483', gradient: 'linear-gradient(135deg, #6c3483, #4a235a)' },
        { name: 'Cozy Vibes', icon: '☕', color: '#d4a574', gradient: 'linear-gradient(135deg, #d4a574, #a67c52)' }
    ],

    // 5 Themes per month (60 total)
    monthlyThemes: {
        January: ['Arctic Animal', 'Winter Sports', 'New Years Party', 'Snowflakes', 'Cozy Cabin', 'Ice Skating'],
        February: ['Roses', 'Love Letters', 'Teddy Bears', 'Chocolate', 'Heartfelt', 'Cupid'],
        March: ['Frogs', 'St Patricks Day', 'Spring Equinox', 'Rainbows', 'Kites', 'Cherry Blossoms'],
        April: ['April Showers', 'Bunnies', 'Tulips', 'Butterflies', 'Rainboots', 'Earth Day'],
        May: ['Garden', 'Ladybug', 'Cherry Blossoms', 'Picnic', 'Flowers', 'Mother\'s Day'],
        June: ['Art', 'Retro', 'Picnic', 'Sunshine', 'Beach', 'Pride'],
        July: ['Travel', 'Pool Floaties', 'Fireworks', 'Ice Cream', 'Camping', 'Summer'],
        August: ['Sea Creatures', 'Camping', 'Sailing', 'Sunflowers', 'Beach', 'Sunset'],
        September: ['Apple Picking', 'Football', 'Farm', 'Leaves', 'School', 'Harvest'],
        October: ['Cute Halloween', 'Spooky Halloween', 'Autumn', 'Pumpkins', 'Witch', 'Haunted'],
        November: ['Forest', 'Books', 'Sweater Weather', 'Pie', 'Thankful', 'Vintage'],
        December: ['North Pole', 'Gifts & Bows', 'Cozy Winter', 'Snowmen', 'Candy Canes', 'Holiday']
    },

    // 18 Mood Options
    moodOptions: [
        { label: 'Energetic', emoji: '⚡', color: '#f39c12' },
        { label: 'Happy', emoji: '😊', color: '#2ecc71' },
        { label: 'Ok', emoji: '😐', color: '#3498db' },
        { label: 'Tired', emoji: '😴', color: '#9b59b6' },
        { label: 'Sad', emoji: '😢', color: '#2980b9' },
        { label: 'Angry', emoji: '😡', color: '#e74c3c' },
        { label: 'Calm', emoji: '😌', color: '#1abc9c' },
        { label: 'Excited', emoji: '🤩', color: '#e67e22' },
        { label: 'Anxious', emoji: '😰', color: '#e74c3c' },
        { label: 'Grateful', emoji: '🙏', color: '#2ecc71' },
        { label: 'Loved', emoji: '❤️', color: '#e74c3c' },
        { label: 'Peaceful', emoji: '🕊️', color: '#3498db' },
        { label: 'Motivated', emoji: '💪', color: '#e67e22' },
        { label: 'Inspired', emoji: '✨', color: '#f39c12' },
        { label: 'Melancholy', emoji: '🌧️', color: '#7f8c8d' },
        { label: 'Playful', emoji: '🎭', color: '#e74c3c' },
        { label: 'Romantic', emoji: '💕', color: '#e74c3c' },
        { label: 'Adventurous', emoji: '🧭', color: '#27ae60' }
    ],

    // 60+ Mood Tracker designs (doodles)
    moodDoodles: [
        { name: 'Apple', emoji: '🍎' },
        { name: 'Bookshelf', emoji: '📚' },
        { name: 'Box of Chocolates', emoji: '🍫' },
        { name: 'Camping', emoji: '⛺' },
        { name: 'Candy Cane', emoji: '🍭' },
        { name: 'Cherry Blossom', emoji: '🌸' },
        { name: 'Cow', emoji: '🐮' },
        { name: 'Disco Ball', emoji: '🪩' },
        { name: 'Easter Basket', emoji: '🧺' },
        { name: 'Fall Sweater', emoji: '🧥' },
        { name: 'Fireworks', emoji: '🎆' },
        { name: 'Football', emoji: '🏈' },
        { name: 'Frog', emoji: '🐸' },
        { name: 'Ghost Balloon', emoji: '🎈' },
        { name: 'Gingerbread House', emoji: '🏠' },
        { name: 'Gnome Hat', emoji: '🧙' },
        { name: 'Igloo', emoji: '❄️' },
        { name: 'Ladybug', emoji: '🐞' },
        { name: 'Lava Lamp', emoji: '🪔' },
        { name: 'Lighthouse', emoji: '🗼' },
        { name: 'Love Letter', emoji: '💌' },
        { name: 'Paint Palette', emoji: '🎨' },
        { name: 'Picnic', emoji: '🧺' },
        { name: 'Pinecone', emoji: '🌲' },
        { name: 'Pool Floaties', emoji: '🛟' },
        { name: 'Pumpkin', emoji: '🎃' },
        { name: 'Rose', emoji: '🌹' },
        { name: 'Scarf', emoji: '🧣' },
        { name: 'Seahorse', emoji: '🐴' },
        { name: 'Snowboard', emoji: '🏂' },
        { name: 'Spider Web', emoji: '🕸️' },
        { name: 'Suitcase', emoji: '🧳' },
        { name: 'Tulip', emoji: '🌷' },
        { name: 'Umbrella', emoji: '☂️' },
        { name: 'Watering Can', emoji: '💧' },
        { name: 'Sunflower', emoji: '🌻' },
        { name: 'Rainbow', emoji: '🌈' },
        { name: 'Star', emoji: '⭐' },
        { name: 'Heart', emoji: '💖' },
        { name: 'Moon', emoji: '🌙' },
        { name: 'Sun', emoji: '☀️' },
        { name: 'Cloud', emoji: '☁️' },
        { name: 'Rain', emoji: '🌧️' },
        { name: 'Snow', emoji: '❄️' },
        { name: 'Wind', emoji: '💨' },
        { name: 'Cactus', emoji: '🌵' },
        { name: 'Palm Tree', emoji: '🌴' },
        { name: 'Mushroom', emoji: '🍄' },
        { name: 'Leaf', emoji: '🍃' },
        { name: 'Flower', emoji: '🌺' },
        { name: 'Butterfly', emoji: '🦋' },
        { name: 'Dragonfly', emoji: '🪰' },
        { name: 'Bee', emoji: '🐝' },
        { name: 'Snail', emoji: '🐌' },
        { name: 'Turtle', emoji: '🐢' },
        { name: 'Starfish', emoji: '⭐' },
        { name: 'Shell', emoji: '🐚' },
        { name: 'Feather', emoji: '🪶' },
        { name: 'Key', emoji: '🔑' },
        { name: 'Compass', emoji: '🧭' }
    ],

    // 60+ Doodle pages
    doodles: [
        'Apple', 'Barn', 'Bat', 'Bear', 'Book', 'Bunny',
        'Candy Cane', 'Canvas', 'Cherry Blossom', 'Cloud', 'Deer',
        'Firework', 'Football', 'Frog', 'Gift Tag', 'Gnome Hat',
        'Hot Chocolate Mug', 'Ladybug', 'Latte Cup', 'Marshmallow',
        'Party Hat', 'Penguin', 'Picnic Basket', 'Pie', 'Pool',
        'Pot of Gold', 'Record', 'Sailboat', 'Snowboard', 'Stamp',
        'Suitcase', 'Tulip', 'Vase', 'Watering Can', 'Whale', 
        'Witch Hat', 'Sunflower', 'Rainbow', 'Star', 'Heart',
        'Moon', 'Sun', 'Cloud', 'Rain', 'Snow', 'Wind',
        'Cactus', 'Palm Tree', 'Mushroom', 'Leaf', 'Flower',
        'Butterfly', 'Dragonfly', 'Ladybug', 'Bee', 'Snail',
        'Turtle', 'Starfish', 'Shell', 'Feather', 'Key',
        'Compass', 'Mountain', 'River', 'Forest', 'Desert'
    ],

    // 40+ Monthly Pages
    monthlyPages: [
        'Adulting', 'Habit Tracker', 'Highlight of the Day',
        'Gratitude Journal', 'Tomorrow\'s Main Goal', 'Sleep Tracker',
        'Health Tracker', 'Spending Tracker', 'Exercise Tracker',
        'Water Tracker', 'Movies Watched', 'Shows Watched',
        'Books Read', 'Playlist', 'End of Month Review', 
        'Marker Tracker', 'Daily Affirmations', 'Self-Care Checklist',
        'Meal Planner', 'Grocery List', 'To-Do List',
        'Weekly Goals', 'Monthly Reflections', 'Dreams & Aspirations',
        'Creative Ideas', 'Notes & Doodles', 'Important Dates',
        'Contacts', 'Passwords', 'Birthdays', 'Anniversaries',
        'Bucket List', 'Travel Plans', 'Projects', 'Learning Goals',
        'Reading Log', 'Movie Log', 'Music Playlist', 'Podcast Tracker',
        'Skills to Learn', 'Places to Visit', 'Books to Read'
    ],

    // Seasonal bucket lists
    seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
    christmasPages: ['Christmas Bucket List', 'Christmas Countdown', 'Gift List', 'Holiday Recipes', 'Christmas Movies'],

    // --- NEW: Journaling Prompts ---
    journalPrompts: [
        'What made you smile today?',
        'What are you grateful for right now?',
        'What is one thing you can do to make today better?',
        'What is a goal you have for this week?',
        'Describe a happy memory from your childhood.',
        'What does self-care mean to you?',
        'Write a letter to your future self.',
        'What is something you are proud of?',
        'What is a challenge you overcame recently?',
        'Describe your perfect day.',
        'What are 3 things you love about yourself?',
        'What is a book that changed your life?',
        'Who inspires you and why?',
        'What does success mean to you?',
        'Write about a place you want to visit.',
        'What is a skill you want to learn?',
        'Describe a moment of pure joy.',
        'What are you afraid of and why?',
        'What does happiness look like to you?',
        'Write about a person who has helped you.',
        'What is your favorite season and why?',
        'Describe your dream job.',
        'What is a quote that motivates you?',
        'What is something you want to achieve in the next year?',
        'What does peace mean to you?',
        'Write about a lesson you learned from failure.',
        'What is your favorite way to relax?',
        'Describe a beautiful moment in nature.',
        'What are you looking forward to?',
        'Write about a tradition you love.',
        'What does friendship mean to you?',
        'Describe a time you felt brave.',
        'What is a small thing that makes you happy?',
        'Write about a dream you have.',
        'What is something you want to forgive yourself for?',
        'Describe your ideal weekend.',
        'What is a goal you have for your health?',
        'Write about a time you helped someone.',
        'What are you curious about?',
        'Describe a place that feels like home.',
        'What is something you want to remember?',
        'Write about a moment of kindness.',
        'What does love mean to you?',
        'Describe a challenge you want to overcome.',
        'What is a habit you want to build?'
    ],

    // --- NEW: Wellness Activities ---
    wellnessActivities: [
        'Meditate for 5 minutes',
        'Take a walk in nature',
        'Practice deep breathing',
        'Write in your journal',
        'Stretch for 10 minutes',
        'Drink a glass of water',
        'Practice gratitude',
        'Listen to calming music',
        'Read a book',
        'Take a bath',
        'Practice yoga',
        'Eat a healthy meal',
        'Get 8 hours of sleep',
        'Disconnect from technology',
        'Spend time with loved ones',
        'Practice positive affirmations',
        'Go for a run',
        'Do something creative',
        'Cook a healthy meal',
        'Practice mindfulness',
        'Get some sunlight',
        'Do a digital detox',
        'Practice self-compassion',
        'Take a power nap',
        'Do a puzzle',
        'Garden',
        'Dance to your favorite song',
        'Call a friend',
        'Practice a hobby',
        'Declutter a space'
    ],

    // --- NEW: Budget Categories ---
    budgetCategories: [
        'Housing', 'Utilities', 'Groceries', 'Transportation',
        'Insurance', 'Healthcare', 'Entertainment', 'Dining Out',
        'Shopping', 'Travel', 'Education', 'Investments',
        'Savings', 'Emergency Fund', 'Charity', 'Miscellaneous'
    ],

    // --- NEW: Travel Destinations ---
    travelDestinations: [
        'Paris, France', 'Bali, Indonesia', 'Tokyo, Japan', 'New York, USA',
        'Rome, Italy', 'Sydney, Australia', 'Cape Town, South Africa', 'Dubai, UAE',
        'Barcelona, Spain', 'Istanbul, Turkey', 'London, UK', 'Rio de Janeiro, Brazil',
        'Bangkok, Thailand', 'Santorini, Greece', 'Machu Picchu, Peru', 'Maldives',
        'Vancouver, Canada', 'Amsterdam, Netherlands', 'Prague, Czech Republic', 'Seoul, South Korea',
        'Siem Reap, Cambodia', 'Queenstown, New Zealand', 'Cusco, Peru', 'Hawaii, USA',
        'Iceland', 'Taj Mahal, India', 'Venice, Italy', 'Kyoto, Japan',
        'Alaska, USA', 'Reykjavik, Iceland', 'Toronto, Canada', 'Mexico City, Mexico'
    ],

    // 7 Color themes
    colorThemes: {
        pastel: { primary: '#f5b7b1', secondary: '#f8c9b7', accent: '#b5d3d4', text: '#4a3728', background: '#fef9f4' },
        vibrant: { primary: '#e74c3c', secondary: '#f39c12', accent: '#2ecc71', text: '#2c3e50', background: '#fdfcfb' },
        mono: { primary: '#555', secondary: '#888', accent: '#aaa', text: '#222', background: '#f5f5f5' },
        earth: { primary: '#8d6e63', secondary: '#a1887f', accent: '#6d8a6d', text: '#3e2723', background: '#f4f0eb' },
        boho: { primary: '#e8a87c', secondary: '#d4a5a5', accent: '#85b79d', text: '#4a3728', background: '#fcf6f0' },
        sunset: { primary: '#e67e22', secondary: '#d35400', accent: '#f1c40f', text: '#2c3e50', background: '#fef9f0' },
        ocean: { primary: '#3498db', secondary: '#2980b9', accent: '#1abc9c', text: '#1a2a3a', background: '#f0f7fb' }
    },

    // Font options
    fonts: ['Playfair Display', 'Quicksand', 'Dancing Script', 'Montserrat', 'Caveat', 'Lora', 'Nunito', 'Raleway']
};

// ============================================
// STATE
// ============================================

let state = {
    size: 'a4',
    background: 'dots',
    theme: 'pastel',
    pageCount: 200,
    customMoods: [],
    includeVisionBoard: true,
    includeGoalSetting: true,
    includeYearlyReview: true,
    includeWeeklyPlanner: true,
    includeJournalPrompts: true,
    includeWellness: true,
    includeBudget: true,
    includePasswordTracker: true,
    includeTravelBucket: true,
    journal: null
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getMonthDays(month, year = 2026) {
    return new Date(year, month, 0).getDate();
}

function getMonthStartDay(month, year = 2026) {
    return new Date(year, month - 1, 1).getDay();
}

function getMoodColors() {
    const defaultMoods = DATA.moodOptions.slice(0, 6);
    return state.customMoods.length > 0 ? state.customMoods.slice(0, 6) : defaultMoods;
}

// ============================================
// JOURNAL GENERATOR
// ============================================

function generateJournal() {
    const colors = DATA.colorThemes[state.theme];
    const font = randomPick(DATA.fonts);
    const cover = randomPick(DATA.covers);
    const months = Object.keys(DATA.monthlyThemes);
    const shuffledDoodles = shuffleArray(DATA.doodles);
    const shuffledMoodDoodles = shuffleArray(DATA.moodDoodles);
    const moods = getMoodColors();
    const shuffledPrompts = shuffleArray(DATA.journalPrompts);
    const shuffledWellness = shuffleArray(DATA.wellnessActivities);
    const shuffledDestinations = shuffleArray(DATA.travelDestinations);
    
    let pages = [];
    let pageCount = 0;
    const targetPages = state.pageCount;

    // --- COVER PAGE ---
    pages.push({ type: 'cover', cover, colors, font, year: 2026 });
    pageCount++;

    // --- VISION BOARD ---
    if (state.includeVisionBoard) {
        pages.push({ type: 'vision-board', colors, font, year: 2026 });
        pageCount++;
    }

    // --- GOAL SETTING ---
    if (state.includeGoalSetting) {
        pages.push({ type: 'goals', colors, font, year: 2026 });
        pageCount++;
    }

    // --- YEARLY REVIEW ---
    if (state.includeYearlyReview) {
        pages.push({ type: 'yearly-review', colors, font, year: 2026 });
        pageCount++;
    }

    // --- TRAVEL BUCKET LIST ---
    if (state.includeTravelBucket) {
        pages.push({ type: 'travel-bucket', destinations: shuffledDestinations.slice(0, 12), colors, font });
        pageCount++;
    }

    // --- BUDGET PLANNER ---
    if (state.includeBudget) {
        pages.push({ type: 'budget', categories: DATA.budgetCategories.slice(0, 12), colors, font, year: 2026 });
        pageCount++;
    }

    // --- PASSWORD TRACKER ---
    if (state.includePasswordTracker) {
        pages.push({ type: 'password-tracker', colors, font });
        pageCount++;
    }

    // --- WELLNESS TRACKER ---
    if (state.includeWellness) {
        pages.push({ type: 'wellness', activities: shuffledWellness.slice(0, 15), colors, font });
        pageCount++;
    }

    // --- JOURNAL PROMPTS ---
    if (state.includeJournalPrompts) {
        const prompts = shuffledPrompts.slice(0, 12);
        pages.push({ type: 'journal-prompts', prompts, colors, font });
        pageCount++;
    }

    // --- WEEKLY PLANNERS ---
    if (state.includeWeeklyPlanner) {
        for (let week = 1; week <= 8; week++) {
            pages.push({ type: 'weekly-planner', week, month: months[week % 12], colors, font });
            pageCount++;
            if (pageCount >= targetPages) break;
        }
    }

    // --- MONTHLY PAGES ---
    for (let monthIndex = 0; monthIndex < months.length && pageCount < targetPages; monthIndex++) {
        const month = months[monthIndex];
        const themeOptions = DATA.monthlyThemes[month];
        const chosenTheme = randomPick(themeOptions);
        const moodDoodle = shuffledMoodDoodles[monthIndex % shuffledMoodDoodles.length];
        const daysInMonth = getMonthDays(monthIndex + 1);
        const startDay = getMonthStartDay(monthIndex + 1);

        // Calendar
        pages.push({ type: 'month', month, theme: chosenTheme, moodDoodle, daysInMonth, startDay, colors, font });
        pageCount++;
        if (pageCount >= targetPages) break;

        // Mood Tracker
        pages.push({ type: 'mood-tracker', month, moodDoodle, moods, colors, font });
        pageCount++;
        if (pageCount >= targetPages) break;

        // Trackers
        const monthlyTrackers = shuffleArray(DATA.monthlyPages).slice(0, 8);
        pages.push({ type: 'trackers', month, trackers: monthlyTrackers, colors, font });
        pageCount++;
        if (pageCount >= targetPages) break;

        // Doodles
        const monthDoodles = shuffleArray(DATA.doodles).slice(0, 8);
        pages.push({ type: 'month-doodles', month, doodles: monthDoodles, colors, font });
        pageCount++;
        if (pageCount >= targetPages) break;

        // Reflection
        pages.push({ type: 'reflection', month, colors, font });
        pageCount++;
        if (pageCount >= targetPages) break;
    }

    // --- EXTRA PAGES ---
    const pageTypes = ['doodles', 'trackers', 'seasonal', 'mood-tracker', 'goals', 'reflection', 'journal-prompts', 'wellness'];
    while (pageCount < targetPages) {
        const extraType = randomPick(pageTypes);
        
        if (extraType === 'doodles') {
            const doodleSet = shuffleArray(DATA.doodles).slice(0, 10);
            pages.push({ type: 'doodles', doodles: doodleSet, colors, font });
            pageCount++;
        } 
        else if (extraType === 'trackers') {
            const trackerSet = shuffleArray(DATA.monthlyPages).slice(0, 10);
            pages.push({ type: 'trackers', month: 'Extra', trackers: trackerSet, colors, font });
            pageCount++;
        }
        else if (extraType === 'seasonal') {
            pages.push({ type: 'seasonal', seasons: DATA.seasons, christmas: DATA.christmasPages, colors, font });
            pageCount++;
        }
        else if (extraType === 'mood-tracker') {
            const moodDoodle = randomPick(DATA.moodDoodles);
            pages.push({ type: 'mood-tracker', month: 'Extra', moodDoodle, moods, colors, font });
            pageCount++;
        }
        else if (extraType === 'goals') {
            pages.push({ type: 'goals', colors, font, year: 2026 });
            pageCount++;
        }
        else if (extraType === 'reflection') {
            pages.push({ type: 'reflection', month: 'Reflection', colors, font });
            pageCount++;
        }
        else if (extraType === 'journal-prompts') {
            const prompts = shuffleArray(DATA.journalPrompts).slice(0, 10);
            pages.push({ type: 'journal-prompts', prompts, colors, font });
            pageCount++;
        }
        else if (extraType === 'wellness') {
            const activities = shuffleArray(DATA.wellnessActivities).slice(0, 12);
            pages.push({ type: 'wellness', activities, colors, font });
            pageCount++;
        }
    }

    state.journal = pages;
    renderJournal(pages);
}

// ============================================
// RENDERER - New Premium Page Types
// ============================================

function renderJournal(pages) {
    const container = document.getElementById('journal-preview');
    const dotClass = state.background === 'dots' ? 'dotted' : 'plain';

    let html = `<div class="journal-container ${dotClass}">`;

    pages.forEach((page, index) => {
        html += renderPage(page, index);
    });

    html += '</div>';
    container.innerHTML = html;

    const themeColors = DATA.colorThemes[state.theme];
    container.style.setProperty('--primary-color', themeColors.primary);
    container.style.setProperty('--secondary-color', themeColors.secondary);
    container.style.setProperty('--accent-color', themeColors.accent);
    container.style.setProperty('--text-color', themeColors.text);
    container.style.setProperty('--bg-color', themeColors.background);
}

function renderPage(page, index) {
    switch (page.type) {
        case 'cover': return renderCover(page);
        case 'vision-board': return renderVisionBoard(page);
        case 'goals': return renderGoals(page);
        case 'yearly-review': return renderYearlyReview(page);
        case 'travel-bucket': return renderTravelBucket(page);
        case 'budget': return renderBudget(page);
        case 'password-tracker': return renderPasswordTracker(page);
        case 'wellness': return renderWellness(page);
        case 'journal-prompts': return renderJournalPrompts(page);
        case 'weekly-planner': return renderWeeklyPlanner(page);
        case 'month': return renderMonth(page);
        case 'mood-tracker': return renderMoodTracker(page);
        case 'trackers': return renderTrackers(page);
        case 'doodles': return renderDoodles(page);
        case 'month-doodles': return renderMonthDoodles(page);
        case 'seasonal': return renderSeasonal(page);
        case 'reflection': return renderReflection(page);
        default: return '';
    }
}

// --- COVER ---
function renderCover(page) {
    const { cover, colors, font, year } = page;
    return `
        <div class="journal-page cover" style="font-family: '${font}', serif; color: ${colors.text}; border: 3px solid ${colors.primary}; background: ${cover.gradient || colors.background};">
            <div style="font-size: 5rem; margin-bottom: 15px; text-shadow: 0 4px 20px rgba(0,0,0,0.1);">${cover.icon}</div>
            <h1 style="font-size: 3rem; letter-spacing: 4px; color: ${colors.primary}; text-shadow: 0 2px 4px rgba(0,0,0,0.05);">YOUR 2026 JOURNAL</h1>
            <div class="year" style="color: ${colors.accent}; font-size: 6rem; font-weight: 700; margin: 10px 0;">${year}</div>
            <div style="width: 100px; height: 3px; background: ${colors.primary}; margin: 15px auto;"></div>
            <p style="font-size: 1.2rem; opacity: 0.7;">${cover.name} Edition</p>
            <p style="font-size: 0.9rem; margin-top: 30px; opacity: 0.5;">${state.pageCount}+ Pages • Ultimate Bundle</p>
            <div style="margin-top: 20px; font-size: 0.8rem; opacity: 0.3; letter-spacing: 2px;">✨ DREAM • PLAN • ACHIEVE ✨</div>
        </div>
    `;
}

// --- VISION BOARD ---
function renderVisionBoard(page) {
    const { colors, font, year } = page;
    const visions = ['Career', 'Health', 'Relationships', 'Personal Growth', 'Travel', 'Creativity', 'Finance', 'Spirituality'];
    
    let visionHtml = visions.map(v => `
        <div style="padding: 15px; background: ${colors.secondary}22; border-radius: 12px; border: 2px dashed ${colors.primary}; text-align: center;">
            <div style="font-size: 2rem;">${randomPick(['🎯', '💫', '🌟', '✨', '🎪', '🌈', '🦋', '🌺'])}</div>
            <div style="font-weight: 600; font-size: 0.9rem; color: ${colors.primary};">${v}</div>
            <div style="font-size: 0.75rem; opacity: 0.5; margin-top: 5px;">_________________</div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="text-align: center; border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">✨ Vision Board ${year}</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Dream big! Visualize your goals</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">${visionHtml}</div>
            <div style="margin-top: 20px; padding: 15px; background: ${colors.secondary}11; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.85rem; opacity: 0.6;">"The future belongs to those who believe in the beauty of their dreams."</div>
            </div>
        </div>
    `;
}

// --- GOALS ---
function renderGoals(page) {
    const { colors, font, year } = page;
    const goalCategories = ['Personal', 'Professional', 'Health', 'Financial', 'Creative', 'Travel'];
    
    let goalsHtml = goalCategories.map(cat => `
        <div style="padding: 12px; background: ${colors.secondary}11; border-radius: 8px; border-left: 4px solid ${colors.primary};">
            <div style="font-weight: 600; color: ${colors.primary}; font-size: 0.9rem;">${cat} Goals</div>
            <div style="margin-top: 5px; font-size: 0.8rem; opacity: 0.6;">1. _________________</div>
            <div style="font-size: 0.8rem; opacity: 0.6;">2. _________________</div>
            <div style="font-size: 0.8rem; opacity: 0.6;">3. _________________</div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="text-align: center; border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">🎯 ${year} Goals</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Set your intentions and make them happen</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">${goalsHtml}</div>
            <div style="margin-top: 20px; padding: 15px; background: ${colors.primary}11; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.85rem; font-weight: 600; color: ${colors.primary};">💪 My #1 Goal for ${year}:</div>
                <div style="font-size: 1.1rem; margin-top: 5px;">___________________________________</div>
            </div>
        </div>
    `;
}

// --- YEARLY REVIEW ---
function renderYearlyReview(page) {
    const { colors, font, year } = page;
    const prompts = [
        'What was your biggest achievement?',
        'What did you learn this year?',
        'What are you most grateful for?',
        'What challenges did you overcome?',
        'What is your favorite memory?',
        'What are you looking forward to next year?'
    ];

    let promptsHtml = prompts.map(p => `
        <div style="padding: 10px 15px; background: ${colors.secondary}11; border-radius: 8px; margin-bottom: 10px;">
            <div style="font-weight: 600; font-size: 0.85rem; color: ${colors.primary};">${p}</div>
            <div style="height: 30px; border-bottom: 1px dashed ${colors.secondary}; margin-top: 5px;"></div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="text-align: center; border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">📝 Yearly Review ${year}</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Reflect on the year that was</p>
            </div>
            ${promptsHtml}
            <div style="margin-top: 20px; padding: 15px; background: ${colors.primary}11; border-radius: 12px; text-align: center;">
                <div style="font-size: 1.5rem;">⭐</div>
                <div style="font-size: 0.85rem; font-weight: 600; color: ${colors.primary};">Overall rating of ${year}:</div>
                <div style="font-size: 1.5rem; letter-spacing: 8px;">☆☆☆☆☆</div>
            </div>
        </div>
    `;
}

// --- TRAVEL BUCKET LIST (NEW) ---
function renderTravelBucket(page) {
    const { destinations, colors, font } = page;
    
    let destHtml = destinations.map(d => `
        <div style="padding: 8px 12px; background: ${colors.secondary}11; border-radius: 8px; display: flex; align-items: center; gap: 10px; border: 1px solid ${colors.secondary}33;">
            <span style="font-size: 1.2rem;">✈️</span>
            <span style="flex: 1; font-size: 0.85rem;">${d}</span>
            <span style="font-size: 0.8rem; opacity: 0.3;">☐</span>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">✈️ Travel Bucket List</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Dream destinations to visit</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">${destHtml}</div>
            <div style="margin-top: 20px; padding: 15px; background: ${colors.primary}11; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.85rem; font-weight: 600; color: ${colors.primary};">🌍 My Top 3 Must-Visit Places:</div>
                <div style="font-size: 0.9rem; margin-top: 5px;">1. _________________</div>
                <div style="font-size: 0.9rem;">2. _________________</div>
                <div style="font-size: 0.9rem;">3. _________________</div>
            </div>
        </div>
    `;
}

// --- BUDGET PLANNER (NEW) ---
function renderBudget(page) {
    const { categories, colors, font, year } = page;
    
    let budgetHtml = categories.map(cat => `
        <div style="padding: 8px 12px; background: ${colors.secondary}11; border-radius: 6px; border-left: 3px solid ${colors.primary};">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span>${cat}</span>
                <span style="opacity: 0.5;">$______</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">💰 ${year} Budget Planner</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Track your monthly expenses</p>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">${budgetHtml}</div>
            <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                <div style="padding: 10px; background: ${colors.secondary}11; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; opacity: 0.6;">Income</div>
                    <div style="font-weight: 600; color: ${colors.primary};">$________</div>
                </div>
                <div style="padding: 10px; background: ${colors.secondary}11; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; opacity: 0.6;">Expenses</div>
                    <div style="font-weight: 600; color: ${colors.accent};">$________</div>
                </div>
                <div style="padding: 10px; background: ${colors.secondary}11; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; opacity: 0.6;">Savings</div>
                    <div style="font-weight: 600; color: ${colors.primary};">$________</div>
                </div>
            </div>
            <div style="margin-top: 10px; padding: 8px; background: ${colors.primary}11; border-radius: 8px; text-align: center; font-size: 0.8rem; opacity: 0.6;">
                💡 Savings Goal: ________________________________
            </div>
        </div>
    `;
}

// --- PASSWORD TRACKER (NEW) ---
function renderPasswordTracker(page) {
    const { colors, font } = page;
    const services = ['Email', 'Social Media', 'Banking', 'Shopping', 'Streaming', 'Work', 'Cloud Storage', 'Utilities'];
    
    let passwordHtml = services.map(s => `
        <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 6px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; font-size: 0.8rem; border-bottom: 1px solid ${colors.secondary}22;">
            <span style="font-weight: 600; color: ${colors.primary};">${s}</span>
            <span style="opacity: 0.5;">_________________</span>
            <span style="opacity: 0.3;">🔒</span>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">🔐 Password Tracker</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Keep your accounts organized and secure</p>
            </div>
            <div style="display: grid; gap: 4px;">
                <div style="padding: 8px; background: ${colors.primary}22; border-radius: 6px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px; font-size: 0.75rem; font-weight: 600;">
                    <span>Service</span>
                    <span>Username</span>
                    <span>Password</span>
                </div>
                ${passwordHtml}
            </div>
            <div style="margin-top: 15px; padding: 10px; background: ${colors.secondary}11; border-radius: 8px; text-align: center; font-size: 0.8rem; opacity: 0.5;">
                ⚠️ Keep this page in a safe place
            </div>
        </div>
    `;
}

// --- WELLNESS TRACKER (NEW) ---
function renderWellness(page) {
    const { activities, colors, font } = page;
    
    let activityHtml = activities.map(a => `
        <div style="padding: 8px 12px; background: ${colors.secondary}11; border-radius: 6px; display: flex; align-items: center; gap: 10px; border-left: 3px solid ${colors.accent};">
            <span style="font-size: 1.2rem;">🧘</span>
            <span style="flex: 1; font-size: 0.85rem;">${a}</span>
            <span style="display: flex; gap: 3px;">
                ${Array(7).fill(0).map(() => `<span style="width: 12px; height: 12px; border: 1px solid ${colors.secondary}; border-radius: 50%; display: inline-block;"></span>`).join('')}
            </span>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">🧘 Wellness Tracker</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Track your daily wellness activities</p>
            </div>
            <div style="display: grid; gap: 4px;">${activityHtml}</div>
            <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px; text-align: center; font-size: 0.75rem;">
                    😴 Sleep: ______ hrs
                </div>
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px; text-align: center; font-size: 0.75rem;">
                    💧 Water: ______ glasses
                </div>
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px; text-align: center; font-size: 0.75rem;">
                    🏃 Exercise: ______ mins
                </div>
            </div>
        </div>
    `;
}

// --- JOURNAL PROMPTS (NEW) ---
function renderJournalPrompts(page) {
    const { prompts, colors, font } = page;
    
    let promptHtml = prompts.map((p, i) => `
        <div style="padding: 10px 15px; background: ${colors.secondary}11; border-radius: 8px; margin-bottom: 8px; border-left: 3px solid ${i % 2 === 0 ? colors.primary : colors.accent};">
            <div style="font-weight: 600; font-size: 0.85rem; color: ${colors.primary};">Prompt ${i+1}:</div>
            <div style="font-size: 0.9rem; margin: 5px 0;">${p}</div>
            <div style="height: 25px; border-bottom: 1px dashed ${colors.secondary}; margin-top: 3px;"></div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 15px; margin-bottom: 20px;">
                <span style="font-size: 2rem; font-weight: 700; color: ${colors.primary};">📝 Journal Prompts</span>
                <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 5px;">Daily writing inspiration</p>
            </div>
            ${promptHtml}
            <div style="margin-top: 15px; padding: 10px; background: ${colors.primary}11; border-radius: 8px; text-align: center; font-size: 0.8rem; opacity: 0.6;">
                ✍️ Write freely. No judgment, just expression.
            </div>
        </div>
    `;
}

// --- WEEKLY PLANNER ---
function renderWeeklyPlanner(page) {
    const { week, month, colors, font } = page;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let daysHtml = days.map(day => `
        <div style="padding: 6px 8px; border-bottom: 1px solid ${colors.secondary}22; display: flex; align-items: center; gap: 10px;">
            <span style="font-weight: 600; min-width: 80px; font-size: 0.75rem; color: ${colors.primary};">${day}</span>
            <span style="opacity: 0.3; flex: 1;">_________________________________</span>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">📅 Week ${week}</span>
                <span style="font-size: 0.9rem; opacity: 0.6; margin-left: 15px;">${month} 2026</span>
            </div>
            ${daysHtml}
            <div style="margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px;">
                    <div style="font-weight: 600; font-size: 0.75rem; color: ${colors.primary};">🎯 Weekly Goals</div>
                    <div style="font-size: 0.7rem; opacity: 0.5;">1. _______________</div>
                    <div style="font-size: 0.7rem; opacity: 0.5;">2. _______________</div>
                </div>
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px;">
                    <div style="font-weight: 600; font-size: 0.75rem; color: ${colors.primary};">💡 Weekly Wins</div>
                    <div style="font-size: 0.7rem; opacity: 0.5;">1. _______________</div>
                    <div style="font-size: 0.7rem; opacity: 0.5;">2. _______________</div>
                </div>
            </div>
        </div>
    `;
}

// --- MONTH (Enhanced) ---
function renderMonth(page) {
    const { month, theme, moodDoodle, daysInMonth, startDay, colors, font } = page;

    let daysHtml = '';
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    dayNames.forEach(day => {
        daysHtml += `<div class="day-header" style="color: ${colors.primary};">${day}</div>`;
    });

    for (let i = 0; i < startDay; i++) {
        daysHtml += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const isWeekend = (startDay + d - 1) % 7 === 0 || (startDay + d - 1) % 7 === 6;
        daysHtml += `<div class="day ${isWeekend ? 'weekend' : ''}" style="${isWeekend ? 'color: #c0392b;' : ''}">${d}</div>`;
    }

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.8rem; font-weight: 700; color: ${colors.primary};">📅 ${month} 2026</span>
                <span style="font-size: 0.9rem; opacity: 0.6;">Theme: ${theme}</span>
            </div>
            <div class="month-grid" style="border: 1px solid ${colors.secondary}; border-radius: 8px; padding: 10px;">${daysHtml}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                <div style="padding: 12px; background: ${colors.secondary}22; border-radius: 8px; border-left: 4px solid ${colors.primary}; text-align: center;">
                    <div style="font-size: 2.5rem;">${moodDoodle.emoji}</div>
                    <div style="font-size: 0.8rem; margin-top: 5px; color: ${colors.primary};">${moodDoodle.name}</div>
                </div>
                <div style="padding: 12px; background: ${colors.secondary}22; border-radius: 8px; border-left: 4px solid ${colors.accent};">
                    <div style="font-weight: 600; color: ${colors.primary};">🎯 Monthly Focus</div>
                    <span style="font-size: 0.85rem;">${randomPick(['Growth', 'Joy', 'Peace', 'Health', 'Creativity', 'Connection', 'Success', 'Gratitude'])}</span>
                </div>
            </div>
            <div style="margin-top: 15px; padding: 12px; background: ${colors.secondary}11; border-radius: 8px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-size: 0.8rem;">
                <span>🎯 Goal: ________________</span>
                <span>⭐ Highlight: ________________</span>
                <span>🙏 Gratitude: ________________</span>
            </div>
        </div>
    `;
}

// --- MOOD TRACKER ---
function renderMoodTracker(page) {
    const { month, moodDoodle, moods, colors, font } = page;
    
    let moodsHtml = moods.slice(0, 6).map((m, index) => `
        <div class="mood-item" style="border-color: ${colors.secondary}; background: ${index % 2 === 0 ? colors.secondary + '11' : 'transparent'};">
            <span class="emoji">${m.emoji}</span>
            <span class="label" style="color: ${colors.text}; font-weight: 600;">${m.label}</span>
            <span class="checkbox" style="border-color: ${colors.secondary}; background: ${colors.secondary}22;"></span>
        </div>
    `).join('');

    return `
        <div class="journal-page mood-tracker-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 20px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">${month} 2026</span>
                <span style="font-size: 1.2rem; opacity: 0.6;">Mood Tracker</span>
            </div>
            <div class="mood-doodle" style="border-color: ${colors.primary}; background: ${colors.secondary}22;">${moodDoodle.emoji}</div>
            <div class="mood-doodle-text" style="color: ${colors.primary};">${moodDoodle.name} • Mood Tracker</div>
            <p style="font-size: 0.9rem; opacity: 0.6; margin-bottom: 10px;">How are you feeling today?</p>
            <div class="mood-grid">${moodsHtml}</div>
            <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%;">
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px; font-size: 0.8rem; text-align: center; opacity: 0.7;">⭐ Highlight: ______________</div>
                <div style="padding: 8px; background: ${colors.secondary}11; border-radius: 8px; font-size: 0.8rem; text-align: center; opacity: 0.7;">📝 Notes: ______________</div>
            </div>
        </div>
    `;
}

// --- TRACKERS ---
function renderTrackers(page) {
    const { month, trackers, colors, font } = page;

    let itemsHtml = trackers.slice(0, 10).map(t => `
        <div class="tracker-item" style="border-color: ${colors.secondary}; background: ${colors.secondary}11;">
            <span class="label" style="color: ${colors.primary};">${t}</span>
            <div class="dots">
                ${Array(10).fill(0).map(() => `<span class="dot" style="border-color: ${colors.secondary};"></span>`).join('')}
            </div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">📊 ${month} Trackers</span>
            </div>
            <div class="tracker-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">${itemsHtml}</div>
            <p style="text-align: center; margin-top: 20px; font-size: 0.8rem; opacity: 0.5;">Track your habits daily</p>
        </div>
    `;
}

// --- DOODLES ---
function renderDoodles(page) {
    const { doodles, colors, font } = page;

    let doodleHtml = doodles.slice(0, 12).map(d => `
        <div class="doodle-item" style="border-color: ${colors.secondary}; background: ${colors.secondary}11;">
            <span class="icon" style="font-size: 2.5rem;">${getDoodleEmoji(d)}</span>
            <div style="font-size: 0.7rem; margin-top: 5px; opacity: 0.7;">${d}</div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">🎨 Doodle Practice</span>
            </div>
            <div class="doodle-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">${doodleHtml}</div>
            <p style="text-align: center; margin-top: 20px; font-size: 0.8rem; opacity: 0.5;">Practice drawing these fun shapes</p>
        </div>
    `;
}

// --- MONTH DOODLES ---
function renderMonthDoodles(page) {
    const { month, doodles, colors, font } = page;

    let doodleHtml = doodles.slice(0, 8).map(d => `
        <div class="doodle-item" style="border-color: ${colors.secondary}; background: ${colors.secondary}11;">
            <span class="icon" style="font-size: 2.5rem;">${getDoodleEmoji(d)}</span>
            <div style="font-size: 0.7rem; margin-top: 5px; opacity: 0.7;">${d}</div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">🎨 ${month} Doodles</span>
            </div>
            <div class="doodle-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">${doodleHtml}</div>
            <p style="text-align: center; margin-top: 20px; font-size: 0.8rem; opacity: 0.5;">${month}-themed doodles</p>
        </div>
    `;
}

// --- SEASONAL ---
function renderSeasonal(page) {
    const { seasons, christmas, colors, font } = page;

    let seasonHtml = seasons.map(s => `
        <div class="season-card" style="border: 2px solid ${colors.secondary}; background: ${colors.secondary}11;">
            <h3 style="color: ${colors.primary};">🌿 ${s} Bucket List</h3>
            <ul class="bucket-list" style="list-style: none; padding: 0; text-align: left; font-size: 0.8rem;">
                ${Array(6).fill(0).map(() => `<li style="padding: 4px 0 4px 24px; border-bottom: 1px solid ${colors.secondary}22;">☐ ${randomPick(['Go outside', 'Try something new', 'Read a book', 'Visit a new place', 'Cook a new recipe', 'Call a friend', 'Take a photo', 'Write a letter', 'Start a project', 'Learn a skill', 'Practice gratitude', 'Meditate'])}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">🌿 Seasonal Bucket Lists</span>
            </div>
            <div class="seasonal-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">${seasonHtml}</div>
            <div style="margin-top: 20px; padding: 15px; background: ${colors.secondary}22; border-radius: 12px; text-align: center;">
                <h3 style="color: ${colors.primary};">🎄 Christmas Pages</h3>
                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px; flex-wrap: wrap;">
                    ${christmas.map(c => `<span style="padding: 6px 15px; background: ${colors.primary}22; border-radius: 20px; font-size: 0.8rem; border: 1px solid ${colors.secondary};">${c}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// --- REFLECTION ---
function renderReflection(page) {
    const { month, colors, font } = page;
    const questions = [
        'What went well this month?',
        'What could I have done better?',
        'What did I learn?',
        'What am I grateful for?',
        'What is my focus for next month?'
    ];

    let qHtml = questions.map(q => `
        <div style="padding: 8px 12px; background: ${colors.secondary}11; border-radius: 8px; margin-bottom: 8px;">
            <div style="font-weight: 600; font-size: 0.85rem; color: ${colors.primary};">${q}</div>
            <div style="height: 25px; border-bottom: 1px dashed ${colors.secondary}; margin-top: 3px;"></div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text}; background: ${colors.background};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: ${colors.primary};">📖 ${month} Reflection</span>
            </div>
            ${qHtml}
            <div style="margin-top: 15px; padding: 12px; background: ${colors.primary}11; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.9rem; font-weight: 600; color: ${colors.primary};">⭐ Monthly Highlight:</div>
                <div style="font-size: 1.1rem; margin-top: 3px;">________________________________</div>
            </div>
        </div>
    `;
}

// --- Emoji Mapper ---
function getDoodleEmoji(name) {
    const map = {
        'Apple': '🍎', 'Barn': '🏠', 'Bat': '🦇', 'Bear': '🐻',
        'Book': '📖', 'Bunny': '🐰', 'Candy Cane': '🍭', 'Canvas': '🎨',
        'Cherry Blossom': '🌸', 'Cloud': '☁️', 'Deer': '🦌',
        'Firework': '🎆', 'Football': '🏈', 'Frog': '🐸',
        'Gift Tag': '🎁', 'Gnome Hat': '🧙', 'Hot Chocolate Mug': '☕',
        'Ladybug': '🐞', 'Latte Cup': '☕', 'Marshmallow': '🔥',
        'Party Hat': '🎉', 'Penguin': '🐧', 'Picnic Basket': '🧺',
        'Pie': '🥧', 'Pool': '🏊', 'Pot of Gold': '💰',
        'Record': '🎵', 'Sailboat': '⛵', 'Snowboard': '🏂',
        'Stamp': '📮', 'Suitcase': '🧳', 'Tulip': '🌷',
        'Vase': '🏺', 'Watering Can': '💧', 'Whale': '🐋',
        'Witch Hat': '🧙‍♀️', 'Sunflower': '🌻', 'Rainbow': '🌈',
        'Star': '⭐', 'Heart': '💖', 'Moon': '🌙', 'Sun': '☀️',
        'Rain': '🌧️', 'Snow': '❄️', 'Wind': '💨', 'Cactus': '🌵',
        'Palm Tree': '🌴', 'Mushroom': '🍄', 'Leaf': '🍃', 'Flower': '🌺',
        'Butterfly': '🦋', 'Dragonfly': '🪰', 'Bee': '🐝', 'Snail': '🐌',
        'Turtle': '🐢', 'Starfish': '⭐', 'Shell': '🐚', 'Feather': '🪶',
        'Key': '🔑', 'Compass': '🧭', 'Mountain': '🏔️', 'River': '🏞️',
        'Forest': '🌲', 'Desert': '🏜️'
    };
    return map[name] || '✨';
}

// ============================================
// PDF EXPORT
// ============================================

async function downloadPDF() {
    const container = document.getElementById('journal-preview');
    const pages = container.querySelectorAll('.journal-page');

    if (pages.length === 0) {
        alert('Please generate a journal first!');
        return;
    }

    const btn = document.getElementById('btn-download');
    btn.textContent = '⏳ Generating PDF... 0%';
    btn.disabled = true;

    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: state.size === 'a4' ? [595, 842] : [420, 595],
            hotfixes: ['px_scaling']
        });

        const total = pages.length;

        for (let i = 0; i < pages.length; i++) {
            const progress = Math.round(((i + 1) / total) * 100);
            btn.textContent = `⏳ Generating PDF... ${progress}%`;

            const canvas = await html2canvas(pages[i], {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false,
                width: pages[i].scrollWidth,
                height: pages[i].scrollHeight
            });

            const imgData = canvas.toDataURL('image/jpeg', 0.92);
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = pdf.internal.pageSize.getHeight();

            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        }

        pdf.save(`2026_ultimate_journal_${state.pageCount}pages.pdf`);
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error generating PDF. Please try again.');
    }

    btn.textContent = '📥 Download PDF';
    btn.disabled = false;
}

// ============================================
// EVENT LISTENERS
// ============================================

document.querySelectorAll('.btn-size').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-size').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.size = this.dataset.size;
    });
});

document.querySelectorAll('.btn-bg').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-bg').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.background = this.dataset.bg;
    });
});

document.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-theme').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.theme = this.dataset.theme;
    });
});

document.querySelectorAll('.btn-pages').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-pages').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.pageCount = parseInt(this.dataset.pages);
    });
});

document.getElementById('btn-generate').addEventListener('click', generateJournal);
document.getElementById('btn-download').addEventListener('click', downloadPDF);

document.addEventListener('DOMContentLoaded', generateJournal);