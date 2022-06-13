import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  {
    label: "Step 1",
    description: `Registration Check`
  },
  {
    label: "Step 2",
    description: "Minting"
  },
  {
    label: "Step 3",
    description: `Done`
  }
];

// MUI Vertical stepper for stage info of nft minting | stage prop is dynamically set
function VerticalLinearStepper({ stage }) {
  const [activeStep, setActiveStep] = React.useState(stage);

  React.useEffect(() => setActiveStep(stage), [stage])

  return (
    <div
      style={{
        marginLeft: "70px"
      }}>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#020246', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: '#020246', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#020246', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
              {
                color: '#020246', // Just text label (ACTIVE)
              },
            }}>
              <StepLabel
                style={{ fontSize: "12px", fontFamily: "Poppins", fontStyle: "normal" }}
                optional={step.description}>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>

  );
}

export default VerticalLinearStepper; /* withStyles(styles)(VerticalLinearStepper); */