# FundHub Impact Verse

A modern web application built with React, TypeScript, and Vite, featuring a beautiful UI powered by shadcn/ui components.

## 🚀 Features

- ⚡️ **Fast Development**: Built with Vite for lightning-fast development and build times
- 🎨 **Modern UI**: Styled with Tailwind CSS and shadcn/ui components
- 🔒 **Type Safety**: Full TypeScript support
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- 🎯 **Component Library**: Comprehensive set of UI components from shadcn/ui
- 🔄 **State Management**: React Query for efficient data fetching and caching
- 📝 **Form Handling**: React Hook Form with Zod validation
- 🎨 **Theme Support**: Dark/Light mode support with next-themes
- 🚀 **Routing**: React Router for seamless navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Query
- **Form Handling**: React Hook Form + Zod
- **Routing**: React Router
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Code Quality**: ESLint

## 📁 Project Structure

```
fundHub/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions and configurations
│   ├── hooks/         # Custom React hooks
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fundHub.git
   cd fundHub
   ```

2. Install dependencies:
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # If you encounter permission issues, try:
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Troubleshooting

#### Vite Not Found Error
If you encounter the error `vite: not found`, try the following solutions:

1. Clear npm cache and reinstall dependencies:
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. Install Vite globally:
   ```bash
   npm install -g vite
   ```

3. Check your Node.js version:
   ```bash
   node -v
   ```
   Ensure you're using Node.js v18 or higher.

4. If using WSL (Windows Subsystem for Linux), ensure you're running the commands in the correct environment:
   ```bash
   # Check if you're in the correct directory
   pwd
   
   # Ensure you have the correct permissions
   sudo chown -R $USER:$USER .
   ```

#### Common Issues

1. **Port Already in Use**
   If port 8080 is already in use, you can change it in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     server: {
       port: 3000, // or any other available port
     },
   });
   ```

2. **TypeScript Errors**
   If you encounter TypeScript errors, try:
   ```bash
   npm install --save-dev @types/node @types/react @types/react-dom
   ```

3. **Dependency Conflicts**
   If you have dependency conflicts, try:
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

4. **Build Issues**
   If you encounter build issues, try:
   ```bash
   npm run build -- --force
   # or
   yarn build --force
   ```

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run the linter:

```bash
npm run lint
# or
yarn lint
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

### Vite Configuration

The project uses Vite for development and building. Configuration can be found in `vite.config.ts`.

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.ts`. The project uses the default configuration with some customizations for the shadcn/ui components.

## 📚 Component Library

This project uses shadcn/ui components, which are built on top of Radix UI primitives. The components are styled with Tailwind CSS and are fully customizable.

### Available Components

- Accordion
- Alert Dialog
- Avatar
- Button
- Card
- Checkbox
- Dialog
- Dropdown Menu
- Form
- Input
- Label
- Navigation Menu
- Popover
- Progress
- Radio Group
- Select
- Separator
- Slider
- Switch
- Tabs
- Toast
- Tooltip
- And more...

## 🎨 Styling

The project uses Tailwind CSS for styling. The main styles are in `src/index.css`, and component-specific styles are co-located with their components.

### Theme Support

The project supports both light and dark themes using next-themes. The theme can be toggled using the theme switcher component.

## 🔄 State Management

React Query is used for server state management, providing features like:
- Automatic background refetching
- Caching
- Optimistic updates
- Pagination
- Infinite queries

## 📝 Form Handling

Forms are handled using React Hook Form with Zod validation. This combination provides:
- Type-safe form validation
- Efficient form state management
- Minimal re-renders
- Easy integration with UI components

## 🚀 Deployment

The project can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) 