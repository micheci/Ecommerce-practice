import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchHeroBanner } from "../store/heroBannerSlice";
import { Box } from "@mui/material";

const HeroBanner = () => {
  const dispatch = useAppDispatch();
  const heroBanner: string = useAppSelector(
    (state) => state.heroBanner.data as string
  );

  useEffect(() => {
    dispatch(fetchHeroBanner());
  }, [dispatch]);

  useEffect(() => {
    if (heroBanner && heroBanner.length > 0) {
      //   console.log("Hero banner URL:", heroBanner[0].url);
    }
  }, [heroBanner]);

  return (
    <Box component="div" sx={{ width: "100%", marginTop: "1rem" }}>
      {heroBanner && heroBanner.length > 0 && (
        <img
          src={heroBanner[0].url}
          alt="Hero banner"
          style={{ width: "100%", maxHeight: "300px", borderRadius: "10px" }}
        />
      )}
    </Box>
  );
};

export default HeroBanner;
