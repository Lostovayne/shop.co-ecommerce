"use client"
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/users/users.store";

const HomePage = () => {

  const user = useUserStore(state => state.users[0])

  console.log("user", user)

  return (
    <>
      <div>HomePage</div>
      <Button variant="default">Default</Button>
    </>
  );
}
export default HomePage

//xd