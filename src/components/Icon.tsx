import { genreList } from "../assets/svg/genres";

interface IconProps {
  name: keyof typeof genreList;
  color: string;
}

export function Icon({ name, color }: IconProps) {
  const Genre = genreList[name];

  return <Genre color={color} />;
}
