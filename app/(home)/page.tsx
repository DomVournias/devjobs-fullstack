import CreateJobForm from "@/components/forms/jobs/CreateJobForm";
import { GetAllRecords } from "@/actions/global";

export default async function Home() {
  const data = await GetAllRecords();
  return (
    <div>
      <p>Create a Job</p>
      {data ? <CreateJobForm data={data} /> : <p>Loading...</p>}
    </div>
  );
}
