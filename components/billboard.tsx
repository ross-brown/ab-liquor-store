import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-[4/1.3] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}
