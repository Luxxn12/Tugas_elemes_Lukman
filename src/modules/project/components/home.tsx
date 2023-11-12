"use client";
import { COLOR } from "@/modules/_global/fun/color";
import {
  BackgroundImage,
  Box,
  Button,
  Grid,
  Group,
  Image,
  Paper,
  Rating,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";

export default function Home() {
  return (
    <>
      <BackgroundImage src="/img/bg.png" pb={10}>
        <Box pt={40}>
          <Group>
            <Grid pl={30} pr={30}>
              <Grid.Col span={{ base: 12, md: 7, lg: 7 }}>
                <Group justify="center">
                  <Group>
                    <Text c={COLOR.green} fz={64} fw={500}>
                      Good Food Us
                    </Text>
                    <Text c={COLOR.green} fz={64} fw={500}>
                      Good Mood
                    </Text>
                    <Text c={COLOR.gray}>
                      I would think that conserving our natural resources should
                      be a conservative position: Not to waste food, and not to
                      throw away a lot of the food that we buy.
                    </Text>
                    <Group pt={20}>
                      <Button
                        mr={20}
                        size={"md"}
                        radius={"xl"}
                        fz={14}
                        bg={COLOR.green}
                      >
                        Daftar Sekarang
                      </Button>
                      <Button
                        bg={"#F2F2F2"}
                        c={"dark"}
                        radius={"xl"}
                        fz={14}
                        size={"md"}
                      >
                        About Us
                      </Button>
                    </Group>
                  </Group>
                </Group>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
                <Group justify="center">
                  <Box>
                    <Group justify="center">
                      <Image
                        src={"/img/img9.png"}
                        alt="img9"
                        h={"417px"}
                        w={"auto"}
                      />
                    </Group>
                    <Grid>
                      <Grid.Col span={{ md: 7, lg: 7 }}>
                        <Group>
                          <Box
                            style={{
                              backgroundColor: "white",
                              padding: 10,
                              borderRadius: 20,
                              top: "50%",
                            }}
                          >
                            <Group>
                              <Image
                                src={"/img/img10.png"}
                                h={54}
                                w={"auto"}
                                alt="img10"
                              />
                              <Box>
                                <Text fz={14}>Green Salad Tomato</Text>
                                <Text fz={12} c={COLOR.gray}>
                                  Tomato
                                </Text>
                                <Rating defaultValue={4} />
                              </Box>
                            </Group>
                          </Box>
                        </Group>
                      </Grid.Col>
                    </Grid>
                  </Box>
                </Group>
              </Grid.Col>
            </Grid>
          </Group>
        </Box>
      </BackgroundImage>
    </>
  );
}
