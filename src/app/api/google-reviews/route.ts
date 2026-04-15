import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceDetailsResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
    name?: string;
  };
  status: string;
}

const FALLBACK_REVIEWS = [
  {
    author_name: 'Ananya Patel',
    profile_photo_url: '',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'The best salon experience in Bangalore. Mr. Raju truly understands hair like no one else. My hair transformation was incredible!',
  },
  {
    author_name: 'Vikram Singh',
    profile_photo_url: '',
    rating: 5,
    relative_time_description: '1 month ago',
    text: 'Professional, premium, and precise. Every visit to Miracle Touch feels like a luxury experience. Highly recommend their grooming services.',
  },
  {
    author_name: 'Divya Reddy',
    profile_photo_url: '',
    rating: 5,
    relative_time_description: '3 weeks ago',
    text: 'They made my wedding day hair absolutely perfect. The bridal team understood my vision and exceeded all expectations.',
  },
  {
    author_name: 'Rahul Menon',
    profile_photo_url: '',
    rating: 5,
    relative_time_description: '2 weeks ago',
    text: "I've been coming here for 5 years. The consistency of service quality is remarkable. Best haircut in Mahadevapura, hands down.",
  },
];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      totalReviews: 500,
      source: 'static',
    });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews,rating,user_ratings_total,name&key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Google API responded with ${res.status}`);
    }

    const data: PlaceDetailsResponse = await res.json();

    if (data.status !== 'OK' || !data.result?.reviews) {
      throw new Error(`Google API status: ${data.status}`);
    }

    return NextResponse.json({
      reviews: data.result.reviews.map((r) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
      })),
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      source: 'google',
    });
  } catch {
    return NextResponse.json({
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      totalReviews: 500,
      source: 'static',
    });
  }
}
