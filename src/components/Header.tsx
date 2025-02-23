"use client";
import Link from "next/link";
import * as React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import SearchBar from "./SearchBar";

const Header: React.FC = ({}) => {
  return (
    <div className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer w-24 lg:w-28"
            />
          </Link>
          <div className="lg:hidden">
            <Unauthenticated>
              <SignInButton mode="modal">
                <Button>Sign in</Button>
              </SignInButton>
            </Unauthenticated>
            <Authenticated>
              <UserButton />
            </Authenticated>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="hidden lg:block ml-auto">
          <Authenticated>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </Authenticated>

          <Unauthenticated>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </Unauthenticated>
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          <Authenticated>
            <Link href="/seller" className="flex-1">
              {/*  <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Sell Tickets
              </button> */}

              <Button className="w-full">Sell Tickets</Button>
            </Link>

            <Link href="/tickets" className="flex-1">
              {/* <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                    My Tickets
                </button> */}
              <Button className="w-full">My Tickets</Button>
            </Link>
          </Authenticated>
        </div>
      </div>
    </div>
  );
};

export default Header;
