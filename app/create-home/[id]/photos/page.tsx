import AddPhoto from '@/app/components/AddPhoto';
import db from '@/lib/db';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const AddPhotoPage = async ({ params }: { params: { id: string } }) => {
  /* Get Current Image -------------- */
  const home = await db.home.findUnique({
    where: { id: params.id },
    select: { photo: true },
  });

  const isHomePhoto = home?.photo ? true : false;
  const imageUrl = home?.photo ?? null;
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex-col flex items-center justify-center">
      <AddPhoto
        imageUrl={imageUrl}
        isHomePhoto={isHomePhoto}
        params={params}
      />
    </div>
  );
};
export default AddPhotoPage;
