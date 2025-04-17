'use client';
import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSession } from '../SessionContext';

export default function Layout() {
  const { session, loading } = useSession();
  const location = useLocation();

  if (loading) return <LinearProgress />;

  if (!session) {
    const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`;
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Outlet />
    </div>
  );
}
