import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Cta from "../../src/components/react/Cta";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

// inject custom components into Tina rich-text editor
const components = {
  Cta: Cta,
  h1: (props: any) => <h1 className="text-6xl font-bold" {...props} />,
  h2: (props: any) => <h2 className="text-5xl font-bold" {...props} />,
};

const TinaPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  return (
    <main data-tina-field={tinaField(page, "body")}>
      <TinaMarkdown content={page.body} components={components} />
    </main>
  );
};

export default TinaPage;
