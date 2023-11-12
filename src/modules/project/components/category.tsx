"use client";
import { COLOR } from "@/modules/_global/fun/color";
import { Box, Group, Image, Text, Transition } from "@mantine/core";
import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { MenuCategory } from "../val/data_menu_category";

export default function Category() {
  const dataCategory = MenuCategory;
  return (
    <>
      <Box pl={30} pr={30} pt={30}>
        <Text fz={38} fw={500}>
          Browser Our Category
        </Text>
        <Text fz={38} fw={500} c={COLOR.green} inherit>
          Receipt
        </Text>
        <Box pt={40}>
          <Carousel
            withIndicators
            height={200}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
          >
            {dataCategory.map((item) => {
              return (
                <Box key={item.id}>
                <Carousel.Slide >
                  <Box
                    style={{
                      backgroundColor: item.color,
                      padding: 30,
                      borderRadius: 20,
                      width: "230px",
                      cursor: "pointer"
                    }}
                  >
                    <Box>
                      <Group justify="center">
                        <Image
                          src={item.image}
                          h={"52px"}
                          w={"auto"}
                          alt="icon"
                        />
                      </Group>
                      <Text mt={20} ta={"center"} fw={500}>
                        {item.name}
                      </Text>
                      <Text ta={"center"} fz={14} c={COLOR.gray}>
                        {item.item}
                      </Text>
                    </Box>
                  </Box>
                </Carousel.Slide>
                </Box>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </>
  );
}
