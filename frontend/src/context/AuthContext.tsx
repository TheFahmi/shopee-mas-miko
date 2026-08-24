'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types';
import { mockUsers } from '@/lib/mockData';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check saved user or default to Admin for easy initial review
    const savedUser = localStorage.getItem('shopee_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        return;
      } catch {
        // ignore
      }
    }
    // Default initial user is Admin
    setUser(mockUsers[0]);
    localStorage.setItem('shopee_user', JSON.stringify(mockUsers[0]));
  }, []);

  const login = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('shopee_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopee_user');
    localStorage.removeItem('shopee_token');
  };

  const switchRole = (newRole: UserRole) => {
    const found = mockUsers.find((u) => u.role === newRole) || mockUsers[0];
    setUser(found);
    localStorage.setItem('shopee_user', JSON.stringify(found));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || UserRole.ADMIN,
        isAuthenticated: !!user,
        login,
        logout,
        switchRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
