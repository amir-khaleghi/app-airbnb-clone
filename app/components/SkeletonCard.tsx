import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="  flex gap-2 flex-col items-start justify-between   rounded-xl">
      <Skeleton className=" w-[250px] h-[250px] bg-zinc-200" />
      <Skeleton className=" w-[40px] h-[10px] bg-zinc-200" />
      <Skeleton className=" w-[180px] h-[10px] bg-zinc-200" />
      <Skeleton className=" w-[200px] h-[10px] bg-zinc-200" />
      <Skeleton className=" w-[40px] h-[10px] bg-zinc-200" />
    </div>
  );
}
export default SkeletonCard;
