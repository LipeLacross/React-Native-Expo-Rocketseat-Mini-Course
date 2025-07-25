## 🌐 [English Version of README](README_EN.md)

# RocketLinks

A mobile application developed with React Native/Expo to organize and manage your favorite links by categories. With an intuitive and modern interface, RocketLinks allows you to save, organize, and quickly access all your important links in one place.

## 🔨 Project Features

- ✅ **Add links by category**: Organize your links into custom categories  
- ✅ **Organized viewing**: See all your links clearly categorized  
- ✅ **Delete links**: Remove links that are no longer needed  
- ✅ **Open links**: Access your links directly in your device's browser  
- ✅ **Local storage**: All data is saved locally on the device  
- ✅ **Responsive interface**: Adaptive design for different screen sizes  
- ✅ **Smooth navigation**: Optimized user experience with Expo Router  

### 📸 Project Screenshots

<img width="540" height="1200" alt="Tela Principal com Links" src="https://github.com/user-attachments/assets/27bb1c74-fc00-4b77-89ce-c6d83e4d6f9f" />
<img width="540" height="1200" alt="Formulário de Adicionar Link" src="https://github.com/user-attachments/assets/440117bf-a462-41d3-9a1f-b0f3386d432e" />
<img width="540" height="1200" alt="Links Organizados por Categoria" src="https://github.com/user-attachments/assets/8bb79dc2-4178-4007-96b4-3022c1812fbe" />

## ✔️ Technologies and Tools Used

- **React Native**: Framework for cross-platform mobile app development  
- **Expo**: Platform for React Native app development and build  
- **TypeScript**: JavaScript superset with static typing  
- **Expo Router**: File-based routing system for navigation  
- **AsyncStorage**: Persistent local storage for data  
- **Expo Linking**: To open URLs on external browser  
- **React Hooks**: useState, useEffect for state management  
- **StyleSheet**: Native styling system for React Native  

## 📁 Project Structure

```
src/
├── app/
│   ├── _layout.tsx          // Main layout component of the app
│   ├── index.tsx            // Main screen with the list of links
│   ├── add.tsx              // Screen to add new links
│   ├── +not-found.tsx       // 404 error screen
│   └── modal.tsx            // Modal component
├── components/
│   ├── Link/
│   │   ├── index.tsx        // Individual link component
│   │   └── styles.ts        // Styles for Link component
│   ├── Categories/
│   │   ├── index.tsx        // Category selector component
│   │   └── styles.ts        // Styles for Categories component
│   └── Button/
│       ├── index.tsx        // Reusable button component
│       └── styles.ts        // Styles for Button component
├── storage/
│   └── linkStorage.ts       // Functions to manage AsyncStorage data
├── utils/
│   └── categories.ts        // Category utilities and config
└── styles/
    └── indexStyles.ts       // Global styles for the app
```

## 🛠️ How to Run the Project Locally

Follow these steps to run the project locally:

1. **Make sure Node.js is installed**:  
   - [Download Node.js](https://nodejs.org/) if you don't have it installed already.  
   - Verify installation with:
     ```bash
     node -v
     ```
2. **Clone the repository**:  
   - Run the command below replacing `` with your repo URL:
     ```bash
     git clone 
     ```
3. **Navigate to the project directory**:
   ```bash
   cd RocketLinks
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
5. **Start the development server**:
   ```bash
   npx expo start
   ```
6. **Run on your device**:
   - Using **Expo Go**, scan the QR code with the Expo Go app on your device  
   - On Android emulator: press `a` in the terminal  
   - On iOS simulator (macOS only): press `i` in the terminal  

## 🌐 Deployment

### 📱 Generate APK for Android

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```
2. **Login on Expo**:
   ```bash
   eas login
   ```
3. **Configure your project for builds**:
   ```bash
   eas build:configure
   ```
4. **Build APK for testing**:
   ```bash
   eas build -p android --profile preview
   ```
5. **Build for production (Google Play Store)**:
   ```bash
   eas build -p android --profile production
   ```

### 🍎 Generate IPA for iOS

1. **Build for iOS testing**:
   ```bash
   eas build -p ios --profile preview
   ```
2. **Build for App Store distribution**:
   ```bash
   eas build -p ios --profile production
   ```

### 📦 Distribution

- **APK**: Install directly on Android devices  
- **AAB**: For submission to Google Play Store  
- **IPA**: For iOS devices or App Store submission  
- **Expo Go**: For development testing  

### 🚀 Automated Deployment

You can automate builds using GitHub Actions by adding `.github/workflows/build.yml`:

```yaml
name: Build App
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: eas build --platform android --non-interactive
```


