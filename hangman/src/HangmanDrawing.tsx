// Dynamically show head, arms, legs, torso etc via variables
const HEAD = (
  <div
    className="head"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid orange",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    className="head"
    style={{
      width: "10px",
      height: "100px",
      background: "orange",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);
const R_ARM = (
  <div
    className="head"
    style={{
      width: "10px",
      height: "100px",
      background: "orange",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);
const L_ARM = (
  <div
    className="head"
    style={{
      width: "10px",
      height: "100px",
      background: "orange",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);
const R_LEG = (
  <div
    className="head"
    style={{
      width: "10px",
      height: "100px",
      background: "orange",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);
const L_LEG = (
  <div
    className="head"
    style={{
      width: "10px",
      height: "100px",
      background: "orange",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);

export function HangmanDrawing() {
  return (
    <div className="canvas" style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {R_ARM}
      {L_ARM}
      {R_LEG}
      {L_LEG}
      <div
        className="rope"
        style={{
          height: "50px",
          width: "10px",
          background: "brown",
          marginLeft: "310px",
          marginBottom: "-60px",
        }}
      />
      <div
        className="bar"
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        className="pole"
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        className="base"
        style={{ height: "10px", width: "250px", background: "black" }}
      />
    </div>
  );
}
