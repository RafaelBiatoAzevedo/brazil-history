/* eslint-disable @typescript-eslint/ban-types */
import { FunctionComponent, ReactNode } from 'react';

export type FCWithChildren<T = {}> = FunctionComponent<
  T & {
    children?: ReactNode | ReactNode[];
  }
>;
