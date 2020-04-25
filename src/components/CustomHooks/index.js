import { useMemo } from "react";

export const useGetColor = (arrOfId) => {
  const ourColors = [
    "#f5222d",
    "#9e1068",
    "#13c2c2",
    "#7cb305",
    "#52c41a",
    "#faad14",
    "#fa541c",
    "#ffec3d",
  ];

  const randomIndex = Math.floor(Math.random() * 7);
  const randomColor = ourColors[randomIndex];
// eslint-disable-next-line
  return useMemo(() => randomColor, [arrOfId]);
};
