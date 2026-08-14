'use client';
import { Trash2 } from 'lucide-react';
import { FormEvent } from 'react';

export default function DeleteForm({ id, action }: { id: string, action: (formData: FormData) => void }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!window.confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      e.preventDefault();
    }
  };

  return (
    <form action={action} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="inline-flex items-center gap-0.5 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2.5 rounded uppercase text-[9px] tracking-wide cursor-pointer"
      >
        <Trash2 size={10} /> Delete
      </button>
    </form>
  );
}
