'use client';

import { useState, useEffect } from 'react';
import type { Service } from '@/types/service';
import { SERVICES } from '@/config/constants';

export function useServices(category?: string) {
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setLoading(true);
      const filtered = SERVICES.filter((s) => s.category === category);
      setServices(filtered);
      setLoading(false);
    } else {
      setServices(SERVICES);
    }
  }, [category]);

  return { services, loading };
}
