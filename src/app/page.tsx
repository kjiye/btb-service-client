import PageComponent from "@/component/page";
import { updateViewCount } from "@/api/fetch";

async function getPreFetch() {
  await updateViewCount(0);
}

export default function Page() {
  getPreFetch();
  return <PageComponent />;
}
