import * as Icons from "react-icons/lu";

type Props = {
  iconName: string;
};

const ReactIcon = ({ iconName }: Props) => {
  const Icon = Icons[iconName as keyof typeof Icons];

  if (!Icon) {
    return <div>Icon "{iconName}" not found</div>;
  }

  return <Icon size={24} />;
};

export default ReactIcon;
