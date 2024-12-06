'use client';

import { useAppRootContext } from './useAppRootContext';

import { AppRootContextInterface } from '../../demo/Service/AppRootContext';

export const usePlatform = (): NonNullable<AppRootContextInterface['platform']> => {
  const context = useAppRootContext();
  return context.platform || 'base';
};