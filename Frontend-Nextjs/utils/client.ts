import client from '@sanity/client';

export const sanityClient = client({
  // projectId: process.env.SANITY_PROJECT_ID,
  projectId: 'f1xjktsq',
  dataset: 'production',
  // dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-01-16',
  // token: process.env.SANITY_TOKEN,
  useCdn: false,
});
