import { NextResponse } from 'next/server';
import { bookingSchema } from '@/types/booking';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const booking = parsed.data;

    // In production, persist to database and send confirmation email
    const bookingId = crypto.randomUUID();

    return NextResponse.json(
      {
        id: bookingId,
        ...booking,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  // In production, fetch from database with auth check
  return NextResponse.json({ bookings: [] });
}
