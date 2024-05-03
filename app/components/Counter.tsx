'use client';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

const Counter = ({ amount, setAmount }) => {
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
    <div className="flex items-center gap-4 p-2">
      <Button
        size="icon"
        variant="outline"
        onClick={handleDecrease}
      >
        <Minus />
      </Button>
      <p>{amount}</p>
      <Button
        size="icon"
        variant="outline"
        onClick={handleIncrease}
      >
        <Plus />
      </Button>
    </div>
  );
};
export default Counter;
