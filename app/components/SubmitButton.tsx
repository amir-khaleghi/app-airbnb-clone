import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  children: ReactNode;
  size: string;
  className: string;
  variant?:
    | 'link'
    | 'outline'
    | 'default'
    | 'destructive'
    | 'secondary'
    | 'ghost'
    | undefined;
}

const SubmitButton = ({
  size,
  children,
  className,
  variant = 'default',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  // ─── Return ──────────────────────────────────────────────

  return (
    <>
      {pending ? (
        <Button
          size={'lg'}
          className={className}
          disabled
          variant={variant}
        >
          <Loader2 className="animate-spin h-4 w-4 mx-2 " />
        </Button>
      ) : (
        <Button
          className={className}
          variant={variant}
          size={'lg'}
        >
          {children}
        </Button>
      )}
    </>
  );
};
export default SubmitButton;
