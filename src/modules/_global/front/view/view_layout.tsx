"use client";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Group,
  Image,
  NavLink,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "../components/MobileNavbar.module.css";
import { COLOR } from "../../fun/color";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { menuNavbarMobile, menuNavbarlink } from "../val/data_menu_navbar";

export function MobileNavbar({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const menuNavbar = menuNavbarlink;
  const menuNavbarM = menuNavbarMobile;

  useShallowEffect(() => {
    setActive(pathname);
  });

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          border: "none",
        }}
      >
        <Group h="100%" p={10} pl={30} pr={30}>
          <Group justify="space-between" style={{ flex: 1 }} pb={20}>
            <Image src={"/img/logo.png"} alt="logo" h={40} w={"auto"} />
            <Group ml="xl" gap={0} visibleFrom="lg">
              {menuNavbar.map((item) => {
                return (
                  <Box key={item.id} m={"xs"}>
                    <NavLink
                      active
                      label={
                        active === item.name ? (
                          <Box>
                            <Text fz={14} fw={500} c={COLOR.gray}>
                              {item.name}
                            </Text>
                          </Box>
                        ) : (
                          <Box>
                            <Text fz={14} fw={500} c={COLOR.gray}>
                              {item.name}
                            </Text>
                          </Box>
                        )
                      }
                      variant="subtle"
                      color={COLOR.gray}
                    />
                  </Box>
                );
              })}
            </Group>
            <Group>
              <Group ml="xl" gap={0} visibleFrom="lg">
                <Button
                  variant="subtle"
                  size={"md"}
                  fz={14}
                  c={"dark"}
                  radius={"xl"}
                >
                  Masuk
                </Button>
              </Group>
              <Button size={"md"} radius={"xl"} fz={14} bg={COLOR.green}>
                Daftar Sekarang
              </Button>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>

      <Box pos={"fixed"} bottom={0} style={{zIndex: 99999}} bg={"white"} w={"100%"}>
        <Group justify="space-around" hiddenFrom="lg">
          {menuNavbarM.map((item) => {
            return (
              <Box key={item.id}>
                <Group justify="center">
                  <ActionIcon
                    variant="subtle"
                    color="#757575"
                    size="xl"
                    aria-label="home"
                  >
                    <item.icon
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group>
                <Text c={"#757575"} ta={"center"} fz={14}>
                  {item.name}
                </Text>
              </Box>
              // </Box>
            );
          })}
        </Group>
      </Box>
    </AppShell>
  );
}
