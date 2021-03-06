import {
  NormalizedCache,
} from './storeUtils';

import {
  writeResultToStore,
} from './writeToStore';

import {
  ApolloReducerConfig,
} from '../store';

import {
  Document,
} from 'graphql';

export function replaceQueryResults(state: NormalizedCache, {
  variables,
  document,
  newResult,
}: {
  variables: any;
  document: Document;
  newResult: Object;
}, config: ApolloReducerConfig) {
  const clonedState = { ...state } as NormalizedCache;

  return writeResultToStore({
    result: newResult,
    dataId: 'ROOT_QUERY',
    variables,
    document,
    store: clonedState,
    dataIdFromObject: config.dataIdFromObject,
  });
}
