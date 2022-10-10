import { Button, styled } from "@mui/material"

export const LearnMoreBtn = styled(Button)({
  backgroundColor: "#303D4E",
  fontSize: "1.25rem",
  fontFamily: "georgiaRegular",
  fontWeight: "bold",
  width: "290px",
  height: "70px",
  "&:hover": {
    backgroundColor: "#303D4E",
    opacity: 0.8,
  },
  "@media (max-width:479px)": {
    fontSize: "16px",
    width: "150px",
    height: "55px",
  },
})
