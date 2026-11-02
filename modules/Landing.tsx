import DesktopStage from "@/modules/DesktopStage";
import FluidLanding from "@/modules/FluidLanding";

export default function Landing() {
  return (
    <div className="flex relative flex-col w-full bg-[#e6dac2]">
      <DesktopStage />
      <FluidLanding />
    </div>
  );
}
