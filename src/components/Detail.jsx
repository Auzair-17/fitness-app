import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { excerciseOptions } from "../utils/fetchData";

const Detail = ({ excerciseDetail }) => {
  const { bodyPart, name, target, equipment, description, id } =
    excerciseDetail;
  const [gifUrl, setGifUrl] = useState(null);
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  useEffect(() => {
    let objectUrl;

    const loadGif = async () => {
      try {
        if (!id) return;

        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/image?resolution=180&exerciseId=${id}`,
          excerciseOptions,
        );

        if (!response.ok) throw new Error("Failed to fetch gif");

        const blob = await response.blob();
        objectUrl = URL.createObjectURL(blob);
        setGifUrl(objectUrl);
      } catch (err) {
        console.error(err);
      }
    };

    loadGif();

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [id]);

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">{description}</Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
