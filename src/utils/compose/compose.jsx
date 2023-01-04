export const Compose = ({ providers, children }) => {
  return (
    <>
      {providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Compose;
