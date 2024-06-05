import { FunctionComponent, useMemo, CSSProperties } from "react";
import { Box, Typography, Button } from "@mui/material";

export type FullNameRowType = {
  fullNameLabel?: string;
  nameSurname?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const UserProfileRow: FunctionComponent<FullNameRowType> = ({
                                                              fullNameLabel,
                                                              nameSurname,
                                                              propMinWidth,
                                                            }) => {
  const nameSurnameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
      <Box
          sx={{
            width: "1040px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "start",
            pt: 2,
            px: 0,
            pb: 6,
            gap: 3,
            textAlign: "left",
            fontSize: "base",
            color: "text.primary",
            fontFamily: "text.medium.normal",
            borderTop: 1,
            borderColor: "text.primary",
            boxSizing: "border-box",
          }}
      >
        <Typography
            sx={{
              flex: 1,
              fontSize: "base",
              fontWeight: "bold",
              lineHeight: "150%",
            }}
        >
          {fullNameLabel}
        </Typography>
        <Box
            sx={{
              width: "720px",
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "start",
              gap: 3,
              maxWidth: "100%",
            }}
        >
          <Typography
              sx={{
                flex: 1,
                lineHeight: "150%",
                display: "inline-block",
                minWidth: "91px",
                maxWidth: "100%",
                ...nameSurnameStyle,
              }}
          >
            {nameSurname}
          </Typography>
          <Button
              variant="outlined"
              sx={{
                py: 1,
                px: 2,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                textTransform: "none",
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                },
              }}
          >
            <img
                src="/manage-button-icon--editalt.svg"
                alt=""
                style={{ height: "24px", width: "24px" }}
            />
            <Typography
                sx={{
                  fontSize: "base",
                  fontFamily: "text.medium.normal",
                  color: "color.neutral.darker",
                  textAlign: "left",
                  minWidth: "30px",
                }}
            >
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
  );
};

export default UserProfileRow;
