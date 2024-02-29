import ScreenSizeIndicator from "./screensize-indicator";

export default function Container(props) {
  const { children } = props;

  return (
    <main id="container" className=" mx-auto px-4">
      {children}
      <ScreenSizeIndicator />
    </main>
  );
}
