import { Avatar } from "./avatar.style";

export default function ImageAvatar({ alt, url, width, height, ...restProps }) {
  return <Avatar alt={alt} src={url} sx={{ width, height }} {...restProps} />;
}
