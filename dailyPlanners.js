// dailyPlanners.js
const DAILY_PLANNERS = {
  planner1: {
    title: "Productivity Focus",
    theme: "Efficiency",
    morningRoutine: ["Wake at 6:00 AM", "Meditate 10 min", "Exercise 20 min", "Plan the day"],
    priorities: ["Complete project proposal", "Team meeting prep", "Client follow-up"],
    habits: ["Drink 8 glasses water", "Read 30 pages", "Practice gratitude"],
    schedule: {
      "9:00 AM": "Deep work: Project A",
      "11:00 AM": "Team sync",
      "1:00 PM": "Lunch break",
      "2:00 PM": "Client calls",
      "4:00 PM": "Review & plan next day"
    },
    reflection: "Today I accomplished...",
    quote: "Focus on being productive instead of busy."
  },
  
  planner2: {
    title: "Creative Flow",
    theme: "Inspiration",
    morningRoutine: ["Wake at 7:00 AM", "Journal 15 min", "Creative warm-up", "Set intentions"],
    priorities: ["Design new logo", "Write blog post", "Brainstorm ideas"],
    habits: ["Practice drawing", "Listen to music", "Take breaks outdoors"],
    schedule: {
      "10:00 AM": "Creative work session",
      "12:00 PM": "Brainstorming",
      "2:00 PM": "Project refinement",
      "4:00 PM": "Portfolio update",
      "6:00 PM": "Plan next creative project"
    },
    reflection: "My creative breakthrough today...",
    quote: "Creativity takes courage."
  },
  
  planner3: {
    title: "Wellness Journey",
    theme: "Self-Care",
    morningRoutine: ["Wake at 6:30 AM", "Yoga 20 min", "Healthy breakfast", "Set mood"],
    priorities: ["Go for a walk", "Meal prep", "Self-care activity"],
    habits: ["Drink green tea", "Practice mindfulness", "Track mood"],
    schedule: {
      "8:00 AM": "Morning walk",
      "10:00 AM": "Mindful work",
      "12:30 PM": "Healthy lunch",
      "3:00 PM": "Self-care break",
      "6:00 PM": "Evening reflection"
    },
    reflection: "How I feel today...",
    quote: "Self-care is how you take your power back."
  }
};

// Export for use in your main HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_PLANNERS;
}