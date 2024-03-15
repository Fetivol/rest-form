import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { FirstComponent } from './firstComponent/FirstComponent';

export const App = () => {
  return (
    <Layout>
      <FirstComponent title="Hello" />
      <GlobalStyle />
    </Layout>
  );
};
