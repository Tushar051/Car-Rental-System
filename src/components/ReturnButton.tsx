import React from 'react';
import { ArrowLeftCircle } from 'lucide-react';

interface ReturnButtonProps {
  onReturn: () => void;
}

export function ReturnButton({ onReturn }: ReturnButtonProps) {
  return (
    <button
      onClick={onReturn}
      className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
    >
      <ArrowLeftCircle className="w-4 h-4" />
      Return Car
    </button>
  );
}