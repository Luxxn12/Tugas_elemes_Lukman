import { COLOR } from "@/modules/_global/fun/color";
import {
  Box,
  Button,
  Group,
  Image,
  Rating,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { dataTrending } from "../val/data_menu_trending";

export default function Trending() {
  const data = dataTrending;
  return (
    <>
      <Box pl={30} pr={30} pt={30}>
        <Text fz={38} fw={500}>
          Browser Our Trending
        </Text>
        <Text fz={38} fw={500} c={COLOR.green} inherit>
          Receipt
        </Text>
        <Box pt={40}>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {data.map((item) => {
              return (
                <Box key={item.id}>
                  <Box
                    style={{
                      backgroundColor: item.color,
                      padding: 20,
                      borderRadius: 17,
                      height: 306,
                      width: "auto",
                      cursor: "pointer"
                    }}
                  >
                    <Box pt={10}>
                      <Image
                        radius={10}
                        src={item.img}
                        h={140}
                        w={"auto"}
                        alt="img1"
                      />
                    </Box>
                    <Text mt={20} fz={26} fw={500}>
                      {item.title}
                    </Text>
                    <Text fz={18} fw={500} c={COLOR.green}>
                      {item.name}
                    </Text>
                    <Box pb={10} mt={15}>
                      {item.reting}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
        <Group justify="center" pt={50}>
          <Button size={"md"} radius={"xl"} fz={14} bg={COLOR.green}>
            ALL Receipt
          </Button>
        </Group>
      </Box>
    </>
  );
}
