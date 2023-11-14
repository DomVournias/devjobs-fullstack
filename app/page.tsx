import { GetAllRecords, GetLocations } from "@/actions/global";

import CreateJobForm from "@/components/forms/jobs/CreateJobForm";

export default async function Home() {
  const data = await GetAllRecords();
  return (
    <div>
      <div>
        <p>Create a Job</p>
        {data ? <CreateJobForm data={data} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}
