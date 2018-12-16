import { h, Component } from "hyperapp";

interface Attributes {}

const backDropStyle = `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;

const loaderStyle = `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  background-image: url("/dist/ajax-loader.svg");
`;

export const Loading: Component<Attributes> = () => {
  return (
    <div style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;">
      <div style={backDropStyle} />
      <div style={loaderStyle} />
    </div>
  );
};
