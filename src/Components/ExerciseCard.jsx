import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

function ExerciseCard({ exercise }) {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      style={{ borderTop: "#00ffff solid 4px" }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{ borderTop: "#00ffff solid 4px" }}
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",

            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",

            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="black"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        fontSize="22px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
