import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function CustomNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">
          Bhargava Prabu (Mental Health COunselors)
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="/custom-ml-model">1) Custom Built ML Model</Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/gpt-3.5-turbo">2) GPT 3.5 Turbo</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
