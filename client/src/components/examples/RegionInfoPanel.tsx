import { RegionInfoPanel } from '../RegionInfoPanel';

export default function RegionInfoPanelExample() {
  const mockRegion = {
    id: "MH",
    name: "Maharashtra",
    allocated: 2200,
    utilized: 1980,
    projects: 38
  };

  return (
    <div className="p-4 max-w-md">
      <RegionInfoPanel region={mockRegion} />
    </div>
  );
}
