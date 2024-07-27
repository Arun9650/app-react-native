import { Text, TextStyle, TextProps } from "react-native";



interface SubTextProps {
  borderWidth?: number;
  borderColor?: string;
  text: string;
  size: number;
  color: string;
  family?: string;
  letterSpacing?: number;
  align?: "left" | "center" | "right" | "justify";
  leading?: number;
}

const SubText = ({
  borderWidth,
  borderColor,
  text,
  size,
  color,
  family,
  letterSpacing,
  align = "left",
  leading,
}: SubTextProps) => {
  const style: TextStyle = {
    fontSize: size,
    color: color,
    fontFamily: family,
    letterSpacing: letterSpacing ? letterSpacing : -0.02,
    textAlign: align,
    lineHeight: leading,
    borderWidth: borderWidth,
    borderColor: borderColor,
  };

  return <Text style={style}>{text}</Text>;
};

export default SubText;