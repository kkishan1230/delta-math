const { styled, Button } = require("@mui/material")

export const IndexButtons = styled(Button)({
  backgroundColor: "#f9a622",
  width: "226px",
  textTransform: "unset",
  padding: "10px 10px",
  fontSize: "24px",
  fontFamily: "georgiaBold",
  lineHeight: 1,
  "&:hover": {
    backgroundColor: "#f9a622",
    opacity: "0.9",
  },
  "@media (max-width:900px) and (min-width:720px)": {
    fontSize: "14px",
    padding: "17px",
  },
  "@media (min-width:600px) and (max-width:719px)": {
    fontSize: "14px",
    padding: "17px",
  },
  "@media (min-width:480px) and (max-width:599px)": {
    fontSize: "12px",
    padding: "14px",
  },
  "@media (max-width:479px)": {
    fontSize: "12px",
    padding: "12px 0px",
  },
})