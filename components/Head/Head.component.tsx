import NextHead from 'next/head';

const defaultDescription = 'This is the CV of Felix Schliemann. Frontend Developer based in Berlin';

const Head = ({ title, description }: { title?: string, description?: string }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || 'Felix Schliemann CV'}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#333333" />
  </NextHead>
);

Head.defaultProps = {
  title: '',
  description: '',
};

export default Head;
