import { Sidebar } from "./components/Sidebar";
import { BackgroundLogo } from "./components/BackgroundLogo";
import { Hero } from "./components/Hero";
import { KeyTargets } from "./components/KeyTargets";
import { FrictionPoints } from "./components/FrictionPoints";
import { Positioning } from "./components/Positioning";
import { Framework } from "./components/Framework";
import { PhaseDetail } from "./components/PhaseDetail";
import { KOLs } from "./components/KOLs";
import { Community } from "./components/Community";
import { Supplementary } from "./components/Supplementary";
import { MockCampaigns } from "./components/MockCampaigns";
import { PastCampaigns } from "./components/PastCampaigns";
import { SuccessMetrics } from "./components/SuccessMetrics";
import { Closing } from "./components/Closing";
import { PHASE_1_TASKS, PHASE_2_TASKS, PHASE_3_TASKS } from "@/lib/data";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-okx-bg overflow-hidden">
      <BackgroundLogo />
      <div className="okx-grid absolute inset-0 pointer-events-none" />
      <div className="relative flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="w-full max-w-[1200px] pl-5 pr-5 md:pl-8 md:pr-10 lg:pl-10 lg:pr-14">
            <Hero />
            <KeyTargets />
            <FrictionPoints />
            <Positioning />
            <Framework />
            <PhaseDetail
              id="phase-1"
              index={6}
              phaseKey="phase-1"
              tasks={PHASE_1_TASKS}
            />
            <PhaseDetail
              id="phase-2"
              index={7}
              phaseKey="phase-2"
              tasks={PHASE_2_TASKS}
            />
            <PhaseDetail
              id="phase-3"
              index={8}
              phaseKey="phase-3"
              tasks={PHASE_3_TASKS}
            />
            <KOLs />
            <Community />
            <Supplementary />
            <MockCampaigns />
            <PastCampaigns />
            <SuccessMetrics />
            <Closing />
            <div className="h-24" />
          </div>
        </main>
      </div>
    </div>
  );
}
