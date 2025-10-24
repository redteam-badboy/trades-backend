import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // Allow requests from all origins — for production, replace "*" with your frontend URL
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight (OPTIONS) requests
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: response.headers,
    });
  }

  return response;
}

// Apply middleware to all API routes
export const config = {
  matcher: ["/api/:path*"],
};
