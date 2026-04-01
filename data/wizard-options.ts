export interface WizardOption {
  id: string;
  label: string;
  icon: string;
  description?: string;
}

// Step 1: What do you want to build?
export const projectTypes: WizardOption[] = [
  { id: "website", label: "A Website", icon: "🌐", description: "A site people visit in their browser" },
  { id: "web-app", label: "A Web App", icon: "💻", description: "An interactive tool that runs in the browser" },
  { id: "mobile-app", label: "A Mobile App", icon: "📱", description: "An app for phones and tablets" },
  { id: "automation", label: "An Automation", icon: "⚡", description: "Something that does a task automatically" },
  { id: "dashboard", label: "A Dashboard", icon: "📊", description: "A page that shows data and charts" },
  { id: "game", label: "A Simple Game", icon: "🎮", description: "A fun interactive game" },
];

// Step 2: What should it be able to do?
// Grouped by project type in plain language
export const capabilities: Record<string, WizardOption[]> = {
  website: [
    { id: "contact-form", label: "Contact Form", icon: "📬", description: "Visitors can send you messages" },
    { id: "blog", label: "Blog / News", icon: "📝", description: "Write and publish articles" },
    { id: "gallery", label: "Photo Gallery", icon: "🖼️", description: "Show images in a nice layout" },
    { id: "booking", label: "Booking / Calendar", icon: "📅", description: "People can book appointments" },
    { id: "shop", label: "Online Shop", icon: "🛒", description: "Sell products online" },
    { id: "members", label: "Member Area", icon: "🔐", description: "Users can sign up and log in" },
    { id: "multilingual", label: "Multiple Languages", icon: "🌍", description: "Content in different languages" },
    { id: "newsletter", label: "Newsletter", icon: "💌", description: "Collect emails and send updates" },
  ],
  "web-app": [
    { id: "user-accounts", label: "User Accounts", icon: "👤", description: "People can sign up and log in" },
    { id: "save-data", label: "Save Data", icon: "💾", description: "Store and retrieve information" },
    { id: "file-upload", label: "File Upload", icon: "📤", description: "Users can upload files or images" },
    { id: "notifications", label: "Notifications", icon: "🔔", description: "Send alerts and updates to users" },
    { id: "search", label: "Search", icon: "🔍", description: "Find things quickly" },
    { id: "payments", label: "Payments", icon: "💳", description: "Accept money from users" },
    { id: "ai-features", label: "AI / Smart Features", icon: "🤖", description: "Use AI to generate or analyze content" },
    { id: "real-time", label: "Live Updates", icon: "⚡", description: "See changes instantly without refreshing" },
  ],
  "mobile-app": [
    { id: "user-accounts", label: "User Accounts", icon: "👤", description: "People can sign up and log in" },
    { id: "camera", label: "Camera Access", icon: "📸", description: "Take photos or scan things" },
    { id: "location", label: "Location / Maps", icon: "📍", description: "Show maps or use GPS" },
    { id: "push-notifications", label: "Push Notifications", icon: "🔔", description: "Send alerts to the phone" },
    { id: "offline", label: "Works Offline", icon: "✈️", description: "Still works without internet" },
    { id: "save-data", label: "Save Data", icon: "💾", description: "Store information in the cloud" },
    { id: "payments", label: "In-App Payments", icon: "💳", description: "Buy things inside the app" },
    { id: "social", label: "Social Features", icon: "💬", description: "Chat, share, follow people" },
  ],
  automation: [
    { id: "schedule", label: "Run on Schedule", icon: "⏰", description: "Do something every day/hour/week" },
    { id: "email-auto", label: "Send Emails", icon: "📧", description: "Automatically send emails" },
    { id: "scrape", label: "Collect Web Data", icon: "🕸️", description: "Grab information from websites" },
    { id: "file-organize", label: "Organize Files", icon: "📁", description: "Sort, rename, or move files" },
    { id: "api-connect", label: "Connect Services", icon: "🔗", description: "Link different apps together" },
    { id: "spreadsheet", label: "Work with Spreadsheets", icon: "📊", description: "Read or write Excel/CSV files" },
    { id: "ai-process", label: "AI Processing", icon: "🤖", description: "Use AI to analyze or transform data" },
    { id: "report", label: "Generate Reports", icon: "📋", description: "Create summaries automatically" },
  ],
  dashboard: [
    { id: "charts", label: "Charts & Graphs", icon: "📈", description: "Visualize numbers beautifully" },
    { id: "live-data", label: "Live Data", icon: "⚡", description: "Numbers update in real-time" },
    { id: "filters", label: "Filters & Search", icon: "🔍", description: "Drill down into specific data" },
    { id: "export", label: "Export Data", icon: "📥", description: "Download as PDF or spreadsheet" },
    { id: "user-accounts", label: "User Accounts", icon: "👤", description: "Different users see different data" },
    { id: "notifications", label: "Alerts", icon: "🚨", description: "Get notified when something changes" },
    { id: "api-connect", label: "Connect Data Sources", icon: "🔗", description: "Pull data from other services" },
    { id: "dark-mode", label: "Dark Mode", icon: "🌙", description: "Easy on the eyes" },
  ],
  game: [
    { id: "scores", label: "High Scores", icon: "🏆", description: "Track and display best scores" },
    { id: "levels", label: "Multiple Levels", icon: "🎯", description: "Progress through stages" },
    { id: "sound", label: "Sound Effects", icon: "🔊", description: "Audio feedback and music" },
    { id: "multiplayer", label: "Multiplayer", icon: "👥", description: "Play with friends" },
    { id: "save-progress", label: "Save Progress", icon: "💾", description: "Continue where you left off" },
    { id: "animations", label: "Smooth Animations", icon: "✨", description: "Nice visual effects" },
    { id: "touch", label: "Touch Controls", icon: "👆", description: "Play on phones too" },
    { id: "leaderboard", label: "Leaderboard", icon: "📊", description: "Compare with other players" },
  ],
};

// Step 3: How should it look?
export const vibes: WizardOption[] = [
  { id: "simple", label: "Keep it Simple", icon: "✨", description: "Clean and easy to understand" },
  { id: "modern", label: "Modern & Sleek", icon: "🎨", description: "Trendy design with smooth animations" },
  { id: "playful", label: "Fun & Playful", icon: "🎪", description: "Colorful, bouncy, full of personality" },
  { id: "professional", label: "Professional", icon: "💼", description: "Business-ready, clean, trustworthy" },
  { id: "minimal", label: "Minimal", icon: "⚪", description: "Less is more — only what's needed" },
  { id: "bold", label: "Bold & Eye-catching", icon: "🔥", description: "Strong colors, big text, stands out" },
];

// Roles: Who are you?
export const roles: WizardOption[] = [
  { id: "beginner", label: "Complete Beginner", icon: "🌱", description: "No coding experience at all" },
  { id: "some-experience", label: "Some Experience", icon: "🔧", description: "I've written a bit of code before" },
  { id: "designer", label: "Designer", icon: "🎨", description: "I design things but don't code much" },
  { id: "pm", label: "Product Manager", icon: "📋", description: "I manage products, not code" },
  { id: "data", label: "Data / Analytics", icon: "📊", description: "I work with data, SQL, spreadsheets" },
  { id: "developer", label: "Developer", icon: "💻", description: "I code regularly" },
];

// Step 4: Anything else? (optional free text — handled in the component)
