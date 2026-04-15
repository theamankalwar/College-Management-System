#!/bin/bash

echo "🚀 Starting Backend Server..."
echo ""
echo "Make sure MongoDB is running!"
echo "If not, run: brew services start mongodb-community"
echo ""

cd server
npm run dev
