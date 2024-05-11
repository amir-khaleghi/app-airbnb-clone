import AddLocation from '@/app/components/AddLocation';
import db from '@/lib/db';
import { params } from '@/lib/types';

const addLocationPage = async ({ params }: params) => {
  /* Get Current Image -------------- */
  const home = await db.home.findUnique({
    where: { id: params.id },
    select: { location: true },
  });

  const isAddress = home?.location ? true : false;

  // ─── Return ──────────────────────────────────────────────

  return (
    <div>
      <AddLocation
        isAddress={isAddress}
        params={params}
      />
    </div>
  );
};
export default addLocationPage;
