import * as React from 'react';

export const navigationRef: React.RefObject<any> = React.createRef<any>();

export function navigate(name: string, params: any | undefined) {
  navigationRef.current?.navigate(name, params);
}

export function resetRoot(name: string) {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name: name }],
  });
}

// import * as RootNavigation from '../navigation/helpers/RootNavigation';
// RootNavigation.navigate(routes.accountTab.VerifyPhoneScreen, null);
