"use client";
import { COLOR } from "@/modules/_global/fun/color";
import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Image,
  NavLink,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useShallowEffect } from "@mantine/hooks";
import classes from "..//../_global/front/components/icon..module.css";
import { aboutUs, category } from "../val/data_meu_footer";



export default function Footer() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const dataCategory = category
  const dataAbout = aboutUs

  useShallowEffect(() => {
    setActive(pathname);
  });
  return (
    <>
      <Box pl={30} pr={30} pt={50}>
        <Box
          style={{
            backgroundColor: "#F9FFF6",
            padding: 30,
            borderRadius: 20,
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <Grid grow gutter="xl">
            <Grid.Col span={{ md: 4, lg: 4 }}>
              <Group>
                <Image src={"/img/logo.png"} alt="logo" />
              </Group>
              <Box pt={20}>
                <Text fz={14} c={COLOR.gray}>
                  Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                </Text>
                <Text fz={14} c={COLOR.gray}>
                  Kecamatan Setiabudi, Kota Jakarta Selatan,
                </Text>
                <Text fz={14} c={COLOR.gray}>
                  Daerah Khusus Ibukota Jakarta 12950
                </Text>
              </Box>
              <Group pt={10}>
                <ActionIcon
                  variant="subtle"
                  color={COLOR.green}
                  size="xl"
                  radius="xl"
                  aria-label="email"
                >
                  <HiOutlineMail style={{ width: "20px", height: "20px" }} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color={COLOR.green}
                  size="xl"
                  radius="xl"
                  aria-label="phone"
                >
                  <HiOutlinePhone style={{ width: "20px", height: "20px" }} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color={COLOR.green}
                  size="xl"
                  radius="xl"
                  aria-label="instagram"
                >
                  <FaInstagram style={{ width: "20px", height: "70%" }} />
                </ActionIcon>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ md: 2, lg: 2 }}>
              <Text fz={18} fw={500}>
                Categories
              </Text>
              <Box pt={10}>
                {dataCategory.map((item) => {
                  return (
                    <Box key={item.id} pt={10}>
                      <Text fz={14} c={COLOR.gray} style={{cursor: "pointer"}}>
                        {item.name}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </Grid.Col>
            <Grid.Col span={{ md: 2, lg: 2 }}>
              <Text fz={18} fw={500}>
                About Us
              </Text>
              <Box pt={10}>
                {dataAbout.map((item) => {
                  return (
                    <Box key={item.id} pt={10}>
                      <Text fz={14} c={COLOR.gray} style={{cursor: "pointer"}}>
                        {item.name}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </Grid.Col>
            <Grid.Col span={{ md: 4, lg: 4 }}>
              <Text fz={18} fw={500}>
                Newsletter
              </Text>
              <Box pt={20}>
                <Text fz={14} c={COLOR.gray}>
                  Get now free 50% discount for alll{" "}
                </Text>
                <Text fz={14} c={COLOR.gray}>
                  products on your first order{" "}
                </Text>
              </Box>
              <Box pt={20}>
                <TextInput
                  size="md"
                  radius={"8px"}
                  placeholder="Your email address"
                  rightSectionWidth={42}
                  rightSection={
                    <Box pr={15} style={{ cursor: "pointer" }}>
                      <Box
                        style={{
                          borderRadius: " 0px 8px 8px 0px",
                          backgroundColor: COLOR.green,
                          padding: 10,
                        }}
                      >
                        <Text style={{ cursor: "pointer" }} fz={14} c={"white"}>
                          SEND
                        </Text>
                      </Box>
                    </Box>
                  }
                />
              </Box>
              <Stack pt={20}>
                <Group wrap="nowrap" gap={10}>
                  <HiOutlineMail size={20} className={classes.icon} />
                  <Text fz={14}>elemesid@gmail.com</Text>
                </Group>
                <Group wrap="nowrap" gap={10}>
                  <HiOutlinePhone size={20} className={classes.icon} />
                  <Text fz={14}>0888 1111 2222 </Text>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
      <Group justify="center" pt={40} pb={20}>
        <Text fz={12} c={COLOR.gray}>© 2021 ELEMES ID. ALL RIGHTS RESERVED</Text>
      </Group>
    </>
  );
}
