import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const SelectItemComp = ({ items, setLocation, isAddress }) => {
  /* Return ------------------------- */
  return (
    <Select
      required={!isAddress}
      onValueChange={(value) => {
        setLocation(value);
      }}
    >
      <SelectTrigger className="w-full p-2 flex items-start justify-between ">
        <SelectValue placeholder="Select the country"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="p-2">
          <SelectLabel>Countries</SelectLabel>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
            >
              {item.label} / {item.region} - {item.flag}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectItemComp;
