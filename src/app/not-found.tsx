'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Instant redirect to home page
    router.replace('/');
  }, [router]);

  return null; // No UI at all
}
