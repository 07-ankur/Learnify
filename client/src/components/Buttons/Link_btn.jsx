import { Stack } from "@mui/system";

const LinkButton = ({ children, ...props }) => (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.2}
      sx={{
        cursor: "pointer",
        color: "text.secondary",
        "&:hover": { color: "text.primary" },
      }}
      {...props}
    >
      {children}
    </Stack>
  );

export default LinkButton;