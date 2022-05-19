import { Link, SxProps, Theme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../components/Images/icons/BackArrow";
import { OptionBreakdown } from "../components/OptionBreakdown";
import PageWrapper from "../components/PageWrapper/PageWrapper";

const styles: Record<string, SxProps<Theme>> = {
  backLink: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    my: 50 / 8,
  },
};

export const Option: React.VFC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Link
        color="textPrimary"
        sx={styles.backLink}
        onClick={() => {
          navigate("/");
        }}
      >
        <BackArrow />
        &nbsp; Back to Airdrops
      </Link>
      <OptionBreakdown />
    </PageWrapper>
  );
};
