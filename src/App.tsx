import React from 'react';
import { HoneycombBackground } from './components/HoneycombBackground';
import { MainScreen } from './components/MainScreen';
import { AdvertisementUpperScreen } from './components/AdvertisementUpperScreen';
import { AdminDashboard } from './components/AdminDashboard';
import { AppProvider, useApp } from './context/AppContext';

function AppContent() {
  const { currentScreen, setCurrentScreen } = useApp();

  return (
    <HoneycombBackground>
      {currentScreen === 'home' ? (
        <MainScreen onStart={() => setCurrentScreen('advertisements')} />
      ) : (
        <AdvertisementUpperScreen onBack={() => setCurrentScreen('home')} />
      )}
      {/* Global Settings Modal [G] */}
      <AdminDashboard />
    </HoneycombBackground>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
