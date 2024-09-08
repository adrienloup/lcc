import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
  ReactNode,
} from 'react';
import { AlertProvider } from '../contexts/AlertContext';
import { DataProvider } from '../contexts/DataContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ProgressProvider } from '../contexts/ProgressContext';
import { ResultProvider } from '../contexts/ResultContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { UserProvider } from '../contexts/UserContext';

type ProvidersType = [
  ComponentType<{ children: ReactNode }>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const combineProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: { children: ReactNode }) => <>{children}</>
  );

export const AllProviders: FunctionComponent<{ children: ReactNode }> =
  combineProviders([
    [AlertProvider],
    [DataProvider],
    [LanguageProvider],
    [ProgressProvider],
    [ResultProvider],
    [ThemeProvider],
    [UserProvider],
  ]);
