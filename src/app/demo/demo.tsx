'use client';

import '@telegram-apps/telegram-ui/dist/styles.css'; 

import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';

const Demo = () => (
    <AppRoot>
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
    </AppRoot>
  );
  
  export default Demo;