'use client';

import '@telegram-apps/telegram-ui/dist/styles.css'; 
import { Page } from '@/components/Page';


import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';

const Demo = () => (
    <AppRoot>
         <Page back={true}>
      <Placeholder
        header="Title"
        description="Description"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: 'block', width: '144px', height: '144px' }}
        />
      </Placeholder>
      </Page>
    </AppRoot>
  );
  
  export default Demo;