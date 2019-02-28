const backgroundDimmer = transparency => {
  const style = {
    position: "fixed",
    margin: "0 auto",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "5",
    backgroundColor: `rgba(0,0,0,0.${transparency})` /*dim the background*/
  };
  if (transparency === "0") {
    delete style.backgroundColor;
  }
  return style;
};

const lightBox = {
  zIndex: "10",
  margin: "auto",
  marginTop: "25px",
  padding: "25px",
  width: "600px",
  height: "80%",
  backgroundColor: "white",
  borderRadius: "5px",
  borderColor: "#2665c4",
  borderStyle: "solid",
  borderWidth: "3px"
};

const close = {
  float: "right",
  padding: "10px",
  cursor: "pointer"
};

export { backgroundDimmer, lightBox, close };
