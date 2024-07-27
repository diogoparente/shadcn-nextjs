import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { Public } from '@/layouts/Public';

export default function CenteredLayout(props: { children: React.ReactNode }) {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <Public>
      <div className="flex justify-center">{props.children}</div>
    </Public>
  );
}
