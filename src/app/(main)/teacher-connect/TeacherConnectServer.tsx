import { auth } from "@clerk/nextjs";
import TeacherConnectClient from "./TeacherConnectClient";

const TeacherConnectServer = async () => {
  const { userId } = auth();

  return <TeacherConnectClient userId={userId !} />;
};

export default TeacherConnectServer;