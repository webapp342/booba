'use client';

import { useAppRootContext } from './useAppRootContext';

import { AppRootContextInterface } from '../Service/AppRootContext';

export const usePlatform = (): NonNullable<AppRootContextInterface['platform']> => {
  const context = useAppRootContext();
  return context.platform || 'base';
};