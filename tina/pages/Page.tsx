import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import CallToAction from "../../src/components/react/CallToAction";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

// inject custom components into Tina rich-text editor
const components = {
  cta: (props: any) => <CallToAction data={props.data} {...props} />,
  h1: (props: any) => <h1 className="text-6xl font-bold" {...props} />,
  h2: (props: any) => <h2 className="text-5xl font-bold" {...props} />,
};

/**
 * Composant de page Tina qui gère le rendu du contenu enrichi
 * @param {Props} props - Les propriétés du composant
 * @param {PageQueryVariables} props.variables - Variables de la requête GraphQL
 * @param {PageQuery} props.data - Données de la page retournées par la requête
 * @param {string} props.query - Requête GraphQL à exécuter
 * @returns {JSX.Element} Le composant de page avec le contenu enrichi
 */

const TinaPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  return (
    <main
      className="content-grid  space-y-6"
      data-tina-field={tinaField(page, "body")}
    >
      <TinaMarkdown content={page.body} components={components} />
    </main>
  );
};

export default TinaPage;
