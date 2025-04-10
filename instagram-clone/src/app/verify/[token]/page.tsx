import VerifyPage from "@/app/components/verify";

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const token = (await params).token;
  console.log(token);
  return (
    <VerifyPage token={token} />
  );
}
