import { UserButton } from '@clerk/nextjs';
export default function Home() {
  return (
    <>
      <div>
        <UserButton />
        <p>this is for Authenticated only</p>
      </div>
    </>
  );
}
