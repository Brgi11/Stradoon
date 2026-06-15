import type { MenuItemData } from "@/data/content";
import MenuItem from "@/components/MenuItem";

type MenuListProps = {
  items: MenuItemData[];
};

export default function MenuList({ items }: MenuListProps) {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-elegant">
        <div className="mx-auto max-w-6xl space-y-5 sm:space-y-6">
          {items.map((item, index) => (
            <MenuItem key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
