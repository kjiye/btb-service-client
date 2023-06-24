"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { push, pathname, query } = router;

  return (
    <div style={{ padding: 50 }}>
      <h1>Home Page</h1>
      <p>
        <button onClick={() => router.push("/view")}>
          Go to the 3d render test page
        </button>
      </p>
      <br />
      {/* <p>
        <input type="checkbox" onChange={() => router.push("/layout")}></input>{" "}
        Check me to go to the layout sample page
      </p> */}
    </div>
  );
}
