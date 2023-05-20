import React, { useRef } from "react";
import CateroriesItem from "./CategoriesItem/CateroriesItem";
import classes from "./CategoriesList.module.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Button, useMediaQuery } from "@mui/material";
import Icon from "../ui/icons/Icon";
import CategoriesItemMobile from "./CategoriesItem/CategoriesItemMobile";

const CategoriesList = ({ categories }) => {
  const tablet = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      {tablet && (
        <div className={classes.list}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            style={{ paddingLeft: "3rem" }}
            slidesPerView="auto"
            breakpoints={{
              769: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
              1180: {
                slidesPerView: 7,
              },
            }}
            loop={true}
          >
            {categories.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{ width: "fit-content" }}
              >
                <CateroriesItem
                  image={item.image}
                  name={item.name}
                />
              </SwiperSlide>
            ))}
            <div
              ref={navigationPrevRef}
              className={`${classes["pagination-button"]} ${classes["pagination-button__left"]}`}
            >
              <Icon iconId="chevron_left" />
            </div>
            <div
              ref={navigationNextRef}
              className={`${classes["pagination-button"]} ${classes["pagination-button__right"]}`}
            >
              <Icon iconId="chevron_right" />
            </div>
          </Swiper>
        </div>
      )}

      {!tablet && (
        <div className={classes.list}>
          <div className={classes.button}>
            <Button
              type="round"
              variant="contained"
            >
              <Icon iconId="format_list_bulleted" />
            </Button>
          </div>
          {categories.map((item) => (
            <CategoriesItemMobile
              key={item.id}
              name={item.name}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriesList;
