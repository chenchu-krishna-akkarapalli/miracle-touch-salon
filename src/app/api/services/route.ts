import { NextResponse } from 'next/server';
import { SERVICES } from '@/config/constants';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let services = SERVICES;

  if (category) {
    services = services.filter((s) => s.category === category);
  }

  return NextResponse.json({ services });
}
