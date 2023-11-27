import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import LoginButton from "../buttons/LoginButton";
import Logo from "../Logo";
import ProfileMenu from "../menus/ProfileMenu";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="border-b border-border px-[1rem]">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto h-16 ">
        <Logo />
        <nav className="flex items-center gap-6">
          <ThemeSwitcher />
          {session?.user ? <ProfileMenu /> : <LoginButton />}
        </nav>
      </div>
    </header>
  );
}

export default Header;
