import { getCurrent } from "@/features/auth/quries";
import { redirect } from "next/navigation";

const WorkspaceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div>
      WorkspaceId
      <div></div>
    </div>
  );
};

export default WorkspaceIdPage;
