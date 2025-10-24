import { NextResponse } from "next/server";
import connectDB from "@/app/lib/utils/connectDB";
import TradeModel from "@/app/lib/models/trade";
import { handleCors } from "../cors"; // ✅ import helper

// 🧠 Handle CORS for all requests
export async function OPTIONS(request) {
  return handleCors(request);
}

// 🧠 GET - Fetch all trades
export async function GET(request) {
  const response = handleCors(request); // add headers
  try {
    await connectDB();
    const trades = await TradeModel.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(trades), {
      status: 200,
      headers: response.headers,
    });
  } catch (error) {
    console.error("Error fetching trades:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch trades" }),
      { status: 500, headers: response.headers }
    );
  }
}

// 🧾 POST - Add a new trade
export async function POST(request) {
  const response = handleCors(request);
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
        { status: 400, headers: response.headers }
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
      headers: response.headers,
    });
  } catch (error) {
    console.error("Error creating trade:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to create trade" }),
      { status: 500, headers: response.headers }
    );
  }
}
