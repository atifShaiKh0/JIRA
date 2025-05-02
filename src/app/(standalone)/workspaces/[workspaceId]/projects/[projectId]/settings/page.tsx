import { getCurrent } from "@/features/auth/quries";
import { redirect } from "next/navigation";
import { ProjectIdSettingsClient } from "./client";

const ProjectIdSettingPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <ProjectIdSettingsClient />
    </div>
  );
};

export default ProjectIdSettingPage;
