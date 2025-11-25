'use client';

import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Mental Coach Assistant</h1>
            <p className="text-indigo-100 text-sm mt-1">
              Your supportive companion for stress, motivation, habits, and confidence.
            </p>
          </div>
          <ChatInterface />
        </div>
      </div>
    </main>
  );
}
