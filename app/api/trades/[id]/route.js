// app/api/trade/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/utils/connectDB';
import TradeModel from '@/app/lib/models/trade';

// Helper function to check if an ObjectId is valid
function isValidObjectId(id) {
  return /^[a-fA-F0-9]{24}$/.test(id); // MongoDB ObjectId is 24 hex characters
}

// GET request handler to fetch a trade by ID
export async function GET(req, { params }) {
  const { id } = params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ message: 'Invalid trade ID' }, { status: 400 });
  }

  try {
    await connectDB(); // Connect to MongoDB
    const trade = await TradeModel.findById(id);

    if (!trade) {
      return NextResponse.json({ message: 'Trade not found' }, { status: 404 });
    }

    return NextResponse.json(trade, { status: 200 });
  } catch (error) {
    console.error('Error fetching trade:', error);
    return NextResponse.json({ message: 'Failed to fetch trade', error: error.message }, { status: 500 });
  }
}

// PUT request handler to update a trade
export async function PUT(req, { params }) {
  const { id } = params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ message: 'Invalid trade ID' }, { status: 400 });
  }

  try {
    const data = await req.json(); // Get the body of the request

    await connectDB(); // Connect to MongoDB

    const updatedTrade = await TradeModel.findByIdAndUpdate(id, data, { new: true });

    if (!updatedTrade) {
      return NextResponse.json({ message: 'Trade not found' }, { status: 404 });
    }

    return NextResponse.json(updatedTrade, { status: 200 });
  } catch (error) {
    console.error('Error updating trade:', error);
    return NextResponse.json({ message: 'Failed to update trade', error: error.message }, { status: 500 });
  }
}

// DELETE request handler to remove a trade by ID
export async function DELETE(req, { params }) {
  const { id } = params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ message: 'Invalid trade ID' }, { status: 400 });
  }

  try {
    await connectDB(); // Connect to MongoDB
    const deletedTrade = await TradeModel.findByIdAndDelete(id);

    if (!deletedTrade) {
      return NextResponse.json({ message: 'Trade not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Trade deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting trade:', error);
    return NextResponse.json({ message: 'Failed to delete trade', error: error.message }, { status: 500 });
  }
}
