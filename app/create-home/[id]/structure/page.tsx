import SelectCategory from '@/app/components/SelectCategory';

const Structure = () => {
  return (
    <div className=" flex flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center">
        Which of these best describes your place?
      </h1>
      <form action="">
        <SelectCategory />
      </form>
    </div>
  );
};
export default Structure;
