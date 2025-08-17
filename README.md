# MyTrailMap 🥾

A React-based interactive trail mapping application showcasing hiking trails across Tamil Nadu and Karnataka, India. Explore detailed trail information, view GPX tracks on interactive maps, and discover your next adventure.

## 🌐 Live Demo

**[View MyTrailMap](https://gsuga.github.io/mytrailmap/)**

## ✨ Features

- **Interactive Trail Maps**: View detailed GPX tracks on Leaflet maps
- **Trail Database**: 23+ curated hiking trails with comprehensive details
- **Trail Information**: Distance, elevation gain/loss, duration, and difficulty
- **Filtering & Search**: Find trails by tags (Temple, Views, Wildlife, etc.)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing

## 🗺️ Trail Coverage

- **Tamil Nadu**: Krishnagiri, Madurai, Tenkasi, Kanyakumari districts
- **Karnataka**: Select trails including Hutridurga
- **Trail Types**: Temple visits, forest treks, wildlife spotting, historic sites

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Mapping**: Leaflet, React-Leaflet, Leaflet-GPX
- **UI Framework**: Chakra UI
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gsuga/mytrailmap.git
cd mytrailmap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Chakra UI components
│   ├── GPXMap.tsx      # Interactive map component
│   ├── TrailCard.tsx   # Trail information cards
│   └── TrailStats.tsx  # Trail statistics display
├── data/               # Trail data and types
├── pages/              # Route components
├── types/              # TypeScript definitions
└── util/               # Utility functions
public/
└── data/               # GPX trail files
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments
- Built with ❤️ for the hiking community