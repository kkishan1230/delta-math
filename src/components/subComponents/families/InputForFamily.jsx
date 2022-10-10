import { TextField } from "@mui/material"
import { styled } from "@mui/system"

export const InputForFamily = styled(TextField)({
  backgroundColor: "#fff",
  "@media (max-width:479px)": {
    "& .MuiInputBase-root": {},
  },
})
