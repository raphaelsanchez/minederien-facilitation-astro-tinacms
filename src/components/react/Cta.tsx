type Props = {
  heading: string;
};

const Cta = (props: Props) => {
  return <div className="bg-amber-500">{props.heading}</div>;
};

export default Cta;
