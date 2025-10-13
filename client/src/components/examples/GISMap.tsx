import { GISMap } from '../GISMap';

export default function GISMapExample() {
  return (
    <div className="h-[600px] w-full">
      <GISMap onRegionClick={(region) => console.log('Region clicked:', region)} />
    </div>
  );
}
