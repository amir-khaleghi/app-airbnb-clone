import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from '@/components/ui/command';

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// ─── Comp ─────────────────────────────────────────── 🟩 ─

const SelectItemComp = ({ items, setLocation, isAddress }) => {
  /* Return ------------------------- */
  return (
    <div>
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
      {/* <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : 'Select framework...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover> */}
    </div>
  );
};
export default SelectItemComp;
