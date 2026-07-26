// ============================================
// DATA: All journal content
// ============================================

const DATA = {
    // 5 Cover Designs (using emoji/unicode as placeholders)
    covers: [
        { name: 'Cute Flower', icon: '🌸', color: '#ffb7c5' },
        { name: 'Plant', icon: '🌿', color: '#8fbc8f' },
        { name: 'Polaroid', icon: '📷', color: '#d4c5a9' },
        { name: 'Elegant Floral', icon: '🌹', color: '#d4a0a0' },
        { name: 'Groovy Disco', icon: '🪩', color: '#b19cd9' }
    ],

    // 3 Themes per month (36 total)
    monthlyThemes: {
        January: ['Arctic Animal', 'Winter Sports', 'New Years Party'],
        February: ['Roses', 'Love Letters', 'Teddy Bears'],
        March: ['Frogs', 'St Patricks Day', 'Spring Equinox'],
        April: ['April Showers', 'Bunnies', 'Tulips'],
        May: ['Garden', 'Ladybug', 'Cherry Blossoms'],
        June: ['Art', 'Retro', 'Picnic'],
        July: ['Travel', 'Pool Floaties', 'Fireworks'],
        August: ['Sea Creatures', 'Camping', 'Sailing'],
        September: ['Apple Picking', 'Football', 'Farm'],
        October: ['Cute Halloween', 'Spooky Halloween', 'Autumn'],
        November: ['Forest', 'Books', 'Sweater Weather'],
        December: ['North Pole', 'Gifts & Bows', 'Cozy Winter']
    },

    // 36 Mood Tracker designs
    moodTrackers: [
        'Apple', 'Bookshelf', 'Box of Chocolates', 'Camping',
        'Candy Cane', 'Cherry Blossom', 'Cow', 'Disco Ball',
        'Easter Basket', 'Fall Sweater', 'Fireworks', 'Football',
        'Frog', 'Ghost Balloon', 'Gingerbread House', 'Gnome Hat',
        'Igloo', 'Ladybug', 'Lava Lamp', 'Lighthouse',
        'Love Letter', 'Paint Palette', 'Picnic', 'Pinecone',
        'Pool Floaties', 'Pumpkin', 'Rose', 'Scarf',
        'Seahorse', 'Snowboard', 'Spider Web', 'St Patricks Day',
        'Suitcase', 'Tulip', 'Umbrella', 'Watering Can'
    ],

    // 36 Doodle pages
    doodles: [
        'Apple', 'Barn', 'Bat', 'Bear', 'Book', 'Bunny',
        'Candy Cane', 'Canvas', 'Cherry Blossom', 'Cloud', 'Deer',
        'Firework', 'Football', 'Frog', 'Gift Tag', 'Gnome Hat',
        'Hot Chocolate Mug', 'Ladybug', 'Latte Cup', 'Marshmallow',
        'Party Hat', 'Penguin', 'Picnic Basket', 'Pie', 'Pool',
        'Pot of Gold', 'Record', 'Sailboat', 'Snowboard', 'Stamp',
        'Suitcase', 'Tulip', 'Vase', 'Watering Can', 'Whale', 'Witch Hat'
    ],

    // 16 Monthly Pages (always included)
    monthlyPages: [
        'Adulting', 'Habit Tracker', 'Highlight of the Day',
        'Gratitude Journal', 'Tomorrow\'s Main Goal', 'Sleep Tracker',
        'Health Tracker', 'Spending Tracker', 'Exercise Tracker',
        'Water Tracker', 'Movies Watched', 'Shows Watched',
        'Books Read', 'Playlist', 'End of Month Review', 'Marker Tracker'
    ],

    // Seasonal bucket lists
    seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
    christmasPages: ['Christmas Bucket List', 'Christmas Countdown'],

    // Color themes
    colorThemes: {
        pastel: { primary: '#f5b7b1', secondary: '#f8c9b7', accent: '#b5d3d4', text: '#4a3728' },
        vibrant: { primary: '#e74c3c', secondary: '#f39c12', accent: '#2ecc71', text: '#2c3e50' },
        mono: { primary: '#555', secondary: '#888', accent: '#aaa', text: '#222' },
        earth: { primary: '#8d6e63', secondary: '#a1887f', accent: '#6d8a6d', text: '#3e2723' }
    },

    // Font options
    fonts: ['Playfair Display', 'Quicksand', 'Dancing Script', 'Montserrat']
};

// ============================================
// STATE: Current settings and generated journal
// ============================================

let state = {
    size: 'a4',
    background: 'dots',
    theme: 'pastel',
    journal: null // Will hold generated pages
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

// ============================================
// JOURNAL GENERATOR
// ============================================

function generateJournal() {
    const colors = DATA.colorThemes[state.theme];
    const font = randomPick(DATA.fonts);
    const cover = randomPick(DATA.covers);
    const months = Object.keys(DATA.monthlyThemes);
    const shuffledMoodTrackers = shuffleArray(DATA.moodTrackers);
    const shuffledDoodles = shuffleArray(DATA.doodles);

    let pages = [];

    // --- COVER PAGE ---
    pages.push({
        type: 'cover',
        cover: cover,
        colors: colors,
        font: font,
        year: 2026
    });

    // --- MONTHLY PAGES ---
    months.forEach((month, index) => {
        const themeOptions = DATA.monthlyThemes[month];
        const chosenTheme = randomPick(themeOptions);
        const moodTracker = shuffledMoodTrackers[index % shuffledMoodTrackers.length];
        const daysInMonth = getMonthDays(index + 1);
        const startDay = getMonthStartDay(index + 1);

        pages.push({
            type: 'month',
            month: month,
            theme: chosenTheme,
            moodTracker: moodTracker,
            daysInMonth: daysInMonth,
            startDay: startDay,
            colors: colors,
            font: font
        });
    });

    // --- 16 MONTHLY PAGES (static, included once) ---
    pages.push({
        type: 'trackers',
        trackers: DATA.monthlyPages,
        colors: colors,
        font: font
    });

    // --- 36 DOODLE PAGES (show all, but in random order) ---
    pages.push({
        type: 'doodles',
        doodles: shuffledDoodles,
        colors: colors,
        font: font
    });

    // --- SEASONAL BUCKET LISTS ---
    pages.push({
        type: 'seasonal',
        seasons: DATA.seasons,
        christmas: DATA.christmasPages,
        colors: colors,
        font: font
    });

    state.journal = pages;
    renderJournal(pages);
}

// ============================================
// RENDERER
// ============================================

function renderJournal(pages) {
    const container = document.getElementById('journal-preview');
    const sizeClass = state.size === 'a4' ? 'a4-size' : 'a5-size';
    const dotClass = state.background === 'dots' ? 'dotted' : 'plain';

    let html = `<div class="journal-container ${sizeClass} ${dotClass}">`;

    pages.forEach((page, index) => {
        html += renderPage(page, index);
    });

    html += '</div>';
    container.innerHTML = html;

    // Apply color theme to all pages
    const themeColors = DATA.colorThemes[state.theme];
    container.style.setProperty('--primary-color', themeColors.primary);
    container.style.setProperty('--secondary-color', themeColors.secondary);
    container.style.setProperty('--accent-color', themeColors.accent);
    container.style.setProperty('--text-color', themeColors.text);
}

function renderPage(page, index) {
    switch (page.type) {
        case 'cover':
            return renderCover(page, index);
        case 'month':
            return renderMonth(page, index);
        case 'trackers':
            return renderTrackers(page, index);
        case 'doodles':
            return renderDoodles(page, index);
        case 'seasonal':
            return renderSeasonal(page, index);
        default:
            return '';
    }
}

function renderCover(page) {
    const { cover, colors, font, year } = page;
    return `
        <div class="journal-page cover" style="font-family: '${font}', serif; color: ${colors.text}; border-color: ${colors.primary};">
            <div style="font-size: 4rem; margin-bottom: 10px;">${cover.icon}</div>
            <h1 style="font-size: 2.5rem; letter-spacing: 4px; color: ${colors.primary};">YOUR 2026 JOURNAL</h1>
            <div class="year" style="color: ${colors.accent};">${year}</div>
            <div style="width: 80px; height: 3px; background: ${colors.primary}; margin: 15px auto;"></div>
            <p style="font-size: 1.1rem; opacity: 0.7;">${cover.name} Edition</p>
            <p style="font-size: 0.9rem; margin-top: 30px; opacity: 0.5;">Created with ❤️ for an amazing year ahead</p>
        </div>
    `;
}

function renderMonth(page) {
    const { month, theme, moodTracker, daysInMonth, startDay, colors, font } = page;

    let daysHtml = '';
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Day headers
    dayNames.forEach(day => {
        daysHtml += `<div class="day-header">${day}</div>`;
    });

    // Empty cells before month starts
    for (let i = 0; i < startDay; i++) {
        daysHtml += `<div class="day empty"></div>`;
    }

    // Days of the month
    for (let d = 1; d <= daysInMonth; d++) {
        const isWeekend = (startDay + d - 1) % 7 === 0 || (startDay + d - 1) % 7 === 6;
        daysHtml += `<div class="day ${isWeekend ? 'weekend' : ''}">${d}</div>`;
    }

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text};">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.8rem; font-weight: 700; color: ${colors.primary};">${month}</span>
                <span style="font-size: 0.9rem; opacity: 0.6;">Theme: ${theme}</span>
            </div>

            <div class="month-grid" style="border: 1px solid ${colors.secondary}; border-radius: 8px; padding: 10px;">
                ${daysHtml}
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                <div style="padding: 12px; background: ${colors.secondary}22; border-radius: 8px; border-left: 4px solid ${colors.primary};">
                    <strong>Mood Tracker:</strong> ${moodTracker}
                </div>
                <div style="padding: 12px; background: ${colors.secondary}22; border-radius: 8px; border-left: 4px solid ${colors.accent};">
                    <strong>Doodle of the Day:</strong> ${theme}
                </div>
            </div>

            <div style="margin-top: 15px; padding: 12px; background: ${colors.secondary}11; border-radius: 8px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; font-size: 0.8rem; opacity: 0.7;">
                <span>🎯 Goal:</span>
                <span>⭐ Highlight:</span>
                <span>🙏 Gratitude:</span>
            </div>
        </div>
    `;
}

function renderTrackers(page) {
    const { trackers, colors, font } = page;

    let itemsHtml = trackers.map(t => `
        <div class="tracker-item" style="border-color: ${colors.secondary};">
            <span class="label" style="color: ${colors.primary};">${t}</span>
            <div class="dots">
                ${Array(7).fill(0).map(() => `<span class="dot" style="border-color: ${colors.secondary};"></span>`).join('')}
            </div>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.8rem; font-weight: 700; color: ${colors.primary};">📊 Monthly Trackers</span>
            </div>
            <div class="tracker-grid">
                ${itemsHtml}
            </div>
            <p style="text-align: center; margin-top: 20px; font-size: 0.8rem; opacity: 0.5;">Track your habits and goals every month</p>
        </div>
    `;
}

function renderDoodles(page) {
    const { doodles, colors, font } = page;

    let doodleHtml = doodles.map(d => `
        <div class="doodle-item" style="border-color: ${colors.secondary};">
            <span class="icon">${getDoodleEmoji(d)}</span>
            ${d}
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.8rem; font-weight: 700; color: ${colors.primary};">🎨 Doodle Pages</span>
            </div>
            <div class="doodle-grid">
                ${doodleHtml}
            </div>
            <p style="text-align: center; margin-top: 20px; font-size: 0.8rem; opacity: 0.5;">Practice your drawing skills with these fun prompts</p>
        </div>
    `;
}

function renderSeasonal(page) {
    const { seasons, christmas, colors, font } = page;

    let seasonHtml = seasons.map(s => `
        <div class="season-card" style="border: 2px solid ${colors.secondary};">
            <h3 style="color: ${colors.primary};">${s}</h3>
            <ul class="bucket-list" style="list-style: none; padding: 0; text-align: left; font-size: 0.85rem;">
                ${Array(8).fill(0).map(() => `<li style="padding: 4px 0 4px 24px;">☐ ${randomPick(['Go outside', 'Try something new', 'Read a book', 'Visit a new place', 'Cook a new recipe', 'Call a friend', 'Take a photo', 'Write a letter'])}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    return `
        <div class="journal-page" style="font-family: '${font}', sans-serif; color: ${colors.text};">
            <div style="border-bottom: 3px solid ${colors.primary}; padding-bottom: 10px; margin-bottom: 15px;">
                <span style="font-size: 1.8rem; font-weight: 700; color: ${colors.primary};">🌿 Seasonal Bucket Lists</span>
            </div>
            <div class="seasonal-grid">
                ${seasonHtml}
            </div>
            <div style="margin-top: 20px; padding: 15px; background: ${colors.secondary}22; border-radius: 12px; text-align: center;">
                <h3 style="color: ${colors.primary};">🎄 Christmas Pages</h3>
                <div style="display: flex; gap: 20px; justify-content: center; margin-top: 10px; flex-wrap: wrap;">
                    ${christmas.map(c => `<span style="padding: 8px 20px; background: ${colors.primary}22; border-radius: 20px;">${c}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Simple emoji mapper for doodles
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
        'Witch Hat': '🧙‍♀️'
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

    // Show loading state
    const btn = document.getElementById('btn-download');
    btn.textContent = '⏳ Generating PDF...';
    btn.disabled = true;

    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: state.size === 'a4' ? [595, 842] : [420, 595],
            hotfixes: ['px_scaling']
        });

        for (let i = 0; i < pages.length; i++) {
            const canvas = await html2canvas(pages[i], {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = pdf.internal.pageSize.getHeight();

            if (i > 0) {
                pdf.addPage();
            }

            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        }

        pdf.save('2026_journal_bundle.pdf');
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error generating PDF. Please try again or use a different browser.');
    }

    btn.textContent = '📥 Download PDF';
    btn.disabled = false;
}

// ============================================
// EVENT LISTENERS & INIT
// ============================================

// Size buttons
document.querySelectorAll('.btn-size').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-size').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.size = this.dataset.size;
    });
});

// Background buttons
document.querySelectorAll('.btn-bg').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-bg').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.background = this.dataset.bg;
    });
});

// Theme buttons
document.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-theme').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.theme = this.dataset.theme;
    });
});

// Generate button
document.getElementById('btn-generate').addEventListener('click', generateJournal);

// Download button
document.getElementById('btn-download').addEventListener('click', downloadPDF);

// ============================================
// INITIAL GENERATION
// ============================================

// Generate the first journal on load
document.addEventListener('DOMContentLoaded', generateJournal);
