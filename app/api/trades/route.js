import { NextResponse } from "next/server";
import connectDB from "@/app/lib/utils/connectDB";
import TradeModel from "@/app/lib/models/trade";

const allowedOrigin = [
  "http://localhost:5173", // for local React dev (Vite)
  "http://localhost:3000", // for local Next dev
  "https://your-react-frontend.vercel.app", // replace with your real frontend domain
];

// 🧠 Helper to handle CORS
function corsHeaders(request) {
  const origin = request.headers.get("origin");
  const headers = new Headers({
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  // Allow only your frontend
  if (allowedOrigin.includes(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  return headers;
}

// ✅ Handle preflight requests
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

// ✅ GET - Fetch all trades
export async function GET(request) {
  try {
    await connectDB();
    const trades = await TradeModel.find().sort({ createdAt: -1 });

    return new NextResponse(JSON.stringify(trades), {
      status: 200,
      headers: corsHeaders(request),
    });
  } catch (error) {
    console.error("Error fetching trades:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch trades" }),
      { status: 500, headers: corsHeaders(request) }
    );
  }
}

// ✅ POST - Add a new trade
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      pair,
      date,
      entryPrice,
      pointOfInterest,
      confirmation,
      SL,
      TP,
      totalPL,
      result,
      lotSize,
      feeling,
    } = body;

    if (
      !pair ||
      !date ||
      !entryPrice ||
      !pointOfInterest ||
      !confirmation ||
      !SL ||
      !TP ||
      !lotSize
    ) {
      return new NextResponse(
        JSON.stringify({ error: "All required fields must be provided" }),
        { status: 400, headers: corsHeaders(request) }
      );
    }

    const newTrade = await TradeModel.create({
      pair,
      date,
      entryPrice,
      pointOfInterest,
      confirmation,
      SL,
      TP,
      totalPL: totalPL || 0,
      result,
      lotSize,
      feeling,
    });

    return new NextResponse(JSON.stringify(newTrade), {
      status: 201,
      headers: corsHeaders(request),
    });
  } catch (error) {
    console.error("Error creating trade:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to create trade" }),
      { status: 500, headers: corsHeaders(request) }
    );
  }
}
