'use client';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const Counter = () => {
  const [amount, setAmount] = useState(0);

  /* Handler ------------------------ */
  // increase
  function handleIncrease() {
    setAmount(amount + 1);
  }
  // Decrease
  function handleDecrease() {
    if (amount > 0) setAmount(amount - 1);
  }
  // ─────────────────────────────────────────────────────────

  return (
    <div className="flex items-center gap-4">
      <Button onClick={handleIncrease}>
        <Plus />
      </Button>
      <p>{amount}</p>
      <Button onClick={handleDecrease}>
        <Plus />
      </Button>
    </div>
  );
};
export default Counter;
