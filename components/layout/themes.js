const light = {
    color: "#1a1a1a",  // Dark gray for text
    bgColor: "#f5f5f5", // Soft white background
    bgImage: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 60%)', // Subtle gradient from soft white to light gray
    bgDiv: "#ffffff",  // Pure white for main div backgrounds to keep it clean and bright
    bgSubDiv: "#f0f0f0"  // Very light gray for sub-divs to add slight contrast
}

const dark = {
    color: "#e0e0e0",  // Light gray for text
    bgColor: "#1a1a1a", // Deep black background
    bgImage: 'linear-gradient(180deg, #1a1a1a 5%, #333333 90%)', // Gradient from deep black to dark gray
    bgDiv: "#2a2a2a",  // Dark gray for main div backgrounds to differentiate from the pure black background
    bgSubDiv: "#3a3a3a"  // Slightly lighter gray for sub-divs for subtle contrast
}

const themes = {
    light: light,
    dark: dark,
}

export default themes;
